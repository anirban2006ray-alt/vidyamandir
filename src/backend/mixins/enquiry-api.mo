import Map "mo:core/Map";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import OutCall "mo:caffeineai-http-outcalls/outcall";
import Common "../types/common";
import EnquiryTypes "../types/enquiry";
import UserTypes "../types/user";
import EnquiryLib "../lib/enquiry";
import Notifications "../lib/notifications";

mixin (
  accessControlState : AccessControl.AccessControlState,
  enquiries : Map.Map<Text, EnquiryTypes.Enquiry>,
  nextEnquiryId : [var Nat],
  transform : OutCall.Transform,
  rateLimitMap : Map.Map<Text, Common.RateLimitEntry>,
) {
  // ── Rate limit helper ─────────────────────────────────────────────────────

  func checkEnquiryRateLimit(key : Text, maxCount : Nat, windowSecs : Int) : Bool {
    let now = Time.now();
    let windowNs : Int = windowSecs * 1_000_000_000;
    switch (rateLimitMap.get(key)) {
      case null {
        rateLimitMap.add(key, { count = 1; windowStart = now });
        true;
      };
      case (?entry) {
        if (now - entry.windowStart > windowNs) {
          rateLimitMap.add(key, { count = 1; windowStart = now });
          true;
        } else if (entry.count < maxCount) {
          rateLimitMap.add(key, { entry with count = entry.count + 1 });
          true;
        } else {
          false;
        };
      };
    };
  };

  /// Submit a new enquiry — open to anyone, no auth required.
  /// Validates all fields server-side. Rate limited: max 5 per caller per hour.
  /// Fires a fire-and-forget email notification to the store owner on success.
  public shared ({ caller }) func submitEnquiry(
    name : Text,
    email : Text,
    phone : Text,
    message : Text,
  ) : async { #ok : Text; #err : Common.AppError } {
    let rlKey = "enquiry:" # caller.toText();
    if (not checkEnquiryRateLimit(rlKey, 5, 3600)) {
      return #err(#rateLimitExceeded);
    };
    switch (EnquiryLib.submitEnquiry(enquiries, nextEnquiryId[0], name, email, phone, message)) {
      case (#ok(enquiry)) {
        nextEnquiryId[0] += 1;
        // Fire-and-forget: notify store owner via email
        ignore Notifications.sendEnquiryNotification(enquiry, transform);
        #ok(enquiry.id);
      };
      case (#err(e)) { #err(e) };
    };
  };

  /// Retrieve enquiries submitted with a given email address.
  /// Useful for users who want to review their own submission history.
  public query func getMyEnquiries(email : Text) : async [EnquiryTypes.Enquiry] {
    if (email.size() == 0) return [];
    EnquiryLib.getEnquiriesByEmail(enquiries, email);
  };

  // ── Admin API ─────────────────────────────────────────────────────────────

  /// List all enquiries sorted by newest first — admin only.
  public query ({ caller }) func listAllEnquiries() : async [EnquiryTypes.Enquiry] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admins only");
    };
    EnquiryLib.listEnquiries(enquiries);
  };

  /// Paginated admin enquiries list. limit capped at 100.
  public query ({ caller }) func listAllEnquiriesPaged(offset : Nat, limit : Nat) : async UserTypes.PagedResult<EnquiryTypes.Enquiry> {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admins only");
    };
    let cappedLimit = if (limit == 0) 20 else if (limit > 100) 100 else limit;
    let all = EnquiryLib.listEnquiries(enquiries);
    let total = all.size();
    if (offset >= total) {
      return { items = []; totalCount = total; hasMore = false };
    };
    let end = if (offset + cappedLimit > total) total else offset + cappedLimit;
    {
      items = all.sliceToArray(offset, end);
      totalCount = total;
      hasMore = end < total;
    };
  };

  /// Update enquiry status to 'viewed' or 'replied' — admin only.
  public shared ({ caller }) func updateEnquiryStatus(
    id : Text,
    status : EnquiryTypes.EnquiryStatus,
  ) : async Bool {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admins only");
    };
    EnquiryLib.updateEnquiryStatus(enquiries, id, status);
  };

  /// Delete an enquiry permanently — admin only.
  public shared ({ caller }) func deleteEnquiry(id : Text) : async Bool {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admins only");
    };
    EnquiryLib.deleteEnquiry(enquiries, id);
  };

  /// Get total count of all enquiries — admin only.
  public query ({ caller }) func getEnquiryCount() : async Nat {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admins only");
    };
    enquiries.size();
  };
};

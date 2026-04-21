import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import Common "../types/common";
import EnquiryTypes "../types/enquiry";
import EnquiryLib "../lib/enquiry";

mixin (
  accessControlState : AccessControl.AccessControlState,
  enquiries : Map.Map<Text, EnquiryTypes.Enquiry>,
  nextEnquiryId : [var Nat],
) {
  /// Submit a new enquiry — open to anyone, no auth required.
  public shared func submitEnquiry(
    name : Text,
    email : Text,
    phone : Text,
    message : Text,
  ) : async { #ok : Text; #err : Common.AppError } {
    switch (EnquiryLib.submitEnquiry(enquiries, nextEnquiryId[0], name, email, phone, message)) {
      case (#ok(id)) { nextEnquiryId[0] += 1; #ok(id) };
      case (#err(e)) { #err(e) };
    };
  };

  /// List all enquiries — admin only.
  public query ({ caller }) func listAllEnquiries() : async [EnquiryTypes.Enquiry] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admins only");
    };
    EnquiryLib.listEnquiries(enquiries);
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
};

import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Char "mo:core/Char";
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
  downloadCounts : Map.Map<Text, Nat>,
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

  // ── JSON / text helpers ───────────────────────────────────────────────────

  /// Validate email: same rules as lib/enquiry.mo (local copy to avoid re-import).
  func isValidChatEmail(email : Text) : Bool {
    let s = email.size();
    if (s <= 5) return false;
    var hasSpace = false;
    for (c in email.toIter()) { if (c == ' ') { hasSpace := true } };
    if (hasSpace) return false;
    var atCount = 0;
    var atPos = 0;
    var i = 0;
    for (c in email.toIter()) {
      if (c == '@') { atCount += 1; atPos := i };
      i += 1;
    };
    if (atCount != 1) return false;
    if (atPos == 0) return false;
    let domain = Text.fromArray(email.toArray().sliceToArray(atPos + 1, s));
    var dotPos = -1;
    var j = 0;
    for (c in domain.toIter()) {
      if (c == '.') { dotPos := j };
      j += 1;
    };
    if (dotPos < 0) return false;
    if (dotPos == 0) return false;
    let afterDot = domain.size() - dotPos - 1;
    afterDot >= 2;
  };

  /// Validate Indian phone (10 pure digits required for user SMS).
  func isValidChatPhone(phone : Text) : Bool {
    var digits = "";
    for (c in phone.toIter()) {
      if (c.isDigit()) { digits #= c.toText() };
    };
    let len = digits.size();
    if (len == 10) return true;
    if (len == 12) {
      return Text.fromArray(digits.toArray().sliceToArray(0, 2)) == "91";
    };
    if (len == 11) { return digits.toArray()[0] == '0' };
    false;
  };

  /// Trim leading/trailing whitespace.
  func trimChat(t : Text) : Text {
    let chars = t.toArray();
    var start = 0;
    var end = chars.size();
    while (start < end and chars[start].isWhitespace()) { start += 1 };
    while (end > start and chars[end - 1].isWhitespace()) { end -= 1 };
    Text.fromArray(chars.sliceToArray(start, end));
  };

  /// Escape a text value for inclusion in a JSON string.
  func escapeJsonChat(t : Text) : Text {
    var out = "";
    for (c in t.chars()) {
      let code = c.toNat32();
      if (code == 34) { out #= "\\\"" }
      else if (code == 92) { out #= "\\\\" }
      else if (code == 10) { out #= "\\n" }
      else if (code == 13) { out #= "\\r" }
      else if (code == 9) { out #= "\\t" }
      else { out #= c.toText() };
    };
    out;
  };

  /// Parse the AI reply text from an OpenAI chat completion JSON response.
  /// Looks for: "content":"<reply>" in choices[0].message.content
  func parseOpenAiReply(json : Text) : Text {
    let marker = "\"content\":\"";
    let chars = json.toArray();
    let markerChars = marker.toArray();
    let jsonLen = chars.size();
    let markerLen = markerChars.size();
    var pos = jsonLen;
    var found = false;
    var contentStart = 0;
    label search while (pos >= markerLen) {
      pos -= 1;
      var match = true;
      var k = 0;
      while (k < markerLen) {
        if (chars[pos + k] != markerChars[k]) { match := false };
        k += 1;
      };
      if (match) {
        contentStart := pos + markerLen;
        found := true;
        break search;
      };
    };
    if (not found) return "Thank you for your question! Please visit Vidyamandir at Balgona, GT Road, Purba Bardhaman or call 9475727810 for assistance.";
    var reply = "";
    var idx = contentStart;
    var escaped = false;
    label extract while (idx < jsonLen) {
      let c = chars[idx];
      if (escaped) {
        if (c == 'n') { reply #= "\n" }
        else if (c == 't') { reply #= "\t" }
        else if (c == 'r') { reply #= "\r" }
        else { reply #= c.toText() };
        escaped := false;
      } else if (c == '\\') {
        escaped := true;
      } else if (c.toNat32() == 34) {
        break extract;
      } else {
        reply #= c.toText();
      };
      idx += 1;
    };
    if (reply.size() == 0) {
      "Thank you for your question! Please visit Vidyamandir at Balgona, GT Road, Purba Bardhaman or call 9475727810 for assistance."
    } else {
      reply
    };
  };

  /// Default bilingual thank-you fallback used when OpenAI is unavailable.
  let DEFAULT_THANK_YOU : Text =
    "Thank you for contacting Vidyamandir! We have received your enquiry and will get back to you within 24 hours. " #
    "Our team is happy to help. Visit us at Balgona, GT Road, Purba Bardhaman. / " #
    "ভিদ্যামন্দিরে যোগাযোগ করার জন্য ধন্যবাদ! আমরা আপনার অনুসন্ধান পেয়েছি এবং ২৪ ঘণ্টার মধ্যে আপনার সাথে যোগাযোগ করব। " #
    "আমাদের দল সাহায্য করতে প্রস্তুত। বালগোনা, জিটি রোড, পূর্ব বর্ধমানে আমাদের পরিদর্শন করুন।";

  /// Call OpenAI and return an AI-generated bilingual (English+Bengali) reply, or DEFAULT_THANK_YOU on failure.
  func fetchAiReply(userMessage : Text) : async Text {
    let systemPrompt =
      "You are the AI assistant for Vidyamandir, a Bengali bookshop located at Balgona, GT Road, " #
      "Purba Bardhaman, West Bengal, India (PIN 713125). Phone: 9475727810. " #
      "Email: anirbanray030000@gmail.com. " #
      "You help customers with questions about books, prices, orders, shipping, returns, and the shop. " #
      "IMPORTANT: Always respond in BOTH English AND Bengali. First give the complete answer in English, " #
      "then add a separator ' / ' and give the same answer in Bengali. " #
      "Example format: 'Thank you for your question about our books! [English answer here] / " #
      "আপনার প্রশ্নের জন্য ধন্যবাদ! [Bengali answer here]' " #
      "Start every response with 'Thank you for contacting Vidyamandir!' in English, followed by the Bengali equivalent. " #
      "Be friendly, helpful, and concise. " #
      "If you don't know specific pricing, suggest the customer visit the website or contact the store directly. " #
      "End with 'We hope to see you soon! / আমরা আপনাকে শীঘ্রই দেখার অপেক্ষায় আছি!'";

    let openAiPayload =
      "{\"model\":\"gpt-3.5-turbo\",\"messages\":[" #
      "{\"role\":\"system\",\"content\":\"" # escapeJsonChat(systemPrompt) # "\"}," #
      "{\"role\":\"user\",\"content\":\"" # escapeJsonChat(userMessage) # "\"}" #
      "],\"max_tokens\":400,\"temperature\":0.7}";

    let openAiHeaders : [OutCall.Header] = [
      { name = "Content-Type"; value = "application/json" },
      { name = "Authorization"; value = "Bearer " # Notifications.OPENAI_API_KEY },
    ];

    try {
      let responseText = await OutCall.httpPostRequest(
        "https://api.openai.com/v1/chat/completions",
        openAiHeaders,
        openAiPayload,
        transform,
      );
      parseOpenAiReply(responseText);
    } catch (_) {
      DEFAULT_THANK_YOU;
    };
  };

  // ── Standard enquiry ──────────────────────────────────────────────────────

  /// Submit a new enquiry — open to anyone, no auth required.
  /// Validates all fields server-side. Rate limited: max 5 per caller per hour.
  /// Fires AI reply to user email + SMS; fires store notification email.
  /// Returns the enquiry ID and AI-generated bilingual reply so the frontend can display it immediately.
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

        // Generate AI bilingual reply (English+Bengali) — fallback to default if OpenAI fails
        let aiReply = await fetchAiReply(enquiry.message);

        // Persist the AI reply + mark as replied in one atomic update
        ignore EnquiryLib.updateEnquiryAiReply(enquiries, enquiry.id, aiReply);

        // Fire-and-forget: notify store owner via email
        ignore Notifications.sendEnquiryNotification(enquiry, transform);

        // Fire-and-forget: send AI reply to user's own email
        ignore Notifications.sendChatReplyToUser(enquiry.name, enquiry.email, enquiry.message, aiReply, transform);

        // Fire-and-forget: send AI reply SMS to user's own phone (if provided)
        if (enquiry.phone.size() > 0) {
          ignore Notifications.sendChatSmsToUser(enquiry.phone, aiReply, transform);
        };

        #ok(enquiry.id);
      };
      case (#err(e)) { #err(e) };
    };
  };

  // ── Chat AI enquiry ───────────────────────────────────────────────────────

  /// Submit a chat enquiry: calls OpenAI, stores enquiry, fires notifications.
  /// Rate limited: max 10 chat messages per caller per hour.
  public shared ({ caller }) func submitChatEnquiry(
    name : Text,
    email : Text,
    phone : Text,
    question : Text,
  ) : async { #ok : { enquiryId : Text; aiReply : Text }; #err : Common.AppError } {
    let rlKey = "chat:" # caller.toText();
    if (not checkEnquiryRateLimit(rlKey, 10, 3600)) {
      return #err(#rateLimitExceeded);
    };

    // Validate inputs
    let trimName = trimChat(name);
    let trimEmail = trimChat(email);
    let trimPhone = trimChat(phone);
    let trimQuestion = trimChat(question);

    if (trimName.size() == 0) {
      return #err(#validationError("Name cannot be empty"));
    };
    if (not isValidChatEmail(trimEmail)) {
      return #err(#validationError("Invalid email address format"));
    };
    if (trimPhone.size() > 0 and not isValidChatPhone(trimPhone)) {
      return #err(#validationError("Phone must be a valid 10-digit Indian number"));
    };
    if (trimQuestion.size() < 5) {
      return #err(#validationError("Question must be at least 5 characters"));
    };
    if (trimQuestion.size() > 2000) {
      return #err(#validationError("Question must be at most 2000 characters"));
    };

    // Get AI reply
    let aiReply = await fetchAiReply(trimQuestion);

    // Store as chat enquiry — already has AI reply, status is replied immediately
    let enquiryId = "ENQ-" # nextEnquiryId[0].toText();
    let enquiry : EnquiryTypes.Enquiry = {
      id = enquiryId;
      name = trimName;
      email = trimEmail;
      phone = trimPhone;
      message = "CHAT: " # trimQuestion;
      submittedAt = Time.now();
      status = #replied;
      enquiryType = "chat";
      aiReply;
    };
    enquiries.add(enquiryId, enquiry);
    nextEnquiryId[0] += 1;

    // Fire-and-forget: email AI reply to user
    ignore Notifications.sendChatReplyToUser(trimName, trimEmail, trimQuestion, aiReply, transform);
    // Fire-and-forget: SMS to user's phone
    if (trimPhone.size() > 0) {
      ignore Notifications.sendChatSmsToUser(trimPhone, aiReply, transform);
    };
    // Fire-and-forget: notify store owner about the chat enquiry
    ignore Notifications.sendChatEnquiryToStore(enquiryId, trimName, trimEmail, trimPhone, trimQuestion, aiReply, transform);

    #ok({ enquiryId; aiReply });
  };

  /// Retrieve enquiries submitted with a given email address.
  /// Useful for users who want to review their own submission history.
  public query func getMyEnquiries(email : Text) : async [EnquiryTypes.Enquiry] {
    if (email.size() == 0) return [];
    EnquiryLib.getEnquiriesByEmail(enquiries, email);
  };

  // ── Download tracking ─────────────────────────────────────────────────────

  /// Record a download attempt for a platform ('android', 'ios', 'windows', 'desktop').
  /// Open to all callers — no auth required.
  public shared func recordDownload(platform : Text) : async () {
    let key = platform.toLower();
    let current = switch (downloadCounts.get(key)) {
      case null 0;
      case (?n) n;
    };
    downloadCounts.add(key, current + 1);
  };

  /// Return download counts per platform for the admin dashboard.
  public query ({ caller }) func getDownloadStats() : async [(Text, Nat)] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admins only");
    };
    downloadCounts.entries().toArray();
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

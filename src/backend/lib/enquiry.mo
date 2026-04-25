import Map "mo:core/Map";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Common "../types/common";
import EnquiryTypes "../types/enquiry";

module {
  // ── Validation helpers ────────────────────────────────────────────────────

  /// Trim leading/trailing whitespace from a text string.
  func trim(t : Text) : Text {
    let chars = t.toArray();
    var start = 0;
    var end = chars.size();
    while (start < end and chars[start].isWhitespace()) { start += 1 };
    while (end > start and chars[end - 1].isWhitespace()) { end -= 1 };
    Text.fromArray(chars.sliceToArray(start, end));
  };

  /// Validate an email address: must have @, domain part with dot, length > 5, no spaces.
  func isValidEmail(email : Text) : Bool {
    let s = email.size();
    if (s <= 5) return false;
    // no spaces allowed
    var hasSpace = false;
    for (c in email.toIter()) {
      if (c == ' ') { hasSpace := true };
    };
    if (hasSpace) return false;
    // must contain exactly one '@'
    var atCount = 0;
    var atPos = 0;
    var i = 0;
    for (c in email.toIter()) {
      if (c == '@') { atCount += 1; atPos := i };
      i += 1;
    };
    if (atCount != 1) return false;
    // must have at least one char before @
    if (atPos == 0) return false;
    // domain part (after @) must contain a dot and have at least 2 chars after the last dot
    let domain = Text.fromArray(email.toArray().sliceToArray(atPos + 1, s));
    var dotPos = -1;
    var j = 0;
    for (c in domain.toIter()) {
      if (c == '.') { dotPos := j };
      j += 1;
    };
    if (dotPos < 0) return false;        // no dot in domain
    if (dotPos == 0) return false;        // domain starts with dot
    let afterDot = domain.size() - dotPos - 1;
    if (afterDot < 2) return false;       // TLD must be at least 2 chars
    true;
  };

  /// Validate an Indian phone number.
  /// Accepts: 10 digits, optionally prefixed by +91 or 0.
  /// Strips all non-digit chars first.
  func isValidIndianPhone(phone : Text) : Bool {
    // collect only digit chars
    var digits : Text = "";
    for (c in phone.toIter()) {
    if (c.isDigit()) { digits #= c.toText() };
    };
    let len = digits.size();
    // 10 digits: plain mobile number
    if (len == 10) return true;
    // 12 digits starting with 91: international format
    if (len == 12) {
      let prefix = Text.fromArray(digits.toArray().sliceToArray(0, 2));
      return prefix == "91";
    };
    // 11 digits starting with 0: STD format
    if (len == 11) {
      return digits.toArray()[0] == '0';
    };
    false;
  };

  /// Validate a name field: 2–100 chars, not all whitespace.
  func isValidName(name : Text) : Bool {
    let trimmed = trim(name);
    let len = trimmed.size();
    len >= 2 and len <= 100;
  };

  /// Validate a message field: 10–2000 chars after trimming.
  func isValidMessage(msg : Text) : Bool {
    let trimmed = trim(msg);
    let len = trimmed.size();
    len >= 10 and len <= 2000;
  };

  // ── Public API ────────────────────────────────────────────────────────────

  public func submitEnquiry(
    enquiries : Map.Map<Text, EnquiryTypes.Enquiry>,
    nextId : Nat,
    name : Text,
    email : Text,
    phone : Text,
    message : Text,
  ) : { #ok : EnquiryTypes.Enquiry; #err : Common.AppError } {
    let trimmedName = trim(name);
    let trimmedEmail = trim(email);
    let trimmedPhone = trim(phone);
    let trimmedMessage = trim(message);

    if (not isValidName(trimmedName)) {
      return #err(#validationError("Name must be 2-100 characters and cannot be blank"));
    };
    if (not isValidEmail(trimmedEmail)) {
      return #err(#validationError("Invalid email address format"));
    };
    if (trimmedPhone.size() > 0 and not isValidIndianPhone(trimmedPhone)) {
      return #err(#validationError("Phone must be a valid 10-digit Indian number (optionally with +91 or 0 prefix)"));
    };
    if (not isValidMessage(trimmedMessage)) {
      return #err(#validationError("Message must be 10-2000 characters"));
    };

    let id = "ENQ-" # nextId.toText();
    let enquiry : EnquiryTypes.Enquiry = {
      id;
      name = trimmedName;
      email = trimmedEmail;
      phone = trimmedPhone;
      message = trimmedMessage;
      submittedAt = Time.now();
      status = #new_;
      enquiryType = "standard";
      aiReply = "";
    };
    enquiries.add(id, enquiry);
    #ok(enquiry);
  };

  public func listEnquiries(
    enquiries : Map.Map<Text, EnquiryTypes.Enquiry>,
  ) : [EnquiryTypes.Enquiry] {
    let all = enquiries.entries()
      .map(func((_, e) : (Text, EnquiryTypes.Enquiry)) : EnquiryTypes.Enquiry { e })
      .toArray();
    // Sort by submittedAt descending (newest first)
    all.sort<EnquiryTypes.Enquiry>(func(a, b) {
      if (a.submittedAt > b.submittedAt) #less
      else if (a.submittedAt < b.submittedAt) #greater
      else #equal
    });
  };

  /// Returns all enquiries submitted with the given email address (case-insensitive).
  public func getEnquiriesByEmail(
    enquiries : Map.Map<Text, EnquiryTypes.Enquiry>,
    email : Text,
  ) : [EnquiryTypes.Enquiry] {
    let lowerEmail = email.toLower();
    enquiries.entries()
      .filter(func((_, e) : (Text, EnquiryTypes.Enquiry)) : Bool {
        e.email.toLower() == lowerEmail
      })
      .map(func((_, e) : (Text, EnquiryTypes.Enquiry)) : EnquiryTypes.Enquiry { e })
      .toArray();
  };

  public func updateEnquiryStatus(
    enquiries : Map.Map<Text, EnquiryTypes.Enquiry>,
    id : Text,
    status : EnquiryTypes.EnquiryStatus,
  ) : Bool {
    switch (enquiries.get(id)) {
      case null { false };
      case (?e) {
        enquiries.add(id, { e with status });
        true;
      };
    };
  };

  /// Delete an enquiry by ID (admin). Returns true if deleted.
  public func deleteEnquiry(
    enquiries : Map.Map<Text, EnquiryTypes.Enquiry>,
    id : Text,
  ) : Bool {
    switch (enquiries.get(id)) {
      case null { false };
      case (?_) {
        enquiries.remove(id);
        true;
      };
    };
  };

  /// Update the aiReply field of an existing enquiry. Returns true if updated.
  public func updateEnquiryAiReply(
    enquiries : Map.Map<Text, EnquiryTypes.Enquiry>,
    id : Text,
    aiReply : Text,
  ) : Bool {
    switch (enquiries.get(id)) {
      case null { false };
      case (?e) {
        enquiries.add(id, { e with aiReply });
        true;
      };
    };
  };

  /// Build a plain-text email notification body for a new enquiry.
  public func buildEnquiryEmailBody(enquiry : EnquiryTypes.Enquiry) : Text {
    "New enquiry received at Vidyamandir Bookshop\n\n"
    # "Enquiry ID: " # enquiry.id # "\n"
    # "Name: " # enquiry.name # "\n"
    # "Email: " # enquiry.email # "\n"
    # "Phone: " # (if (enquiry.phone == "") "Not provided" else enquiry.phone) # "\n\n"
    # "Message:\n" # enquiry.message # "\n\n"
    # "---\nVidyamandir Bookshop\nBalgona, GT Road, Purba Bardhaman - 713125\nPhone: 9475727810";
  };
};

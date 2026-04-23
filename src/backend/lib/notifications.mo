import OutCall "mo:caffeineai-http-outcalls/outcall";
import EnquiryTypes "../types/enquiry";
import OrderTypes "../types/order";
import ReviewTypes "../types/review";

/// Fire-and-forget email (Resend API) and SMS (Twilio) notifications via HTTP outcalls.
/// All public functions return async () and should be called with `ignore` to avoid blocking.
module {

  // ── Config — replace these placeholders with real credentials ───────────────

  /// Replace with your Resend API key from https://resend.com/api-keys
  let RESEND_API_KEY : Text = "re_PLACEHOLDER_KEY_REPLACE_ME";

  /// Resend sandbox sender — works without domain verification.
  /// Replace with your verified domain sender once you add a domain in Resend.
  let FROM_EMAIL : Text = "Vidyamandir Store <onboarding@resend.dev>";

  /// Recipient email for all store notifications
  let STORE_EMAIL : Text = "anirbanray030000@gmail.com";

  // ── Twilio credentials — replace with values from https://twilio.com/console ─

  /// Replace with your Twilio Account SID (starts with "AC")
  let TWILIO_ACCOUNT_SID : Text = "ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

  /// Replace with your Twilio Auth Token
  let TWILIO_AUTH_TOKEN : Text = "your_auth_token_here";

  /// Replace with your Twilio phone number (E.164 format, e.g. "+12015551234")
  let TWILIO_FROM_NUMBER : Text = "+1XXXXXXXXXX";

  /// Store phone number for high-priority SMS alerts
  let STORE_PHONE : Text = "+919475727810";

  // ── Base64 encoder (needed for Twilio HTTP Basic Auth) ───────────────────────

  let BASE64_CHARS : Text = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  func base64Encode(input : Text) : Text {
    let chars = input.toArray();
    let base64Array = BASE64_CHARS.toArray();
    var out = "";
    var i = 0;
    let len = chars.size();
    while (i < len) {
      let b0 = chars[i].toNat32();
      let b1 : Nat32 = if (i + 1 < len) chars[i + 1].toNat32() else 0;
      let b2 : Nat32 = if (i + 2 < len) chars[i + 2].toNat32() else 0;
      let idx0 = (b0 >> 2) & 0x3F;
      let idx1 = ((b0 & 0x03) << 4) | ((b1 >> 4) & 0x0F);
      let idx2 = ((b1 & 0x0F) << 2) | ((b2 >> 6) & 0x03);
      let idx3 = b2 & 0x3F;
      out #= base64Array[idx0.toNat()].toText();
      out #= base64Array[idx1.toNat()].toText();
      if (i + 1 < len) {
        out #= base64Array[idx2.toNat()].toText();
      } else {
        out #= "=";
      };
      if (i + 2 < len) {
        out #= base64Array[idx3.toNat()].toText();
      } else {
        out #= "=";
      };
      i += 3;
    };
    out;
  };

  // ── JSON / form helpers ──────────────────────────────────────────────────────

  func escapeJson(t : Text) : Text {
    var out = "";
    for (c in t.chars()) {
      let code = c.toNat32();
      if (code == 34) { out #= "\\\"" }      // '"'
      else if (code == 92) { out #= "\\\\" } // '\'
      else if (code == 10) { out #= "\\n" }  // newline
      else if (code == 13) { out #= "\\r" }  // carriage return
      else if (code == 9) { out #= "\\t" }   // tab
      else { out #= c.toText() };
    };
    out;
  };

  func jsonStr(k : Text, v : Text) : Text {
    "\"" # k # "\":\"" # escapeJson(v) # "\"";
  };

  /// URL-encode a text value for form submissions (handles common chars).
  func urlEncode(t : Text) : Text {
    var out = "";
    for (c in t.chars()) {
      let code = c.toNat32();
      // Keep alphanumeric and safe chars as-is; encode the rest
      if (
        (code >= 48 and code <= 57) or  // 0-9
        (code >= 65 and code <= 90) or  // A-Z
        (code >= 97 and code <= 122) or // a-z
        code == 45 or code == 95 or code == 46 or code == 126 // - _ . ~
      ) {
        out #= c.toText();
      } else if (code == 32) {
        out #= "+";
      } else {
        // Percent-encode as %XX (two hex digits)
        let hex = "0123456789ABCDEF";
        let hexChars = hex.toArray();
        out #= "%" # hexChars[(code / 16).toNat()].toText() # hexChars[(code % 16).toNat()].toText();
      };
    };
    out;
  };

  // ── Low-level senders ────────────────────────────────────────────────────────

  /// POST a JSON body to the Resend API.  Failures are silently dropped —
  /// this is intentional (fire-and-forget).
  func sendEmail(subject : Text, htmlBody : Text, transform : OutCall.Transform) : async () {
    let url = "https://api.resend.com/emails";
    let payload =
      "{" #
      "\"from\":\"" # escapeJson(FROM_EMAIL) # "\"," #
      "\"to\":[\"" # escapeJson(STORE_EMAIL) # "\"]," #
      jsonStr("subject", subject) # "," #
      jsonStr("html", htmlBody) #
      "}";
    let headers : [OutCall.Header] = [
      { name = "Content-Type"; value = "application/json" },
      { name = "Authorization"; value = "Bearer " # RESEND_API_KEY },
    ];
    try {
      ignore await OutCall.httpPostRequest(url, headers, payload, transform);
    } catch (_) {};
  };

  /// POST a form-encoded SMS message via the Twilio Messages API.
  /// Uses HTTP Basic Auth (Account SID : Auth Token).  Fire-and-forget.
  func sendSmsViaTwilio(body : Text, transform : OutCall.Transform) : async () {
    let url = "https://api.twilio.com/2010-04-01/Accounts/" # TWILIO_ACCOUNT_SID # "/Messages.json";
    let credentials = base64Encode(TWILIO_ACCOUNT_SID # ":" # TWILIO_AUTH_TOKEN);
    let formBody =
      "To=" # urlEncode(STORE_PHONE) #
      "&From=" # urlEncode(TWILIO_FROM_NUMBER) #
      "&Body=" # urlEncode(body);
    let headers : [OutCall.Header] = [
      { name = "Content-Type"; value = "application/x-www-form-urlencoded" },
      { name = "Authorization"; value = "Basic " # credentials },
    ];
    try {
      ignore await OutCall.httpPostRequest(url, headers, formBody, transform);
    } catch (_) {};
  };

  // ── HTML email helpers ───────────────────────────────────────────────────────

  func htmlWrap(title : Text, bodyHtml : Text) : Text {
    "<html><body style=\"font-family:Arial,sans-serif;color:#1a1a2e;background:#f5f5f5;padding:20px\">" #
    "<div style=\"max-width:600px;margin:0 auto;background:#fff;border-radius:8px;padding:32px;box-shadow:0 2px 8px rgba(0,0,0,0.1)\">" #
    "<h2 style=\"color:#e65c00;border-bottom:2px solid #e65c00;padding-bottom:8px\">" # escapeJson(title) # "</h2>" #
    bodyHtml #
    "<hr style=\"margin-top:32px;border:none;border-top:1px solid #eee\"/>" #
    "<p style=\"font-size:12px;color:#888\">Vidyamandir Bookshop &bull; Balgona, GT Road, Purba Bardhaman &bull; " #
    "<a href=\"https://vital-fuchsia-8cy-draft.caffeine.xyz/admin\">Admin Panel</a></p>" #
    "</div></body></html>";
  };

  func row(lbl : Text, value : Text) : Text {
    "<tr><td style=\"padding:6px 12px;font-weight:bold;width:140px\">" # lbl # "</td>" #
    "<td style=\"padding:6px 12px\">" # escapeJson(value) # "</td></tr>";
  };

  func table(rows : Text) : Text {
    "<table style=\"border-collapse:collapse;width:100%;margin:16px 0\">" # rows # "</table>";
  };

  // ── Public notification functions ────────────────────────────────────────────

  /// Send email + (no SMS for enquiry) notification when a new enquiry is submitted.
  public func sendEnquiryNotification(
    enquiry : EnquiryTypes.Enquiry,
    transform : OutCall.Transform,
  ) : async () {
    let subject = "New Enquiry from " # enquiry.name # " \u{2014} Vidyamandir";
    let bodyHtml =
      "<p>A new customer enquiry has been received.</p>" #
      table(
        row("Name", enquiry.name) #
        row("Email", enquiry.email) #
        row("Phone", if (enquiry.phone == "") "Not provided" else enquiry.phone) #
        row("Enquiry ID", enquiry.id)
      ) #
      "<p><strong>Message:</strong></p>" #
      "<blockquote style=\"border-left:4px solid #e65c00;padding:8px 16px;background:#fff8f5;margin:8px 0\">" #
      escapeJson(enquiry.message) #
      "</blockquote>";
    await sendEmail(subject, htmlWrap("New Enquiry", bodyHtml), transform);
  };

  /// Send email + SMS notification when a new order is created.
  public func sendOrderNotification(
    order : OrderTypes.Order,
    transform : OutCall.Transform,
  ) : async () {
    let subject = "New Order #" # order.id.toText() # " placed \u{2014} Vidyamandir";
    var itemRows = "";
    for (item in order.items.values()) {
      itemRows #= row(item.titleEn, "x" # item.quantity.toText() # " @ Rs." # (item.priceInPaisa / 100).toText());
    };
    let discount = switch (order.promoCodeApplied) {
      case null "";
      case (?code) row("Promo Code", code # " (-Rs." # (order.discountInPaisa / 100).toText() # ")");
    };
    let bodyHtml =
      "<p>A new order has been placed on Vidyamandir.</p>" #
      table(
        row("Order ID", "#" # order.id.toText()) #
        row("Customer", order.shippingAddress.fullName) #
        row("Phone", order.shippingAddress.phone) #
        itemRows #
        discount #
        row("Total", "Rs." # (order.totalInPaisa / 100).toText()) #
        row("Ship to", order.shippingAddress.line1 # ", " # order.shippingAddress.city # ", " # order.shippingAddress.state # " - " # order.shippingAddress.pincode)
      );
    ignore sendEmail(subject, htmlWrap("New Order Received", bodyHtml), transform);
    // High-priority SMS for new orders
    let smsBody =
      "New order #" # order.id.toText() #
      " from " # order.shippingAddress.fullName #
      ". Amount: Rs." # (order.totalInPaisa / 100).toText() #
      ". View admin panel.";
    ignore sendSmsViaTwilio(smsBody, transform);
  };

  /// Send email notification when a review is submitted.
  public func sendReviewNotification(
    review : ReviewTypes.ReviewInternal,
    productTitle : Text,
    transform : OutCall.Transform,
  ) : async () {
    let stars = switch (review.rating) {
      case 1 "\u{2605}\u{2606}\u{2606}\u{2606}\u{2606}";
      case 2 "\u{2605}\u{2605}\u{2606}\u{2606}\u{2606}";
      case 3 "\u{2605}\u{2605}\u{2605}\u{2606}\u{2606}";
      case 4 "\u{2605}\u{2605}\u{2605}\u{2605}\u{2606}";
      case _ "\u{2605}\u{2605}\u{2605}\u{2605}\u{2605}";
    };
    let subject = "New Review on \"" # productTitle # "\" \u{2014} Vidyamandir";
    let verified = if (review.isVerifiedPurchase) "<span style=\"color:#27ae60\">&#10003; Verified Purchase</span>" else "";
    let bodyHtml =
      "<p>A new review has been submitted on Vidyamandir.</p>" #
      table(
        row("Book", productTitle) #
        row("Rating", stars # " (" # review.rating.toText() # "/5)") #
        row("Title", review.titleEn) #
        row("Review ID", review.id.toText())
      ) #
      "<p><strong>Review:</strong></p>" #
      "<blockquote style=\"border-left:4px solid #e65c00;padding:8px 16px;background:#fff8f5;margin:8px 0\">" #
      escapeJson(review.bodyEn) #
      "</blockquote>" #
      "<p>" # verified # "</p>";
    await sendEmail(subject, htmlWrap("New Book Review", bodyHtml), transform);
  };

  /// Send email + SMS notification when a return/refund request is made.
  public func sendReturnNotification(
    order : OrderTypes.Order,
    reason : Text,
    transform : OutCall.Transform,
  ) : async () {
    let statusLabel = switch (order.status) {
      case (#refundRequested) "Refund Requested";
      case (#refunded) "Refunded";
      case _ "Return/Refund";
    };
    let subject = "Return Request for Order #" # order.id.toText() # " \u{2014} Vidyamandir";
    var itemRows = "";
    for (item in order.items.values()) {
      itemRows #= row(item.titleEn, "x" # item.quantity.toText());
    };
    let bodyHtml =
      "<p>A return/refund request has been received on Vidyamandir.</p>" #
      table(
        row("Order ID", "#" # order.id.toText()) #
        row("Status", statusLabel) #
        row("Customer", order.shippingAddress.fullName) #
        row("Phone", order.shippingAddress.phone) #
        itemRows #
        row("Order Total", "Rs." # (order.totalInPaisa / 100).toText()) #
        row("Reason", if (reason == "") "Not specified" else reason)
      );
    ignore sendEmail(subject, htmlWrap("Return Request Received", bodyHtml), transform);
    // High-priority SMS for return requests
    let reasonSnippet = if (reason.size() > 50) reason.size().toText() # " chars" else reason;
    let smsBody =
      "Return request for order #" # order.id.toText() #
      " from " # order.shippingAddress.fullName #
      ". Reason: " # (if (reason == "") "Not specified" else reasonSnippet) #
      ". Review in admin panel.";
    ignore sendSmsViaTwilio(smsBody, transform);
  };
};

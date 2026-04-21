import Map "mo:core/Map";
import Time "mo:core/Time";
import Nat "mo:core/Nat";
import Common "../types/common";
import EnquiryTypes "../types/enquiry";

module {
  public func submitEnquiry(
    enquiries : Map.Map<Text, EnquiryTypes.Enquiry>,
    nextId : Nat,
    name : Text,
    email : Text,
    phone : Text,
    message : Text,
  ) : { #ok : Text; #err : Common.AppError } {
    if (name.size() == 0) return #err(#invalidInput("Name is required"));
    if (email.size() == 0) return #err(#invalidInput("Email is required"));
    if (message.size() == 0) return #err(#invalidInput("Message is required"));

    let id = "ENQ-" # nextId.toText();
    let enquiry : EnquiryTypes.Enquiry = {
      id;
      name;
      email;
      phone;
      message;
      submittedAt = Time.now();
      status = #new_;
    };
    enquiries.add(id, enquiry);
    #ok(id);
  };

  public func listEnquiries(
    enquiries : Map.Map<Text, EnquiryTypes.Enquiry>,
  ) : [EnquiryTypes.Enquiry] {
    enquiries.entries()
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
};

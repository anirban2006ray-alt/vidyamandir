import Map "mo:core/Map";

module {
  // Old Enquiry type (before enquiryType and aiReply fields were added)
  type OldEnquiryStatus = {
    #new_;
    #viewed;
    #replied;
  };

  type OldEnquiry = {
    id : Text;
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    submittedAt : Int;
    status : OldEnquiryStatus;
  };

  // New Enquiry type (with enquiryType and aiReply added)
  type NewEnquiryStatus = {
    #new_;
    #viewed;
    #replied;
  };

  type NewEnquiry = {
    id : Text;
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    submittedAt : Int;
    status : NewEnquiryStatus;
    enquiryType : Text;
    aiReply : Text;
  };

  type OldActor = {
    enquiries : Map.Map<Text, OldEnquiry>;
  };

  type NewActor = {
    enquiries : Map.Map<Text, NewEnquiry>;
  };

  public func run(old : OldActor) : NewActor {
    let enquiries = old.enquiries.map<Text, OldEnquiry, NewEnquiry>(
      func(_key, e) {
        {
          e with
          enquiryType = "standard";
          aiReply = "";
        }
      }
    );
    { enquiries };
  };
};

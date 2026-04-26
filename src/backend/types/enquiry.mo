import Common "common";

module {
  public type EnquiryStatus = {
    #new_;
    #viewed;
    #replied;
  };

  public type Enquiry = {
    id : Text;
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    submittedAt : Common.Timestamp;
    status : EnquiryStatus;
    enquiryType : Text;   // "standard" | "chat"
    aiReply : Text;       // AI-generated bilingual (English+Bengali) response; sent to user email+SMS
  };
};

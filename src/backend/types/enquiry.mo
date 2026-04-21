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
  };
};

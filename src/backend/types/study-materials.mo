import Common "common";

module {
  /// A study material PDF record. `blobRef` references an object-storage blob
  /// (the actual PDF bytes live in object storage; the canister only stores
  /// the reference + metadata).
  public type StudyMaterial = {
    id : Text;
    department : Text;       // "CSE" | "ECE" | "EE" | "ME" | "CE"
    year : Nat;               // 1..4
    semester : Nat;           // 1..8
    subjectName : Text;
    subjectCode : Text;
    regulation : Text;        // "R-23" | "R-25"
    classTest : Text;         // "CT1" | "CT2" | "Semester"
    blobRef : Text;           // object-storage blob reference
    uploadedAt : Common.Timestamp;
    uploadedBy : Principal;
  };

  /// Optional filter fields for querying study materials. Any null field is
  /// treated as "match all" for that dimension.
  public type StudyMaterialFilter = {
    department : ?Text;
    year : ?Nat;
    semester : ?Nat;
    subjectCode : ?Text;
    regulation : ?Text;
    classTest : ?Text;
  };

  /// Input payload for creating a new study material. The canister assigns
  /// `id`, `uploadedAt`, and `uploadedBy`.
  public type CreateStudyMaterialInput = {
    department : Text;
    year : Nat;
    semester : Nat;
    subjectName : Text;
    subjectCode : Text;
    regulation : Text;
    classTest : Text;
    blobRef : Text;
  };

  /// Input payload for updating an existing study material's metadata.
  /// All fields are optional; only provided fields are updated. `blobRef`
  /// is intentionally excluded here — use a re-upload flow to replace a PDF.
  public type UpdateStudyMaterialMetadataInput = {
    department : ?Text;
    year : ?Nat;
    semester : ?Nat;
    subjectName : ?Text;
    subjectCode : ?Text;
    regulation : ?Text;
    classTest : ?Text;
  };
};

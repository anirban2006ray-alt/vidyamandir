import Map "mo:core/Map";
import Time "mo:core/Time";
import Common "../types/common";
import StudyMaterialsTypes "../types/study-materials";

module {
  /// Create a new study material record. Returns the stored record on success.
  public func createStudyMaterial(
    materials : Map.Map<Text, StudyMaterialsTypes.StudyMaterial>,
    nextId : Nat,
    input : StudyMaterialsTypes.CreateStudyMaterialInput,
    uploadedBy : Principal,
  ) : { #ok : StudyMaterialsTypes.StudyMaterial; #err : Common.AppError } {
    let id = "SM-" # nextId.toText();
    let record : StudyMaterialsTypes.StudyMaterial = {
      id;
      department = input.department;
      year = input.year;
      semester = input.semester;
      subjectName = input.subjectName;
      subjectCode = input.subjectCode;
      regulation = input.regulation;
      classTest = input.classTest;
      blobRef = input.blobRef;
      uploadedAt = Time.now();
      uploadedBy;
    };
    materials.add(id, record);
    #ok(record);
  };

  /// List study materials matching the given filter. A null filter returns all.
  public func listStudyMaterials(
    materials : Map.Map<Text, StudyMaterialsTypes.StudyMaterial>,
    filter : ?StudyMaterialsTypes.StudyMaterialFilter,
  ) : [StudyMaterialsTypes.StudyMaterial] {
    switch (filter) {
      case null {
        materials.entries()
          .map(func((_, m) : (Text, StudyMaterialsTypes.StudyMaterial)) : StudyMaterialsTypes.StudyMaterial { m })
          .toArray();
      };
      case (?f) {
        materials.entries()
          .filter(func((_, m) : (Text, StudyMaterialsTypes.StudyMaterial)) : Bool {
            (switch (f.department) { case null true; case (?d) m.department == d })
            and (switch (f.year) { case null true; case (?y) m.year == y })
            and (switch (f.semester) { case null true; case (?s) m.semester == s })
            and (switch (f.subjectCode) { case null true; case (?c) m.subjectCode == c })
            and (switch (f.regulation) { case null true; case (?r) m.regulation == r })
            and (switch (f.classTest) { case null true; case (?ct) m.classTest == ct })
          })
          .map(func((_, m) : (Text, StudyMaterialsTypes.StudyMaterial)) : StudyMaterialsTypes.StudyMaterial { m })
          .toArray();
      };
    };
  };

  /// Return all study materials (admin view, unfiltered).
  public func listAllStudyMaterials(
    materials : Map.Map<Text, StudyMaterialsTypes.StudyMaterial>,
  ) : [StudyMaterialsTypes.StudyMaterial] {
    materials.entries()
      .map(func((_, m) : (Text, StudyMaterialsTypes.StudyMaterial)) : StudyMaterialsTypes.StudyMaterial { m })
      .toArray();
  };

  /// Fetch a single study material by id.
  public func getStudyMaterial(
    materials : Map.Map<Text, StudyMaterialsTypes.StudyMaterial>,
    id : Text,
  ) : ?StudyMaterialsTypes.StudyMaterial {
    materials.get(id);
  };

  /// Update metadata for an existing study material. Returns the updated
  /// record on success, or an error if not found. `blobRef`, `uploadedAt`,
  /// and `uploadedBy` are preserved.
  public func updateStudyMaterialMetadata(
    materials : Map.Map<Text, StudyMaterialsTypes.StudyMaterial>,
    id : Text,
    input : StudyMaterialsTypes.UpdateStudyMaterialMetadataInput,
  ) : { #ok : StudyMaterialsTypes.StudyMaterial; #err : Common.AppError } {
    switch (materials.get(id)) {
      case null { #err(#notFound) };
      case (?m) {
        let updated : StudyMaterialsTypes.StudyMaterial = {
          id = m.id;
          department = switch (input.department) { case null m.department; case (?d) d };
          year = switch (input.year) { case null m.year; case (?y) y };
          semester = switch (input.semester) { case null m.semester; case (?s) s };
          subjectName = switch (input.subjectName) { case null m.subjectName; case (?n) n };
          subjectCode = switch (input.subjectCode) { case null m.subjectCode; case (?c) c };
          regulation = switch (input.regulation) { case null m.regulation; case (?r) r };
          classTest = switch (input.classTest) { case null m.classTest; case (?ct) ct };
          blobRef = m.blobRef;
          uploadedAt = m.uploadedAt;
          uploadedBy = m.uploadedBy;
        };
        materials.add(id, updated);
        #ok(updated);
      };
    };
  };

  /// Delete a study material by id. Returns true if deleted, false if not found.
  public func deleteStudyMaterial(
    materials : Map.Map<Text, StudyMaterialsTypes.StudyMaterial>,
    id : Text,
  ) : Bool {
    switch (materials.get(id)) {
      case null { false };
      case (?_) {
        materials.remove(id);
        true;
      };
    };
  };

  /// Increment the download counter for a study material. Returns true on
  /// success, false if the material id is unknown.
  public func recordStudyMaterialDownload(
    materials : Map.Map<Text, StudyMaterialsTypes.StudyMaterial>,
    downloadCounts : Map.Map<Text, Nat>,
    id : Text,
  ) : Bool {
    switch (materials.get(id)) {
      case null { false };
      case (?_) {
        let current = switch (downloadCounts.get(id)) {
          case null 0;
          case (?n) n;
        };
        downloadCounts.add(id, current + 1);
        true;
      };
    };
  };
};

import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import Common "../types/common";
import StudyMaterialsTypes "../types/study-materials";
import StudyMaterialsLib "../lib/study-materials";

mixin (
  accessControlState : AccessControl.AccessControlState,
  materials : Map.Map<Text, StudyMaterialsTypes.StudyMaterial>,
  nextStudyMaterialId : [var Nat],
  downloadCounts : Map.Map<Text, Nat>,
) {
  /// List study materials matching the given filter. Open to all callers.
  public query func listStudyMaterials(
    filter : ?StudyMaterialsTypes.StudyMaterialFilter,
  ) : async [StudyMaterialsTypes.StudyMaterial] {
    StudyMaterialsLib.listStudyMaterials(materials, filter);
  };

  /// Fetch a single study material by id. Open to all callers.
  public query func getStudyMaterial(
    id : Text,
  ) : async ?StudyMaterialsTypes.StudyMaterial {
    StudyMaterialsLib.getStudyMaterial(materials, id);
  };

  /// List all study materials (admin only).
  public query ({ caller }) func listAllStudyMaterials() : async [StudyMaterialsTypes.StudyMaterial] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admins only");
    };
    StudyMaterialsLib.listAllStudyMaterials(materials);
  };

  /// Create a new study material (admin only).
  public shared ({ caller }) func createStudyMaterial(
    input : StudyMaterialsTypes.CreateStudyMaterialInput,
  ) : async { #ok : StudyMaterialsTypes.StudyMaterial; #err : Common.AppError } {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      return #err(#unauthorized);
    };
    switch (StudyMaterialsLib.createStudyMaterial(materials, nextStudyMaterialId[0], input, caller)) {
      case (#ok(record)) {
        nextStudyMaterialId[0] += 1;
        #ok(record);
      };
      case (#err(e)) { #err(e) };
    };
  };

  /// Update metadata for an existing study material (admin only).
  public shared ({ caller }) func updateStudyMaterialMetadata(
    id : Text,
    input : StudyMaterialsTypes.UpdateStudyMaterialMetadataInput,
  ) : async { #ok : StudyMaterialsTypes.StudyMaterial; #err : Common.AppError } {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      return #err(#unauthorized);
    };
    StudyMaterialsLib.updateStudyMaterialMetadata(materials, id, input);
  };

  /// Delete a study material permanently (admin only).
  public shared ({ caller }) func deleteStudyMaterial(id : Text) : async Bool {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admins only");
    };
    StudyMaterialsLib.deleteStudyMaterial(materials, id);
  };

  /// Record a download for a study material. Open to all callers.
  public shared func recordStudyMaterialDownload(id : Text) : async () {
    ignore StudyMaterialsLib.recordStudyMaterialDownload(materials, downloadCounts, id);
  };

  /// Return per-material download counts for the admin dashboard (admin only).
  public query ({ caller }) func getStudyMaterialDownloadStats() : async [(Text, Nat)] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admins only");
    };
    downloadCounts.entries().toArray();
  };
};

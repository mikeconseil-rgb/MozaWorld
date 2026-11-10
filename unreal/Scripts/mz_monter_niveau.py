"""MozaWorld : monte le niveau de base des Cinq Tuiles dans Unreal Engine 5.

A lancer dans l'editeur : menu Tools > Execute Python Script, ou
  UnrealEditor-Cmd.exe MozaWorld.uproject -run=pythonscript -script="Scripts/mz_monter_niveau.py"

Etat : premier jet ecrit sans Unreal sous la main, jamais execute. A valider sur le PC.
Il fait trois choses :
  1. importe les cinq reliefs (PNG 16 bits) comme textures de reference ;
  2. cree le niveau /Game/MozaWorld/Cartes/CinqTuiles avec ciel, soleil, brume et post-traitement ;
  3. pose un repere par secret et par centre de zone, a partir de Donnees/zones.json.
Le relief lui-meme s'importe par la fenetre Landscape > Import (voir LISEZMOI.md), l'API Python
ne l'expose pas directement.
"""
import json
import os
import unreal

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DONNEES = os.path.join(RACINE, "Donnees")
DEST = "/Game/MozaWorld"
CARTE = DEST + "/Cartes/CinqTuiles"
M = 100.0  # 1 m = 100 unites Unreal


def monde(x, y, z):
    """Demo web (x est, y haut, z sud) -> Unreal (X, Y, Z haut), en centimetres."""
    return unreal.Vector(x * M, z * M, y * M)


def importer_reliefs():
    taches = []
    for nom in sorted(os.listdir(DONNEES)):
        if nom.startswith("relief_") and nom.endswith(".png"):
            t = unreal.AssetImportTask()
            t.filename = os.path.join(DONNEES, nom)
            t.destination_path = DEST + "/Reliefs"
            t.automated = True
            t.replace_existing = True
            t.save = True
            taches.append(t)
    unreal.AssetToolsHelpers.get_asset_tools().import_asset_tasks(taches)
    unreal.log("MozaWorld : %d reliefs importes" % len(taches))


def poser(classe, pos, nom, rot=None):
    acteurs = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
    a = acteurs.spawn_actor_from_class(classe, pos, rot or unreal.Rotator(0, 0, 0))
    a.set_actor_label(nom)
    return a


def monter_ambiance():
    soleil = poser(unreal.DirectionalLight, unreal.Vector(0, 0, 5000), "MZ_Soleil", unreal.Rotator(0, -42, 35))
    c = soleil.get_component_by_class(unreal.DirectionalLightComponent)
    c.set_editor_property("intensity", 6.0)
    c.set_editor_property("atmosphere_sun_light", True)
    poser(unreal.SkyAtmosphere, unreal.Vector(0, 0, 0), "MZ_Atmosphere")
    ciel = poser(unreal.SkyLight, unreal.Vector(0, 0, 6000), "MZ_LumiereCiel")
    ciel.get_component_by_class(unreal.SkyLightComponent).set_editor_property("real_time_capture", True)
    brume = poser(unreal.ExponentialHeightFog, unreal.Vector(0, 0, 0), "MZ_Brume")
    b = brume.get_component_by_class(unreal.ExponentialHeightFogComponent)
    b.set_editor_property("fog_density", 0.02)
    b.set_editor_property("volumetric_fog", True)
    poser(unreal.VolumetricCloud, unreal.Vector(0, 0, 0), "MZ_Nuages")
    pp = poser(unreal.PostProcessVolume, unreal.Vector(0, 0, 0), "MZ_PostTraitement")
    pp.set_editor_property("unbound", True)


def poser_reperes():
    with open(os.path.join(DONNEES, "zones.json"), encoding="utf-8") as f:
        d = json.load(f)
    for z in d["zones"]:
        cx, cz = z["centre"]
        a = poser(unreal.TargetPoint, monde(cx, 30, cz), "MZ_Zone_" + z["id"])
        a.tags = [unreal.Name("MZ_Zone"), unreal.Name(z["id"])]
    for i, s in enumerate(d["secrets"]):
        x, y, zz = s["pos"]
        a = poser(unreal.TargetPoint, monde(x, y, zz), "MZ_Secret_%s_%02d" % (s["zone"], i))
        a.tags = [unreal.Name("MZ_Secret"), unreal.Name(s["zone"])]
    unreal.log("MozaWorld : %d zones, %d secrets poses" % (len(d["zones"]), len(d["secrets"])))


def main():
    importer_reliefs()
    niveaux = unreal.get_editor_subsystem(unreal.LevelEditorSubsystem)
    if unreal.EditorAssetLibrary.does_asset_exist(CARTE):
        niveaux.load_level(CARTE)
    else:
        niveaux.new_level(CARTE)
    monter_ambiance()
    poser_reperes()
    niveaux.save_current_level()


main()

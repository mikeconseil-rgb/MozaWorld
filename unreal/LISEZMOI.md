# MozaWorld sous Unreal Engine 5 : préparation

Ce dossier contient ce qui a pu être préparé sans le PC. Rien ici n'a encore tourné dans Unreal.

## Contenu
- `Donnees/relief_m7.png`, `relief_m4.png`, `relief_p0.png`, `relief_p4.png`, `relief_p7.png` : relief des cinq tuiles aux niveaux -7, -4, 0, +4, +7. PNG 16 bits en niveaux de gris, 1009 × 1009, un pixel = 0,592 m, hauteurs de -40 m à +88 m.
- `Donnees/zones.json` : pour chaque zone son nom, ses deux pôles, son récit, ses cinq paliers, son polygone ; et les 31 secrets avec leur position et leur texte.
- `Scripts/mz_monter_niveau.py` : script Python pour l'éditeur Unreal. Il importe les reliefs, crée le niveau avec ciel, soleil, brume volumétrique et nuages, et pose un repère par zone et par secret. Premier jet, à valider sur le PC.

## Importer le relief (Landscape)
Mode Landscape, onglet Manage, New, Import from File, choisir `relief_p0.png`.
- Échelle X et Y : 59,2 (un pixel = 0,592 m).
- Échelle Z : 25 (128 m d'amplitude × 100 / 512).
- Position Z : 2400 (milieu de l'amplitude, soit +24 m).

## Changement de niveau en direct
Un Landscape Unreal ne se déforme pas en jeu. Deux pistes, à trancher sur le PC :
1. un maillage dynamique (Dynamic Mesh) par tuile, reconstruit en mélangeant deux reliefs voisins quand le niveau change, comme dans la démo web ;
2. un Landscape fixe, et le niveau ne change que l'habillage : matériaux, végétation, brume, lumière, objets, eau, lave.
La piste 2 est la plus belle et la plus sûre pour commencer ; la piste 1 garde les grandes déformations (cathédrale qui s'enfonce, lac de lave qui monte) pour des objets séparés du sol.

## À installer sur ZEUS
1. Epic Games Launcher, puis Unreal Engine 5 (dernière version stable). Prévoir environ 100 Go libres, de préférence sur un SSD.
2. Dans l'éditeur, activer les plugins Python Editor Script Plugin, Editor Scripting Utilities et Fab.
3. Créer le projet `MozaWorld` (modèle Third Person, Blueprint) dans `E:\claude\MozaWorld\unreal`.

## Réglages visés pour une RTX 2070 en 1080p
Lumen logiciel en qualité moyenne à haute, ombres virtuelles en moyen, TSR ou DLSS en mode Qualité, brume volumétrique activée. Objectif 45 à 60 images par seconde. À mesurer zone par zone.

# Données des 986 sous-zones

- `sous-zones-986-v2.csv` : liste en vigueur (16 novembre 2026), séparateur `;`. Colonnes : id, type, tuile, biome, mana, culture, pole_moins7, pole_plus7, niveaux, ancien_id.
- `generer_sous_zones_v2.py` : la régénère et vérifie l'unicité (`python3 generer_sous_zones_v2.py`).
- `echantillon_v2.json` : les 20 zones déjà écrites par les conteurs, gardées telles quelles.

Changements par rapport à la première liste (etape2/sous-zones-986.csv du dossier du projet) :
- 383 Ressources, 246 Antres, 182 Assemblées, 130 Donjons, 45 Citadelles.
- Le Losange est l'Assemblée : les identifiants MAR deviennent ASS.
- Les Ressources vont de 0 à 3 et n'ont pas de pôles (colonnes vides).
- Nouvelle colonne mana : Feu, Glace, Eau, Sève, Pierre ou Vent, selon le biome.
- Les 30 axes de pôles sont gardés : ce sont deux pôles atteints par des choix moraux, aucun n'est le bien ou le mal.
- Les 20 zones écrites gardent leur numéro ; seule CIT-090 devient CIT-045 (il n'y a plus que 45 Citadelles).

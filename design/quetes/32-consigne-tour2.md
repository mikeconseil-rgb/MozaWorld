# Consigne du tour 2 (corrections) — pour chaque auteur
Travaille dans /home/user/MozaWorld/design/quetes/ (PAS /mnt/project-files). Lis :
- 31-canon-corrections.md (les corrections de canon, qui priment, et LE RETOUR) ;
- 50-critique-1.md (critique, 64/100) et 51-historien-1.md (historien) : applique TOUTES les corrections qui touchent TES fichiers ;
- les fichiers des autres auteurs aux paliers voisins des tiens (pour enchaîner, dans les deux sens).
Puis corrige tes fichiers en place (mêmes noms), en gardant les ids de traces existants (tu peux en ajouter).
Ajoute "debutRetour" (et ses nœuds) à chacune de tes quêtes de −6 à +6 (et 0 : objet {"-","+"}).
Limites : 3 à 8 nœuds par chemin (une quête peut avoir jusqu'à 12 nœuds au total avec le retour), txt ≤ 450, l ≤ 45, exactement 2 choix par final (1 à ±7).
Pas de nom réel ni de citation dans le texte du jeu. Clarté d'abord.
Vérifie : python3 -c "import json;json.load(open('FICHIER'))" puis python3 verif.py (contrôle de structure).
Renvoie un résumé de 5 lignes.

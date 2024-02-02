Ce projet est centré dans le domaine de l'éducation.

L'objectif de ce projet est de créer une application de rédaction d'examen de Maths.
C'est à la fois un jeu mais la collection principale de ce projet est les examens.

Un examen peut comporter plusieurs questions et donc l'objectif serait de repondre aux question et de soumettre à la fin son examen.

Une partie sera mise sur l'interface pour afficher l'historique des rendus...

On devra donc pouvoir exercer sur chaque examen soumis le CRUD i.e le modifier, le supprimer ou afficher ses résultats.


Packages necessaires :
- typescrypt
- react-error-overlay
- tailwindCSS
- 


Deux fichiers JSON pour gérer les données (Pour éviter de recoder un backend)


Les différrents routes : 
- `/` : **Le Home**, qui affiche d'un coté un bouton pour démarer un examen et de l'autre coté les dix derniers examens soumis
- `/exams` : qui affiche tous les examens soumis
-`/exam/:id` : qui affiche les infos sur un examen
- `/exam/:id/delete` : Qui permet de supprimer un examen
- `/exam/:id/update` : Qui permet de modifier un examen
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
- redux


Deux fichiers JSON pour gérer les données (Pour éviter de recoder un backend)

Les différrents routes : 
- `/` : **Le Home**, qui affiche d'un coté un bouton pour démarer un examen et de l'autre coté les dix derniers examens soumis
- `/exams` : qui affiche tous les examens soumis
-`/exam/:id` : qui affiche les infos sur un examen
-`/exam/` : commencer un examen | renseignement user s'il y'en a pas
- `/exam/:id/delete` : Qui permet de supprimer un examen
- `/exam/:id/update` : Qui permet de modifier un examen


<img width="1440" height="749" alt="Capture d’écran 2025-11-12 à 15 14 15" src="https://github.com/user-attachments/assets/676385d7-ea15-41e6-b8b9-1181b81ccb0c" />
<img width="1440" height="717" alt="Capture d’écran 2025-11-12 à 15 15 03" src="https://github.com/user-attachments/assets/50fc6f8c-c668-4b6e-bc4a-f5f40afa5c27" />
<img width="1440" height="717" alt="Capture d’écran 2025-11-12 à 15 15 28" src="https://github.com/user-attachments/assets/d3e6d92d-ef5b-458f-985b-8ce1f226f234" />
<img width="1440" height="717" alt="Capture d’écran 2025-11-12 à 15 16 00" src="https://github.com/user-attachments/assets/b8dce1b4-6869-4c8a-901f-81c91cd68d43" />
<img width="1440" height="717" alt="Capture d’écran 2025-11-12 à 15 16 20" src="https://github.com/user-attachments/assets/221263e6-92fc-422e-a596-b3012aa3dc31" />
<img width="1440" height="717" alt="Capture d’écran 2025-11-12 à 15 16 32" src="https://github.com/user-attachments/assets/c3e99559-70be-4eb2-a6e3-2b2cb0191849" />
<img width="1440" height="717" alt="Capture d’écran 2025-11-12 à 15 17 00" src="https://github.com/user-attachments/assets/1c802c9d-815b-43e7-9214-28a64d3a4e33" />


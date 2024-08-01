<div align="center">
![RED Team](https://media.discordapp.net/attachments/1003601969463705691/1061686166941872128/dessin.png?width=591&height=595)
</div>

# Demarer avec le projet
- Installer env-cmd
```
  npm install env-cmd or npm install -g env-cmd
```
Pour en savoir plus sur env-cmd, consulter ce lien: https://www.npmjs.com/package/env-cmd

## Lancer le projet 🚀
- Il y a defferentes facon de lancer le projet
```
  npm run start:dev
```
ou
```
  npm run start:recette
```
ou
```
  npm run start:prod
```

- Consulter le fichier package.json pour voir les differentes facon de lancer le projet

- Si vous voulez modifier les *URL* api, consulter le fichier .env-cmdrc

## Philosophie de structure des dossiers (SoC) 🪐
La structure des dossiers se repose sur le principe de la separation des responsabilites

- **actions**: 
Ici vous definisser toutes les requetes api de chaque entite.
Il aura deux fichiers: **queries** et **mutations**
  - **queries**: Va contenier les requestes de type ```GET```
  - **mutations**: Va contenir les requestes de type ```POST```
  - Bonus: Il est recommande de creer un hook personnalise qui va consommer les mutations

- **components**: Ce dossier doit contenir les components de l'application, chaque composant doit etre creer dans un sous dossier

- **context**: Ici se trouvera tous les contexts de l'application pour la gestion des petits etats ou pour gerer l'authentication

- **hooks**: Dossiers pour les hooks personnaliser, par exemple ```useUserId```, ```useProductId```

- **layouts**: Ce dossier contient la structure de chaque page de l'application. Tout ce qui concerne la disposition(layout) du projet doit etre ici.

- **pages**: Pour les pages du projet. Comme par exemple
  - ```Produits```(dossier)
    - ```index.js```

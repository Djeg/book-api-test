# API Restfull d'une librairie (pour le fun)

## Les exercices

### Exo 1 - Mettre en place un README.md

1. Cloner ce projet dans le répertoire de votre choix
2. Ouvrir le projet avec vscode
3. Créer un fichier README.md (avec vscode) et placez une courte
   description du projet
4. Dans un terminal (vscode) faire un commit
5. Faire un « push » sur github
6. Envoyer le lien du projet github sur le chat

### Exo 2 - Mettre en place un package.json

1. Lancer la commande `npm init`
2. Renseigner dans "entry point" le chemin `src/index.js`
3. Ajouter la ligne `"type": "module",` après la clefs `main` dans le `package.json`
4. Faire un commit et pousser sur github

### Exo 3 - Lancer un script js avec nodejs

1. Créer le fichier `src/index.js` avec un console.log
2. Ajouter un script dans `package.json` avec
   la configuration suivante:

```js
"scripts": {
    "start": "node src/index.js"
}
```

3. Vous pouvez tester en lancant la commande
   `yarn start` ou bien `npm start`
4. Faire un commit et "push" sur github

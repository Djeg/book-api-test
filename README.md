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

### Exo 4 - Installer Fastify

1. On lance l'installation de fastify avec la commande `yarn add fastify` (vous pouvez
   vérifier l'installation en regardant votre `package.json`)
2. On ignore le versionning du répertoire `node_modules`:
   1. créé un fichier `.gitignore` à la racine du projet
   2. Ajouter la ligne `node_modules` dans le fichier `.gitignore`
3. On commit et push sur github

### Exo 5 - Un server fastify

1. Dans `src/index.js` ajouter le code permettant de démarer un server sur le port
   3000
2. Vous pouvez lancer la commander `yarn start` pour tester votre server (vous pouvez
   appuyer sur Ctrl-C afin de quitter le server)
3. On commit et on push

### Exo 6 - afficher un text de bienvenue sur la route "`/`"

1. Dans `src/index.js` ajouter une route get avec le chemin `/` et retourner
   un objet json de votre choix
2. Vous pouvez tester en demarant votre server (si dèja lancé vous pouvez l'arréter avec
   la touche Ctrl-C dans votre terminal, pour lancer le server faire `yarn start`).
3. On commit et on push

### Exo 7 - Installer fastify mongodb extension

1. Installer la paquet: `fastify-mongodb` avec la commande `yarn add fastify-mongodb`
2. Configurer fastify mongo dans le fichier `index.js` (Vous pouvez utiliser l'url: `mongodb+srv://MyTodoApp:MyTodoApp@cluster0.obacx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
3. Vous pouvez tester en lancant votre server (faire Ctrl-C si le server est dèja lancé, pour lancer le server la commande est `yarn start`)
4. On commit et on push sur github

### Exo 8 - Retourner tout les livres d'une BDD

1. Créer la route `/books`
2. On récupére la collection "books" depuis mongodb
3. On récupére tout les livres depuis notre collection
4. On retourne les livres
5. On commit et on push

### Exo 9 - Installer et mettre en place nodemon

1. Installer nodemon avec la commande `yarn add nodemon`
2. Modifier le script `start` dans le `package.json` pour utiliser nodemon
3. On commit et on push

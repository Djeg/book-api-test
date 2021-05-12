# API Restfull d'une librairie (pour le fun)

## Comment installer l'application

1. Cloner le projet:

```
git clone https://github.com/Djeg/book-api-test.git
```

2. Installer les dépendances

```
yarn install
```

3. Configurer l'application:

   1. Copier coller `.env.dist` dans `.env`
   2. Modifier vos propres valeur de configuration

4. Lancer le server:

```
yarn start
```

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

### Exo 10 - L'extension "REST Client"

1. Installer l'extension VSCode "REST Client"
2. Créé un fichier `api.http` à la racine du projet
3. Ecrire une requête GET sur `http://localhost:3000`
4. Ecrire une requête GET sur `http://localhost:3000/books` (Les requêtes sont séparé par `###`)
5. Vous pouvez tester en appuyant sur "Send Request" au dessus
   de votre requête.
6. On commit et on push sur github

### Exo 11 - Créer un livre

1. On créer une route fastify `POST /books`
2. On récupére les données de la requête en utilisant
   `request.body`
3. On récupére la collection `books` depuis mongodb
4. On insére le livre dans la base de données
5. On retourne le livre qui a été enregistré dans la
   base de données
6. On commit et on push

### Exo 12 - Attacher un schéma de validation

1. Dans le fichier `src/index.js` ajouter le schéma `createBookSchema`
2. Attacher le schema à la route `POST /books`
3. On commit et on push sur github

### Exo 13 - Récupérer un seule livre

1. Dans le `src/index.js` ajouter une route `GET /book/:id`
2. Récupérer le paramètre id depuis la route
3. Récupérer le livre avec l'id depuis MongoDB
4. Retourner le livre
5. On commit et on push

### Exo 14 - Mettre à jour et supprimer

1. Dans le `src/index.js` écrire le code pour ces deux routes:
   1. `PATCH /books/:id`
   2. `DELETE /books/:id`
1. Vous pouvez tester avec le fichier `api.http`
1. On commit et on push

### Exo 15 - Mettre de la configuration

1. Créer un fichier `.env.dist` avec l'url MONGO_DB
2. Ignorer le fichier `.env` dans le fichier `.gitignore`
3. On commit et on push

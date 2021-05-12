// On importe la libraire fastify
import fastify from 'fastify'
import fastifyMongo from 'fastify-mongodb'

// On créé une application fastify en utilisant
// L'import de notre librairie. On configure
// fastify pour afficher des logs
const app = fastify({ logger: true })

// On connécte la base de données MongoDB
app.register(fastifyMongo, {
  url: 'mongodb+srv://MyTodoApp:MyTodoApp@cluster0.obacx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
})

// On créé une route fastify sur l'URI "/"
app.get('/', async () => {
  return { text: "Welcome !" }
})

// On créé une route qui retourne tout les livres de notre
// base de données (MongoDB)
app.get('/books', async () => {
  // Mongo est une base de données qui contient des collection
  // (c'est un peu comme des tables en SQL)
  // Ici on récupére la collection "books"
  const collection = app.mongo.db.collection('books')

  // Sur cette collection nous pouvons utiliser plusieurs
  // fonctions. Ici, nous allons récupérer TOUT les livres
  const books = await collection.find().toArray()

  // Nous retournons tout les livres de la base de données
  return books
})


// On créé une route qui retourne qu'une livre par son
// identifiant
app.get('/books/:id', async (request, reply) => {
  // On récupére l'identifiant rentré dans notre url
  const id = request.params.id

  // On récupére notre collection mongodb
  const collection = app.mongo.db.collection('books')

  // Ici on s'assure de ne pas avoir d'erreur
  try {
    // Nous récupérons le livre avec l'id spécifié dans la route
    const book = await collection.findOne({ _id: new app.mongo.ObjectId(id) })

    // Si il n'y a pas de livre, nous levons une erreur
    if (!book) {
      throw new Error('This books does not exists')
    }

    // Si tout c'est bien passé, on retourne le livre
    return book
  } catch(error) {
    // Ici, si la moindre erreur est survenu à l'intérieur
    // du block try nous exécutons le code suivant:

    // On change le status code par 404 (Not Found)
    reply.status(404)

    // On retourne le message de l'erreur
    return { error: error.message }
  }
})

// Mise à jour d'un livre
app.patch('/books/:id', async (request) => {
  const id = request.params.id
  const updateFields = request.body
  // Pour mettre à jour un livre avec MongoDB
  // il faut utiliser : await collection.updateOne({ _id: new app.mongo.ObjectId(id) }, nouveauLivre)
  const collection = app.mongo.db.collection('books')

  // Nous mettons le livre avec l'identifiant donnée
  // en luis spécifiant les champs à changer en
  // second argument
  await collection.updateOne(
    // Ici on spécifie des "Query" qui nous permettent
    // de définir le livre à mettre à jour
    { _id: new app.mongo.ObjectId(id) },
    // On specifie dans le clefs "$set" les champs à mettre
    // à jour
    { $set: updateFields },
  )

  // On récupére le livre mis à jour dans la base de données
  const book = await collection.findOne({
    _id: new app.mongo.ObjectId(id),
  })

  // On retourne le livre
  return book
})

// Suppression d'un livre
app.delete('/books/:id', async (request, reply) => {
  const id = request.params.id
  // Pour supprimer un livre avec MongoDB
  // il faut utiliser : await collection.deleteOne({ _id: new app.mongo.ObjectId(id) })
  const collection = app.mongo.db.collection('books')

  await collection.deleteOne({
    _id: new app.mongo.ObjectId(id)
  })

  reply.status(204)

  return null
})

// On déclare un schèma qui nous permettra de valider
// les données envoyé dans la request POST /books
const createBookSchema = {
  type: 'object',
  properties: {
    title: { type: 'string' },
    description: { type: 'string' },
    image: { type: 'string' },
    author: { type: 'string' },
    price: { type: 'number' },
    stars: { type: 'number' },
  },
  required: [
    'title',
    'description',
    'image',
    'author',
    'price',
    'stars'
  ]
}

// On créé un route qui nous permettra d'ajouter (de créer) un
// nouveau livre et nous lui attachons un schema !
app.post('/books', {
  schema: {
    body: createBookSchema
  }
}, async (request, reply) => {
  // Nous récupérons toutes les données qu'il y a dans le corp
  // d'une requête. Cela correspond à notre livre
  const book = request.body

  // Pour enregistrer le livre dans ma BDD (mongodb)
  // j'ai besoin de la collection
  const collection = app.mongo.db.collection('books')

  // On enregistre le livre dans la base de données
  const result = await collection.insertOne(book)

  // A l'intérieur de result on as tout les opérations qui ont
  // étaient enregistré.
  // Pour accéder à tout ce qui a été enregistré dans la BDD
  // on utilise result.ops
  // Ici on as inséré un seul élément, result.ops sera donc
  // un tableaux avec une seul valeur à l'intérieur: Notre livre.

  // On retourne le livre qui a été enregistré dans la base de
  // données
  reply.status(201)
  return result.ops[0]
})

// Cette fonction démarre notre server d'api
const start = async () => {
  console.log('Lancement de notre server ...')

  await app.listen(3000)

  console.log('Le server est lancé, vous pouvez visiter: http://localhost:3000')
}

// Lancement de la fonction de démarage
start()
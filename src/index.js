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
app.get('/books/:id', async (request) => {
  // On récupére l'identifiant rentré dans notre url
  const id = request.params.id

  // On récupére notre collection mongodb
  const collection = app.mongo.db.collection('books')

  // On vas chercher un seule livre par son ID
  const book = await collection.findOne({ _id: new app.mongo.ObjectId(id) })

  // On retourne le livre récupéré depuis la base de données
  return book
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
}, async (request) => {
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
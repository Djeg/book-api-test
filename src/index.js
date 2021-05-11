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

// On créé un route qui nous permettra d'ajouter (de créer) un
// nouveau livre
app.post('/books', async (request) => {
  // Nous récupérons toutes les données qu'il y a dans le corp
  // d'une requête. Cela correspond à notre livre
  const book = request.body

  // Pour enregistrer le livre dans ma BDD (mongodb)
  // j'ai besoin de la collection
  const collection = app.mongo.db.collection('books')

  // On enregistre le livre dans la base de données
  const result = await collection.insertOne(book)

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
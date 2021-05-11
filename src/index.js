// On importe la libraire fastify
import fastify from 'fastify'

// On créé une application fastify en utilisant
// L'import de notre librairie. On configure
// fastify pour afficher des logs
const app = fastify({ logger: true })

// On créé une route fastify sur l'URI "/"
app.get('/', async () => {
  return { text: "Welcome !" }
})

// Création de la route qui retourne tout les livres
app.get('/books', async () => {
  return []
})

// Cette fonction démarre notre server d'api
const start = async () => {
  console.log('Lancement de notre server ...')

  await app.listen(3000)

  console.log('Le server est lancé, vous pouvez visiter: http://localhost:3000')
}

// Lancement de la fonction de démarage
start()
import express from "express";

// Routers
import productsRouter from "./api/routes/summer-products.js";
import usersRouter from "./api/routes/users.js";

import searchQuery from "./api/routes/search.js";

// Express saker
const PORT = 6666
const app = express()

// The middleman is looking at us
app.use(express.json())

// Routes //

// -> Start
app.get("/", (req, res) => {
	res.send("Sökvägar: <ul><li>/api/products</li><li>/api/search/</li></ul>")
})

// -> CRUD products
app.use('/api/products', productsRouter)

// -> Search products
app.get('/api/search', searchQuery)

// -> CRUD users
app.use('/api/users', usersRouter)

// Startar servern
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`)
})
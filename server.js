import express from "express";

import productsRouter from "./routes/summer-products.js";

// Express saker
const PORT = 6666
const app = express()

// The middleman
app.use(express.json())

// Routes

// -> Start
app.get("/", (req, res) => {
	res.send("Sökvägar: <ul><li>/api/products</li><li>/api/search/</li></ul>")
})

// -> get products
app.use('/api/products', productsRouter)

// -> search products

// Startar servern
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`)
})
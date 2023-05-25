import express from 'express'
import { getDb } from '../data/database.js'
import { isValidProduct, isValidId } from '../data/validate.js'


const router = express.Router()
const db = getDb()

// GET Products 
router.get('/', async (req, res) => {
	await db.read()
	res.send(db.data.products)

})

// GET Product ID
router.get('/:id', async (req, res) => {
	let maybeID = req.params.id
	let id = Number(maybeID)

	await db.read()
	if (isNaN(id)) {
		res.status(400).send('Felaktigt värde på ID')
	} else if (id > db.data.products.length - 1) {
		res.status(400).send('id måste vara 0 till ' + db.data.products.length)
	} else if (id < 0) {
		res.status(400).send('id får inte vara under 0 ')
	} else {
		let product = db.data.products.find(product => product.id === id)
		res.send(`Produkt ID: ${product.id} - Produktnamn: ${product.name} - Produktbild: ${product.image} - Produktpris: ${product.price} - Produkttaggar: ${product.tags}`)
	}
})

//POST - Skicka data för ny resurs 
router.post('/', async (req, res) => {
	console.log('kollar om post funkar =)');
	await db.read()


	let name = req.body.name
	let image = req.body.image
	let price = req.body.price
	let tags = req.body.tags

	function generateId() {
		let id = Math.floor(Math.random() * 1000);
		while (!db.data.products.find(product => product.id === id)) {
			return id = Math.floor(Math.random() * 1000);
		}
	}

	let newProduct = {
		id: generateId(),
		name,
		image,
		price,
		tags
	}
	console.log(" Produkt:", newProduct);

	if (!isValidProduct(newProduct)) {
		console.log('Felsöker Post = Invalid');
		res.sendStatus(404)
		return
	}


	console.log('Kollar om POST är "valid" ');
	db.data.products.push(newProduct)
	await db.write()
	res.sendStatus(201)

})

// 	DELETE

router.delete('/:id', async (req, res) => {
	await db.read()

	if (!isValidId(req.params.id)) {
		res.sendStatus(400).send("Kontrollera att du har skrivit Id som nummber och inte med bokstäver")
		return
	}

	let id = Number(req.params.id)
	let productToDelete = db.data.products.find(product => product.id === id)

	if (!productToDelete) {
		res.status(400).send("Kunde inte hitta matchande id, kontrollera att id finns.")
		return
	} else {
		db.data.products = db.data.products.filter(product => product.id !== id)
		await db.write()
		res.sendStatus(200)
	}

})

// PUT

router.put('/:id', async (req, res) => {
	let id = Number(req.params.id)

	if (!isValidId(id)) {
		res.status(400).send("Kontrollera att du har skrivit Id som nummber och inte med bokstäver")
		console.log("kontrollerar ID");
		return
	}

	if (!isValidProduct(req.body)) {
		console.log("kontrollerar product");
		res.status(400).send("Kontrollera att du har med Namn, pris, image och tags")
		return
	}

	let editedProduct = req.body
	await db.read()

	let oldProduct = db.data.products.find(product => product.id === id)
	if (oldProduct === -1) {
		console.log("Kunde inte ersätta produkten");
		res.status(400).send("Kunde inte hitta product")
		return
	}

	let findProduct = db.data.products.find(product => product.id === id)

	findProduct.name = editedProduct.name
	findProduct.image = editedProduct.image
	findProduct.price = editedProduct.price
	findProduct.tags = editedProduct.tags

	db.data.products[oldProduct] = editedProduct
	await db.write()
	res.status(200).send(`Produkten är nu ändrad, ${editedProduct}`)
	console.log("Produkten är ändrad");


})

// 


export default router
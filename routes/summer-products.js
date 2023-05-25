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
	let product = req.body

	if (isValidProduct(product)) {
		console.log('Kollar om POST är "valid" ');
		await db.read()
		db.data.products.push(product)
		await db.write()
		res.sendStatus(200)
	} else {
		res.sendStatus(404)
	}


})
router.delete('/:id', async (req, res) => {
	await db.read()

	if (!isValidId(req.params.id)) {
		res.sendStatus(400).send("Kontrollera att du har skrivit Id som nummber och inte med bokstäver")
		return
	}

	let id = Number(req.params.id)
	let productToDelete = db.data.products.find(product => product.id === id)
	
	if (!productToDelete){
		res.sendStatus(400).send("Kunde inte hitta matchande id, kontrollera att id finns.")
		return
	}
	db.data.products = db.data.products.filter(product => product.id !== id)
	await db.write()
	res.sendStatus(200)

})

// 


export default router
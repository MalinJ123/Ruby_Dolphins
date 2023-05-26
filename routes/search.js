import express from 'express'
import { getDb } from '../data/database.js'

const db = getDb()

// Search by ID
async function search(req, res){
    let query = req.query.q
    let sort = req.query.sort
    if (!query) {
        return res.status(400).send({ error: 'Ingen query string' })
    } else if (query) {
        await db.read();
        let search = db.data.products.filter((product) => product.name.toLowerCase().includes(query))

        if (!search) {
            res.status(404).send({ error: 'Produkten finns ej!' })
        }
        res.status(200).send(search)
    } 
}

export default search

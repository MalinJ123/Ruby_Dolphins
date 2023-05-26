import express from 'express'
import { getDb } from '../data/database.js'

const db = getDb()

// Search by ID
async function searchQuery(req, res){
    let query = req.query.q
    let sort = req.query.sort
    let order = req.query.order

    let searchValue

    if (!query) {
        return res.status(400).send("Ingen query string")
    } else if (query) {
        await db.read();
        searchValue = db.data.products.filter((product) => product.name.toLowerCase().includes(query))

        if (!searchValue) {
            res.status(404).send("Produkten finns ej!")
        }

        res.status(200).send(searchValue)

        if (query && sort && order) {
            searchQueryWithSortOptions(searchValue, sort, order, res)
        }

    } else {
        return res.status(400).send("Ingen sorterings- och ordningsval används")
    }
}

function searchQueryWithSortOptions(searchValue, sort, order, res) {

    let orderOption

    if (sort === 'name') {
        return sortByName(searchValue, order, orderOption, res)
    } else if (sort === 'price') {
       return sortByPrice(searchValue, order, orderOption, res)
    } else {
        return res.status(400).send("Ogilltig sorteringsval")
    }
}

async function sortByName(searchValue, order, orderOption, res) {

    console.log('1. Finns jag här?')
        if (order === 'asc') {
            console.log('2. Finns jag här uppe?')
            return orderOption = searchValue.sort((a, b) => a.name.localeCompare(b.name))
        } else if (order === 'desc') {
            console.log('3. Finns jag här nere?')
            return orderOption = searchValue.sort((a, b) => b.name.localeCompare(a.name))
        } else if (!order === 'asc' || !order === 'desc') {
            console.log('4. Finns jag någonstans?')
            return res.status(400).send("Ogilltig ordning")
        } else if (!order) {
            console.log('5. Finns jag här?')
            return res.status(400).send("Vänligen välj en ordning")
        }
        return res.status(200).send(orderOption)
}

async function sortByPrice(searchValue, order, orderOption, res) {

        if (order === 'asc') {
           return orderOption = searchValue.sort((a, b) => a.price - b.price)
        } else if (order === 'desc') {
           return orderOption = searchValue.sort((a, b) => b.price - a.price)
        } else if (!order === 'asc' &&!order === 'desc') {
            return res.status(400).send("Ogilltig ordning")
        }  else if (!order) {
        return res.status(400).send("Vänligen välj en ordning")
        } 
    return res.status(200).send(orderOption)
}
export default searchQuery;

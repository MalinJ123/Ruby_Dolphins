import { API_URL } from "./constants.js"

async function updateProduct(product) {
    const options ={
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    }
    const response = await fetch( API_URL + 'products/', options)
    const statusObject = await response.json()
    console.log("response from Api",statusObject);
}

export { updateProduct }
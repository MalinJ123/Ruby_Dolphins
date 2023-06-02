import { API_URL } from "./constants.js";

async function addProduct(product) {
 
  const data = {
    id: Number(product.id),
    name: product.name,
    price: Number(product.price),
    image: product.image,
    tags: [product.tags],
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(API_URL + "products/" + product.id, options);
  const statusObject = await response.json();
  console.log("response from Api", statusObject);
}

export { addProduct};

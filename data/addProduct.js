import { API_URL } from "./constants.js";

async function addProduct(product) {
 
  const data = {
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
  const response = await fetch('/api/products/'  , options);
  const statusObject = await response.json();
  if (statusObject){
    return true
  }
  return false
  console.log("response from Api", statusObject);
}

export { addProduct};

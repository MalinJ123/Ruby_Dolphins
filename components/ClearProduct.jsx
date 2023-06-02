import { useState } from "react";

import { clearProduct } from "../data/deleteProduct.js";


const DeleteProduct = () => {
    const [product , setProduct] = useState()

    function clearProduct(product){
        setProduct(product)
    }







    return(
        <div>
         <button onClick={() => clearProduct(product)}>Delete Product</button>
        </div>
    )
}

export default DeleteProduct
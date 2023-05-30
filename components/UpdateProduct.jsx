import { useState } from "react";
import "./UpdateProduct.css";
import { API_URL } from "../data/constants.js";

const UpdateProduct = () => {
    const [product , setProduct] = useState({
        name: "",
        price: "",
        image: "",
        id: ""
    });

    const handleClick = (e) =>{
      setProduct(e.target.value);    
    }

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

    function handleProduct (){
        const changeItem ={
            name: product.name,
            price: product.price,
            image: product.image
        }
        updateProduct(changeItem)
    }


    

    return (
        <section>
            <form action="" className="from"> 
                <section> 
                    <label htmlFor=""></label>
                    <input type="text" value={product}/> 
                </section>

                <section> 
                    <label htmlFor=""></label>
                    <input type="number"  value={product}/> 
                </section>

                <section> 
                    <label htmlFor=""></label>
                    <input type="file" /> 
                </section>
            
                <button onClick={handleClick}></button>
             </form>
        </section>
     
    )
}

export default UpdateProduct


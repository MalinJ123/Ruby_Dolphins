import { useState } from "react";
import "./UpdateProduct.css";
import { updateProduct } from "../data/updateProduct.js";
import { getProducts } from "../data/getProducts.js";

const ToUpdateProduct = () => {
    const [product , setProduct] = useState({
        name: "",
        price: "",
        image: "",
        tags: "",
    });

   getProducts.push(ToUpdateProduct)

    

    function handleProduct (){
        const changeItem ={
            name: product.name,
            price: product.price,
            image: product.image,
            tags: product.tags
        }
        updateProduct(changeItem)
    }



    

    return (
        <section>
            <form action="" className="form"> 
                <section className="input-item input-name"> 
                    <label htmlFor=""></label>
                    <input type="text" placeholder="Name" value={product.name}
                    onChange={(e) => setProduct({...product, name: e.target.value})}/> 
                </section>

                <section className="input-item input-price"> 
                    <label htmlFor=""></label>
                    <input type="number" placeholder="Price"  value={product.price}
                    onChange={(e) => setProduct ({...product, price : e.target.value})}/> 
                </section>

                <section className="input-item input-tags"> 
                    <label htmlFor=""></label>
                    <input type="text" placeholder="tags"  value={product.tags}
                    onChange={(e) => setProduct ({...product, tags : e.target.value})}/> 
                </section>

                <section className="add-file"> 
                    <label htmlFor=""></label>
                    <input type="file" placeholder="file" value={product.image}
                    onChange={(e) => setProduct({...product , image : e.target.value})}/> 
                </section>
            
                <button onClick={handleProduct}>Click</button>
             </form>
        </section>
     
    )
}

export default ToUpdateProduct


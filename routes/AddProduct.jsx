import { useState } from "react";
import "./Addproduct.css";
import { addProduct } from "../data/addProduct.js";


const AddProduct = () => {

    const {product , setProduct} = useState({
        
        id: "" ,
        name: "",
        price: "",
        image: "",
        tags: "",
    })

    async function handleproduct(e) {
       
        e.preventDefault();
        const newProduct = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            tags: product.tags,
        }
        console.log('skickar till api',newProduct);
        try {
        const result = await addProduct(newProduct);
        if (result){
            console.log("addProduct lyckades");
           }else{
            console.log("något blev fel");
           }
        } catch (error) {
            console.log(error.message);
        }
    }



    return (
        <div>

            <form onSubmit={handleproduct} className="addproduct-form">

            <section className="input-sec">
                <label htmlFor="Id"> Id:
                    <input id="Id" type="number"  placeholder="Id" 
                    onChange={(e) => setProduct({...product , id: e.target.value})} />    
                </label>    
            </section>    

            <section className="input-sec">
                <label htmlFor="name"> Produktnamn:
                    <input id="name" type="text"  placeholder="name" 
                    onChange={(e) => setProduct({...product , name: e.target.value})} />    
                </label>    
            </section>  

            <section className="input-sec">
                <label htmlFor="price"> Produktpris:
                    <input id="price" type="number"  placeholder="Price" 
                    onChange={(e) => setProduct({...product , name: e.target.value})} />    
                </label>    
            </section>  

            <section className="input-sec">
                <label htmlFor="image"> Produktbild: 
                    <input id="image" type="text"  placeholder="image" 
                    onChange={(e) => setProduct({...product , image: e.target.value})} />    
                </label>    
            </section>  

            <section className="input-sec">
                <label htmlFor="tags"> Produkttaggar:
                    <input id="tags" type="text"  placeholder="tags" 
                    onChange={(e) => setProduct({...product , tags: e.target.value})} />    
                </label>    
            </section>  

            <button className="add-btn" type="submit" >Click</button>
            </form>
        </div>
    )


}





export default AddProduct;
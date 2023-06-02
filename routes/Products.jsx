import { useLoaderData, Link } from "react-router-dom";
import "../stylesheet/products.css";
import { getProducts } from "../data/getProducts";
import { useState, useEffect, useContext } from "react";
import { LoginContext } from "../src/ContextRoot";
import { clearProduct } from "../data/clearProduct";
// import DeleteProduct from "./ClearProduct";

export const loader = () => getProducts();

function Products() {
	const {isLoggedIn, setIsLoggedIn} = useContext(LoginContext);
	const productData = useLoaderData();
	const [searchTerm, setSearchTerm] = useState("");

	const handleChange = (event) => {
		setSearchTerm(event.target.value);
	};


    async function handleOnClick(productId){
        const result = await clearProduct(productId)
      }
  

	return (
		<div>
            <h3 className="produkt">Produkter</h3>
			 {isLoggedIn &&
							<div className="admin-div">
							<Link to="/products/add"> <button className="admin-btn">Lägg till Produkt</button> </Link>							
							</div>
                            }
			<section className="top-searchbar">
				<div className="search-bar">
					<input
						onChange={handleChange}
						value={searchTerm}
						className="search-input"
						type="text"
						placeholder="Sök efter produkter"
					/>
				</div>
			</section>
				
			<div className="grid-container">
				{productData 
					.filter((product) =>
						product.name
							.toLowerCase()
							.includes(searchTerm.toLowerCase())
					)
					.map((product) => (
						<div className="product" key={product.id}>
							<h3 className="products-title">
									{product.name}
							</h3>
							<img
								className="products-pic"
								src={product.image}
								alt="product image"
							/>
							<div>
								<p className="product-price">
									Pris: {product.price} kr
								</p>
								<p>Taggar: {product.tags.join(", ")}</p>
                                {isLoggedIn &&
                                 <p> Id: {product.id}</p>
                            
                            }

							</div>
                            {isLoggedIn &&
							<div className="admin-div">
                                
							<Link to="/products/update"> <button className="admin-btn">Uppdatera</button> </Link>

                            <button onClick={ () => handleOnClick(product.id) } className="admin-btn">  <p>Ta bort</p></button>
							

							</div>
                            
                            }
						</div>
					))}
			</div>
		</div>
	);
}

export default Products;

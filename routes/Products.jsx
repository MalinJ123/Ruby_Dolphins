import { useLoaderData, Link } from "react-router-dom";
import "../stylesheet/products.css";
import { getProducts } from "../data/getProducts";
import { useState, useEffect } from "react";

export const loader = () => getProducts();

function Products() {
	const productData = useLoaderData();
	const [searchTerm, setSearchTerm] = useState("");

	const handleChange = () => {
		setSearchTerm(event.target.value);
	};

	return (
		<div>
            <h3 className="produkt">Produkter</h3>
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
							<h3 className="">
								<Link
									className="products-title"
									to={`/products/${product.id}`}
								>
									{product.name}
								</Link>
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

							</div>
						</div>
					))}
			</div>
		</div>
	);
}

export default Products;

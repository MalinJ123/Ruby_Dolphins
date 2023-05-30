import { useLoaderData, Link } from "react-router-dom";
import  "../stylesheet/products.css"
import { getProducts } from "../data/getProducts";

export const loader = () => getProducts();

function Products() {
	const productData = useLoaderData();

	return (
		<div>
			<h1>Produkter</h1>

            <div className="grid-container">
				{productData.map((product) => (
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
						<div className="product-price">
							<p>Pris: {product.price}  kr</p>
							<p>Taggar: {product.tags} </p>

						</div>
						
					</div>
				))}
			</div>





		</div>
	);
}

export default Products;

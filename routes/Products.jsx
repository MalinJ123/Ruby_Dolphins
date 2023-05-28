import { useLoaderData, Link } from "react-router-dom";

import {getProducts} from "../data/getProducts";

export const loader = () => getProducts();

function Products() {
    const productData = useLoaderData()
    return (
        <div>
            <h1>Products</h1>
            <ul>
                {
                    productData.map((product) => (
                        <li key={product.id}>
                            <Link to={`/products/${product.id}`}>{product.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Products
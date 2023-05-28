import { createHashRouter } from "react-router-dom";

// Routes
import Root from "../routes/Root";
import Products /*, {loader as productsLoader}*/ from "../routes/Products";


const router = createHashRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/products',
                element: <Products />,
                // loader: productsLoader
            }
        ]
    }
])

export { router }
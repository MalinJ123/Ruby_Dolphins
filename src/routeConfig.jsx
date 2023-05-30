import { createHashRouter } from "react-router-dom";

// Routes
import Root from "../routes/Root";
import Start from "../routes/Start";
import Products, {loader as productsLoader} from "../routes/Products";


const router = createHashRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '',
                element: <Start />
            },
            {
                path: '/products',
                element: <Products />,
                loader: productsLoader
            }
        ]
    }
])

export { router }
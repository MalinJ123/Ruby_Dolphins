import { createHashRouter } from "react-router-dom";

// Routes
import Root from "../routes/Root";
import Products, {loader as productsLoader} from "../routes/Products";
import Users, {loader as userLoader} from "../routes/Users";


const router = createHashRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/products',
                element: <Products />,
                loader: productsLoader
            },
            {
                path: '/users',
                element: <Users />,
                loader: userLoader
            }
        ]
    }
])

export { router }
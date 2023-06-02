import { createBrowserRouter } from "react-router-dom";

// Routes
import Root from "../routes/Root";
import Start from "../routes/Start";
import Products, {loader as productsLoader} from "../routes/Products";
import Users, {loader as userLoader} from "../routes/Users";
import ToUpdateProduct from "../components/UpdateProduct";
import PostUser from "../components/AddUser";


const router = createBrowserRouter([
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
            },
            {
                path: '/users',
                element: <Users />,
                loader: userLoader
            },
            {
                path: '/products/update',
                element: <ToUpdateProduct />,
            },
            {
                path: '/user/add',
                element: <PostUser />,
            },
        ]
    }
])

export { router }
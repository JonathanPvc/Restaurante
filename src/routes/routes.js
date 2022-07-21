import Home from "../pages/Home";
import Productos from "../pages/Products";
import Category from '../pages/Category'
import TypeOfLine from '../pages/TypeOfLine'
import ProductCreate from "../pages/ProductCreate";


export const routeMap = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/products',
        element: <Productos />
    },
    {
        path:'/category',
        element: <Category />
    },
    {
        path:'/typeofline',
        element: <TypeOfLine />
    },
    {
        path:'/products/create',
        element: <ProductCreate />
    }
]
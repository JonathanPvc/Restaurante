import Home from "../pages/Home/Home.js";
import Productos from "../pages/Products/Products";
import Category from '../pages/Category/Category'
import TypeOfLine from '../pages/TypeOfLine/TypeOfLine'
import ProductCreate from "../pages/ProductCreate/index"


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
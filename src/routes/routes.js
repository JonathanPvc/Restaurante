import Home from "../pages/Home";
import Productos from "../pages/Productos";
import Category from '../pages/Category'
import TypeOfLine from '../pages/TypeOfLine'


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
    }
]
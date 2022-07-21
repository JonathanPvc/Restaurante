import FormProduct from "../forms/products";
import {useNavigate} from 'react-router-dom'
import { Add } from '../forms/products';
import ProductCreate from "./ProductCreate";



const Products = () => {
    const navigate = useNavigate()
    
    return(
            <Add onClick={()=> navigate('/products/create')} />
    )
}

export default Products;
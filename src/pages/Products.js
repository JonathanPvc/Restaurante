
import { useNavigate } from 'react-router-dom'
import { Add } from '../atom/AddProduct/Add';

import TableProduct from "../organisms/TableProducts/TableProduct";




const Products = () => {
    const navigate = useNavigate()

    return (
        <>

            
        <Add onClick={()=> navigate('/products/create')} />
            

            <TableProduct />
        </>
    )
}

export default Products;
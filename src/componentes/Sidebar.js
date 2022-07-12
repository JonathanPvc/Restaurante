import { Link } from 'react-router-dom';

const Sidebar = () =>{

    return (
        <div className="sidebar">
           <ul>
            <li>
                <Link to='/home' className='text-gray-500 mt-3' >Productos </Link>
            </li>
            <li>
                <Link to='/category' className='text-gray-500 mt-3'>Categoria</Link>
            </li>
            <li>
                <Link to='/typeofline' className='text-gray-500 mt-3'>Tipo De Linea</Link>
            </li>
           </ul>
        </div>
    )
}

export default Sidebar;
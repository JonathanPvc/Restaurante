import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';


const Sidebar = () =>{

    return (
        <div className="sidebar">
           <ul>
           <li>
                <Link to='/home' >  <FaIcons.FaHome className='icono' /> Home </Link>
            </li>
            <li>
                <Link to='/productos' ><FaIcons.FaHamburger /> Productos </Link>
            </li>
            <li>
                <Link to='/category' ><FaIcons.FaDelicious/>Categoria </Link>
            </li>
            <li>
                <Link to='/typeofline'><FaIcons.FaAccusoft/>Tipo De Linea</Link>
            </li>
           </ul>
        </div>
    )
}

export default Sidebar;
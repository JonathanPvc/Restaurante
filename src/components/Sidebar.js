import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';


const Sidebar = () =>{

    return (
        <div className="sidebar">
           <ul>
           <li>
                <Link to='/' >  <FaIcons.FaHome  /> Home </Link>
            </li>
            <li>
                <Link to='/products' ><FaIcons.FaHamburger /> Products </Link>
            </li>
            <li>
                <Link to='/category' ><FaIcons.FaDelicious/>Category </Link>
            </li>
            <li>
                <Link to='/typeofline'><FaIcons.FaAccusoft/>Type Of Line</Link>
            </li>
           </ul>
        </div>
    )
}

export default Sidebar;
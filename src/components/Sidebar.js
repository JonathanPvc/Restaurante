import { NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';


const Sidebar = () => {

    return (

        <div className='sidebar'>

            <ul>
                <li>
                    <NavLink to='/' exact className='rounded ' activeClassName='active'><FaIcons.FaHome className='icono'/>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/products' className='rounded' exact activeClassName='active'><FaIcons.FaHamburger /> Products </NavLink>
                </li>
                <li>
                    <NavLink to='/category' className='rounded' exact activeClassName='active'><FaIcons.FaDelicious />Category </NavLink>
                </li>
                <li>
                    <NavLink to='/typeofline' className='rounded' exact activeClassName='active'><FaIcons.FaAccusoft />Type Of Line</NavLink>
                </li>
            </ul>

        </div>
    )
}

export default Sidebar;
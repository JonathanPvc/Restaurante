import { NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { faHome, faBurger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faCalendarCheck } from '@fortawesome/free-regular-svg-icons';

import './sidebar.scss'

const Sidebar = () => {

    return (

        <div className='sidebar'>

            <ul>
                <li>
                    <NavLink to='/' className='rounded '><FontAwesomeIcon className='iconoo' icon={faHome} />Home</NavLink>
                </li>
                <li>
                    <NavLink to='/products' className='rounded'><FontAwesomeIcon className='iconoo' icon={faBurger} /> Products </NavLink>
                </li>
                <li>
                    <NavLink to='/category' className='rounded'><FontAwesomeIcon className='iconoo' icon={faSun} />Category </NavLink>
                </li>
                <li>
                    <NavLink to='/typeofline' className='rounded'><FontAwesomeIcon className='iconoo' icon={faCalendarCheck} />Type Of Line</NavLink>
                </li>
            </ul>

            <div>
                <ul>
                    <li>
                        <button className='rounded cursor'><FontAwesomeIcon className='iconoo' icon={faHome} />Home</button>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Sidebar;
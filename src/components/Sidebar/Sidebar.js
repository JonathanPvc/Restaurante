import { NavLink } from 'react-router-dom';
import { faHome, faBurger, faPowerOff } from "@fortawesome/free-solid-svg-icons";
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
            <button className='rounded flex flex-col justify-center items-center'><FontAwesomeIcon className='iconoo' icon={faPowerOff} />Off Line</button>


        </div>
    )
}

export default Sidebar;
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Meta Tourism BD.png';
import useAuth from '../../hooks/useAuth';
import DropDown from '../DropDown/DropDown';
const Header = () => {
    const {user} = useAuth()
    return (
        <div>
            <header className="text-gray-600 body-font">
             <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 w-60">
                         <img className='w-full' src={Logo} alt="" />
                    </Link>
                    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link to='/home' className="mr-5 hover:text-gray-900 text-md font-bold text-lg">Home</Link>
                        <Link to='/about' className="mr-5 hover:text-gray-900 text-md font-bold text-lg">About</Link>
                        <Link to='/packages' className="mr-5 hover:text-gray-900 text-md font-bold text-lg">Packages</Link>
                        <Link to='/contact' className="mr-5 hover:text-gray-900 text-md font-bold text-lg">Contact</Link>
                        <Link to='/contact' className="mr-5 hover:text-gray-900 text-md font-bold text-lg">{user.name}</Link>
                    </nav>
                    <div className='w-20'>
                        <DropDown />
                    </div>
                </div>
        </header>
        </div>
    );
};

export default Header;
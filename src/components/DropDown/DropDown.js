import { Menu } from '@headlessui/react';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const DropDown = () => {

    const {user, logOut} = useAuth();
    const history = useHistory();
    const handleRoute = (params) => {
        if(params === 'my_package') {
            history.push('/my-package')
        } else if(params==='add_package'){
            history.push('/add-package')
        } else if(params==='manage_books') {
            history.push('/manage-books')
        } else if(params==='login'){
            history.push('/login')
        }
    }
    return (
    <Menu>
       {
           user.email?  <Menu.Button><img className='w-10 rounded-full' src={user.photoURL} alt="" /></Menu.Button>
            :
           <Menu.Button><FaUserCircle className=" text-4xl" /></Menu.Button>
       }
        <Menu.Items className="flex flex-col absolute bg-purple-800 space-y-2 text-left text-white py-2">

                <Menu.Item>
                    {({ active }) => (
                    <button
                        onClick= { () => handleRoute('my_package')}
                        className={`${active && 'bg-blue-500'} hover:text-white px-2 text-xl`}
                        href="/account-settings"
                    >
                        My Package
                    </button>
                    )}
                </Menu.Item>

                <Menu.Item>
                    {({ active }) => (
                    <button
                         onClick= { () => handleRoute('add_package')}
                        className={`${active && 'bg-blue-500'} hover:text-white px-2 text-xl`}
                        href="/account-settings"
                    >
                        Add Package
                    </button>
                    )}
                </Menu.Item>

                <Menu.Item>
                    {({ active }) => (
                    <button
                        onClick= { () => handleRoute('manage_books')}
                        className={`${active && 'bg-blue-500'} hover:text-white px-2 text-xl`}
                        href="/account-settings"
                    >
                        Manage All Books
                    </button>
                    )}
                </Menu.Item>

                {
                    user.email?<Menu.Item>
                    <button
                         onClick={logOut}
                         className='hover:text-white hover:bg-blue-500 px-2 text-xl'
                     >
                       logout
                     </button>
 
                 </Menu.Item>:<Menu.Item>
                    <button
                         onClick= { () => handleRoute('login')}
                         className='hover:text-white hover:bg-blue-500 px-2 text-xl'
                     >
                       Login
                     </button>
 
                 </Menu.Item>
                }
                
        </Menu.Items>
    </Menu>
    );
};

export default DropDown;
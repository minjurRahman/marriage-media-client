import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { DrawerContext } from '../../../App';
import { AuthContext } from '../../../contexts/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useContext(DrawerContext);

    const { pathname } = useLocation()

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Log out successful')
                navigate('/')
            })
            .catch(error => console.error(error));
    }

    const menuItems = <>
        <li><Link className='text-lg font-semibold rounded-lg' to='/'>Home</Link></li>
        <li><Link className='text-lg font-semibold rounded-lg' to='/about-us'>About Us</Link></li>
        <li><Link className='text-lg font-semibold rounded-lg' to='/faq'>FAQ</Link></li>
        <li><Link className='text-lg font-semibold rounded-lg' to='/contact-us'>Contact Us</Link></li>

        {user?.uid ?
            <>
                <li><Link className='text-lg font-semibold rounded-lg' to='/dashboard'>Dashboard</Link></li>
                <li><button onClick={handleLogOut} className='rounded-lg btn-outline btn btn-primary'>Sign Out</button></li>
            </>
            :
            <li><Link className='rounded-lg btn btn-outline btn-primary' to='/login'>Login</Link></li>
        }

    </>

    return (
        <div className="navbar bg-pink-500 p-6 rounded-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a href='/' className="font-semibold normal-case text-xl">SalafiyahNikah</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {/* <a href='/' className="btn btn-primary">Login</a> */}
            </div>

            {
                pathname.includes('dashboard') &&
                <label onClick={() => setIsOpen(!isOpen)} htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            }
        </div>
    );
};

export default NavBar;
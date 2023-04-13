import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { DrawerContext } from '../App';
import { AuthContext } from '../contexts/AuthProvider';
import Footer from '../Pages/Shared/Footer/Footer';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    
    //Drawer handle 
    const [isOpen, setIsOpen] = useContext(DrawerContext);

    return (
        <div>
            <NavBar></NavBar>
            {/* <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to={`/dashboard/mybiodata/${user?.email}`}><button className="btn btn-secondary">My Biodata</button></Link></li>
                    
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        {
                            // isAdmin &&
                            <>
                                <li><Link to='/dashboard/editbiodata'>Edit Biodata</Link></li>
                                <li><Link to='/dashboard/shortlist'>Short List</Link></li>
                                <li><Link to='/dashboard/ignorelist'>Ignore List</Link></li>
                                <li><Link to='/dashboard/mypurchased'>My Purchased</Link></li>
                                <li><Link to='/dashboard/supportreport'>Support & Report</Link></li>
                                <li><Link to='/dashboard/settings'>Settings</Link></li>
                                <li ><Link to='/dashboard/logout'>Log Out</Link></li>

                                <li><label htmlFor="dashboard-drawer" tabIndex={2} className="">
                                   checking 
                                </label></li>

                            </>
                        }

                    </ul>

                </div>
            </div> */}

            <div className='relative lg:grid lg:grid-cols-12'>
                {
                    isOpen &&
                    <div className='absolute z-50 lg:hidden bg-transparent'>
                        <ul onClick={() => setIsOpen(false)} className="menu p-4 w-80 text-base-content">
                            <li><Link to={`/dashboard/mybiodata/${user?.email}`}><button className="btn btn-secondary">My Biodata</button></Link></li>

                            <li><Link to={`/dashboard/${user?.email}`}>Dashboard</Link></li>
                            {
                                // isAdmin &&
                                <>
                                    <li><Link to='/dashboard/editbiodata'>Edit Biodata</Link></li>
                                    <li><Link to='/dashboard/shortlist'>Short List</Link></li>
                                    <li><Link to='/dashboard/ignorelist'>Ignore List</Link></li>
                                    <li><Link to='/dashboard/mypurchased'>My Purchased</Link></li>
                                    <li><Link to='/dashboard/supportreport'>Support & Report</Link></li>
                                    <li><Link to='/dashboard/settings'>Settings</Link></li>
                                    <li ><Link to='/dashboard/logout'>Log Out</Link></li>

                                    <li><label htmlFor="dashboard-drawer" tabIndex={2} className="">
                                        checking
                                    </label></li>

                                </>
                            }

                        </ul>
                    </div>
                }
                <div className='hidden bg-transparent lg:block lg:col-span-3'>
                        <ul onClick={() => setIsOpen(false)} className="menu p-4 w-80 text-base-content">
                            <li><Link to={`/dashboard/mybiodata/${user?.email}`}><button className="btn btn-secondary">My Biodata</button></Link></li>

                            <li><Link to='/dashboard'>Dashboard</Link></li>
                            {
                                // isAdmin &&
                                <>
                                    <li><Link to='/dashboard/editbiodata'>Edit Biodata</Link></li>
                                    <li><Link to='/dashboard/shortlist'>Short List</Link></li>
                                    <li><Link to='/dashboard/ignorelist'>Ignore List</Link></li>
                                    <li><Link to='/dashboard/mypurchased'>My Purchased</Link></li>
                                    <li><Link to='/dashboard/supportreport'>Support & Report</Link></li>
                                    <li><Link to='/dashboard/settings'>Settings</Link></li>
                                    <li ><Link to='/dashboard/logout'>Log Out</Link></li>

                                </>
                            }

                        </ul>
                    </div>
                <div className='lg:col-span-9'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;
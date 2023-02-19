import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const DashboardLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                   <Outlet></Outlet>
                    
                </div> 
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 text-base-content">
                    
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
                        <li><Link to='/dashboard/logout'>Log Out</Link></li>

                        </>
                    }
                    
                    </ul>
                
                </div>
                </div>
        </div>
    );
};

export default DashboardLayout;
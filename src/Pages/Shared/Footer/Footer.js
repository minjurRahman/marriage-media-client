import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section>
            <footer className="footer p-10 bg-base-200 text-base-content rounded-md">
                <div>
                    <Link to='/' className="font-bold text-2xl">SalafiyahNikah</Link>
                    <p className='t'>Bangladeshi<br />Number one marriage media</p>
                </div>
                <div>
                    <span className="text-xl font-bold">Services</span>
                    <a href='/' className="link link-hover">Branding</a>
                    <a href='/' className="link link-hover">Design</a>
                    <a href='/' className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="text-xl font-bold">Quick Links</span>
                    <Link to='/'>Home</Link>
                    <Link to='/about-us'>About Us</Link>
                    <Link to='/faq'>FAQ</Link>
                    <Link to='/contact-us'>Contact Us</Link>
                </div>
                <div>
                    <span className="text-xl font-bold">Legal</span>
                    <Link to='/terms-and-conditions'>Terms & Conditions</Link>
                    <Link to='/privacy-policy'>Privacy policy</Link>
                    <Link to='/refund-policy'>Refund Policy</Link>
                </div>
            </footer>
            <div className=' p-4 bg-pink-600 text-base-content text-center rounded-sm'>
                <p className='text-white'>Copyright © 2023 - All right reserved by salafiyahnikah.com</p>
            </div>
        </section>
    );
};

export default Footer;
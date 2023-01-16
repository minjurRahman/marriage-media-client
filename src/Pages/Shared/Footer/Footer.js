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
                    <span className="footer-title">Services</span>
                    <a href='/' className="link link-hover">Branding</a>
                    <a href='/' className="link link-hover">Design</a>
                    <a href='/' className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href='/' className="link link-hover">About us</a>
                    <a href='/' className="link link-hover">Contact</a>
                    <a href='/' className="link link-hover">Jobs</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href='/' className="link link-hover">Terms of use</a>
                    <a href='/' className="link link-hover">Privacy policy</a>
                    <a href='/' className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </section>
    );
};

export default Footer;
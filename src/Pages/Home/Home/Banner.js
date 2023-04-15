import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryBtn from '../../../components/PromaryBtn/PrimaryBtn';

const Banner = () => {
    return (
        <div>
            <div className="dark:bg-violet-400">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">Salafiah Nikah is an Online Marriage Media</h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
                    <div className="flex flex-wrap justify-center">
                        <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50">Get started</button>
                        <button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900">Learn more</button>
                    </div>
                </div>
            </div>
            <div className='w-5/6 p-32 mx-auto mb-12 -mt-20 flex justify-between rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500'>
                {/* <img  src="https://source.unsplash.com/random/480x320" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" /> */}
                <div>
                    <select className="select select-secondary w-full max-w-xs">
                        <option disabled selected>All</option>
                        <option>Male's Biodata</option>
                        <option>Female's Biodata</option>
                    </select>
                </div>
                <Link to='/allbiodata'><PrimaryBtn className="me">Search</PrimaryBtn></Link>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import { Link } from 'react-router-dom';
import male from '../../../../assets/statistics/male.svg'

const AllBiodataSummary = ({user}) => {
    const { MaritalStatus, Birthday, Height, Complexion, Weight, Occupation, _id } = user;
    return (
        <div className=' '>
            <div className="card bg-base-100 shadow-xl border">
                <figure className="px-10 pt-10 bg-pink-500">
                    <img src={male} alt="male" className="rounded-xl mb-4" />
                </figure>
                <div className="card-body items-center text-center">
                    <div class="flex flex-col">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div class="overflow-hidden">
                                    <table class="min-w-full text-left text-sm font-light">
                                        <tbody className='border'>
                                            <tr
                                                class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                                                <td class="whitespace-nowrap px-6 py-4 font-medium">Marital Status</td>
                                                <td class="whitespace-nowrap px-6 py-4">{MaritalStatus}</td>
                                            </tr>
                                            <tr
                                                class="border-b bg-white dark:border-neutral-500 dark:bg-neutral-600">
                                                <td class="whitespace-nowrap px-6 py-4 font-medium">Birthday</td>
                                                <td class="whitespace-nowrap px-6 py-4">{Birthday}</td>
                                            </tr>
                                            <tr
                                                class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                                                <td class="whitespace-nowrap px-6 py-4 font-medium">Complexion</td>
                                                <td class="whitespace-nowrap px-6 py-4">{Complexion}</td>
                                            </tr>
                                            <tr
                                                class="border-b bg-white dark:border-neutral-500 dark:bg-neutral-600">
                                                <td class="whitespace-nowrap px-6 py-4 font-medium">Occupation</td>
                                                <td class="whitespace-nowrap px-6 py-4">{Occupation}</td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to={`/biodata-details/${_id}`}><button className='btn btn-primary'>Full Biodata</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AllBiodataSummary;
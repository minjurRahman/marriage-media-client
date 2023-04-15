import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const MyPurchased = () => {
    const { user } = useContext(AuthContext)
    const url = `https://products-resale-server-dusky.vercel.app/bookings?email=${user?.email}`;

    // const {data: bookings = [] } = useQuery({
    //     queryKey: ['bookings', user?.email],
    //     queryFn: async () =>{
    //         const res = await fetch(url, {
    //             headers: {
    //                 authorization: `bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         });
    //         const data = await res.json();
    //         console.log(data)
    //         return data;
    //     }
    // })

    return (
        <div>
            <h3 className='text-3xl text-center mb-5 mt-4'>My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Order Date</th>
                        <th>Payment</th>
                    </tr>
                    </thead>
                    <tbody>
                        {/* {
                            bookings?.map((booking, i) => <tr key={booking._id}>
                            
                            <th>{i+1}</th>
                            <th><div className="mask w-12 h-12">
                                <img src={booking?.image ? booking.image : avater } alt="Avatar" />
                            </div>
                            </th>
                            <td>{booking.itemName}</td>
                            <td>{booking.price}</td>
                            <td>{(booking.onDate.slice(0, 10))}</td>
                            <td>
                                 {
                                    booking.price && !booking.paid && <Link 
                                    to={`/dashboard/payment/${booking._id}`}>
                                    <button className='btn btn-primary btn-sm'>Pay</button>
                                    </Link>
                                 }
                                 {
                                     booking.price && booking.paid && <span className='text-green-500'>Paid</span>
                                 }
                            </td>
                        </tr>)
                        } */}

                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default MyPurchased;
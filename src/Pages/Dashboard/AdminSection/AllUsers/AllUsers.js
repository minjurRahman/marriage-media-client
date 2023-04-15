import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';


const AllUsers = () => {

    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('https://products-resale-server-dusky.vercel.app/users');
            const data = await res.json();
            return data;
        }
    })

   /*  const handleMakeAdmin = id =>{
        fetch(`https://products-resale-server-dusky.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Admin create Successfully.')
                refetch();
            }
        })
    } */

    return (
        <div>
            <h3 className='text-3xl mb-5 text-center mt-4'>All Users</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>User Image</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Admin create</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {/* {
                            users.map((user, i) => <tr key={user._id}>
                            
                            <th>{i+1}</th>
                            <th><div className="mask mask-circle w-12 h-12">
                                <img src={user?.photoURL ? user.photoURL : userP } alt="Avatar" />
                            </div>
                            </th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{ user?.role !== 'admin' &&  <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                            <td><button className='btn btn-xs btn-secondary'>Delete</button></td>
                        </tr>)

                        } */}

                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default AllUsers;
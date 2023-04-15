import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Biodata from './Biodata';

const AllBiodata = () => {

    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='grid lg:grid-cols-4 gap-4 mt-4 mb-4 m-2'>
            
            {
              users.map((user, i) => <Biodata
              key={user._id}
              user={user}
              ></Biodata>)  
            }
        </div>
    );
};

export default AllBiodata;
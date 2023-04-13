import React from 'react';
import { useLoaderData } from 'react-router-dom';
import male from '../../../assets/statistics/male.svg'
import BiodataTable from './UserBiodataTable/BiodataTable';
import SummaryBiodata from './UserBiodataTable/SummaryBiodata';

const MyBioData = () => {

    const userInfo = useLoaderData();
    console.log(userInfo)
    const { BiodataType, MaritalStatus, Birthday, Height, Complexion, Weight, BloodGroup, Nationality } = userInfo;

    return (
        <div className='lg:flex gap-4'>
            <div className=''>
                <div className="card w-96 bg-base-100 shadow-xl border">
                    <figure className="px-10 pt-10">
                        <img src={male} alt="male" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <SummaryBiodata></SummaryBiodata>
                    </div>
                </div>
            </div>
            <div className='second'>
                <div className="card bg-base-100 shadow-xl border">
                    <div className="card-body items-center text-center">
                        <BiodataTable></BiodataTable>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBioData;
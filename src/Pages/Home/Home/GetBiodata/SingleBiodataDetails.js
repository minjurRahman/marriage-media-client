import React from 'react';
import SingleBiodataTable from './SingleBiodataTable';
import { useLoaderData } from 'react-router-dom';
import SingleSummaryData from './SingleSummaryData';

const SingleBiodataDetails = () => {
    
    const biodata = useLoaderData();
    console.log(biodata._id);

    return (
        <div className='lg:flex gap-4 mb-4 mt-4'>
            <div className=''>
                <div className="card w-96 bg-base-100 shadow-xl border">
                    <div className="card-body items-center text-center">
                        <SingleSummaryData biodata={biodata}></SingleSummaryData>
                    </div>
                </div>
            </div>
            <div className='second'>
                <div className="card bg-base-100 shadow-xl border">
                    <div className="card-body items-center text-center">
                        <SingleBiodataTable biodata={biodata}></SingleBiodataTable>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBiodataDetails;
import React from 'react';
import AllBiodataSummary from './AllBiodataSummary';

const Biodata = ({user}) => {
    const {email, } = user
    return (
        <div className=''>
            <div><AllBiodataSummary user={user}></AllBiodataSummary></div>
        </div>
    );
};

export default Biodata;
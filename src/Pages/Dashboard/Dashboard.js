import React from 'react';
import { useLoaderData } from 'react-router-dom';
import male from '../../assets/statistics/male.svg'
import BiodataView from './MyDashboard/BiodataView';
import Dislike from './MyDashboard/Dislike';
import MyCart from './MyDashboard/MyCart';
import MyCollections from './MyDashboard/MyCollections';
import ShortListed from './MyDashboard/ShortListed';
import YouSearched from './MyDashboard/YouSearched';

const Dashboard = () => {

    return (
        <div className=''>
            <div className='grid lg:grid-cols-3 gap-4 m-3'>
                <div>
                    <MyCollections></MyCollections>
                </div>
                <div>
                    <BiodataView></BiodataView>
                </div>
                <div>
                    <ShortListed></ShortListed>
                </div>
                <div>
                    <YouSearched></YouSearched>
                </div>
                <div>
                    <Dislike></Dislike>
                </div>
                <div>
                    <MyCart></MyCart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
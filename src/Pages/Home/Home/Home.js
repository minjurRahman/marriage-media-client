import React from 'react';
import useTitle from '../../../Hooks/TitleNavigate';
import Banner from './Banner';
import CreateBio from './CreateBio';
import AllBiodata from './GetBiodata/AllBiodata';
import HowWeWorks from './HowWeWorks/HowWeWorks';
import UserStatistics from './UserStatistics/UserStatistics';

const Home = () => {
    useTitle('Home')
    return (
        <section>
            <Banner></Banner>
            <CreateBio></CreateBio>
            <UserStatistics></UserStatistics>
            <HowWeWorks></HowWeWorks>
        </section>
    );
};

export default Home;
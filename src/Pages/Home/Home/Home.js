import React from 'react';
import PrimaryBtn from '../../../components/PromaryBtn/PrimaryBtn';
import useTitle from '../../../Hooks/TitleNavigate';
import Banner from './Banner';
import CreateBio from './CreateBio';
import UserStatistics from './UserStatistics/UserStatistics';

const Home = () => {
    useTitle('Home')
    return (
        <section>
            <Banner></Banner>
            <CreateBio></CreateBio>
            <UserStatistics></UserStatistics>
        </section>
    );
};

export default Home;
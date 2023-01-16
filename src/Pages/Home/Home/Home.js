import React from 'react';
import useTitle from '../../../Hooks/TitleNavigate';

const Home = () => {
    useTitle('Home')
    return (
        <section>
            <h3 className='text-2xl'>This is HomePage</h3>
        </section>
    );
};

export default Home;
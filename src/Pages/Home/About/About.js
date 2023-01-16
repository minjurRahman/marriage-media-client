import React from 'react';
import useTitle from '../../../Hooks/TitleNavigate';

const About = () => {
    useTitle('About')
    return (
        <div>
            <h3 className='text-2xl'>This is About Page</h3>
        </div>
    );
};

export default About;
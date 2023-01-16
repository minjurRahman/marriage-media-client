import React from 'react';
import useTitle from '../../Hooks/TitleNavigate';

const FAQ = () => {
    useTitle('Faq')
    return (
        <div>
            <h3 className='text-2xl'>This is FAQ Page</h3>
        </div>
    );
};

export default FAQ;
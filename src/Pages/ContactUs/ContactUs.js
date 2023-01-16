import React from 'react';
import useTitle from '../../Hooks/TitleNavigate';

const ContactUs = () => {
    useTitle('Contact Us')
    return (
        <div>
            <h3 className='text-2xl'>This is Contact Us Page</h3>
        </div>
    );
};

export default ContactUs;
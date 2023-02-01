import React from 'react';
import useTitle from '../../Hooks/TitleNavigate';

const PrivacyPolicy = () => {
    useTitle('Privacy Policy')
    return (
        <div>
            <h3 className='text-2xl'>This is Privacy Policy Page</h3>
        </div>
    );
};

export default PrivacyPolicy;
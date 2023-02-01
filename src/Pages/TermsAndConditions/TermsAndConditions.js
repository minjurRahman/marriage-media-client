import React from 'react';
import useTitle from '../../Hooks/TitleNavigate';

const TermsAndConditions = () => {
    useTitle('Terms and Conditions')
    return (
        <div>
            <h3 className='text-2xl'>This is Terms And Conditions Page</h3>
        </div>
    );
};

export default TermsAndConditions;
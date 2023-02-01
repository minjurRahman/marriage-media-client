import React from 'react';
import useTitle from '../../Hooks/TitleNavigate';

const RefundPolicy = () => {
    useTitle('Refund Policy')
    return (
        <div>
            <h3 className='text-2xl'>This is Refund Policy Page</h3>
        </div>
    );
};

export default RefundPolicy;
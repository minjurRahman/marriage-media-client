import React from 'react';

const ShortListed = () => {
    return (
        <div>
            <div className="card bg-base-100 border shadow-lg">
                <div className="card-body items-center text-center">
                    <h2 className='text-3xl font-bold'>0</h2>
                    <h3 className="card-title">Your biodata has been shortlisted</h3>
                    <p>Those number of people shortlisted your biodata</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">demo</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShortListed;
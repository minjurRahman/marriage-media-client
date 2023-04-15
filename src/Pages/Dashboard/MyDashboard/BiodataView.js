import React from 'react';

const BiodataView = () => {
    return (
        <div>
            <div className="card bg-base-100 border shadow-lg">
                <div className="card-body items-center text-center">
                    <h2 className='text-3xl font-bold'>0</h2>
                    <h3 className="card-title">Number of Biodata Visitors has Been Seen</h3>
                    <p>Number of times your biodata has been visited</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Demo</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BiodataView;
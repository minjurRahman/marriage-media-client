import React from 'react';

const MyCollections = () => {
    
    return (
        <div>
            <div className="card bg-pink-500 border shadow-lg">
                <div className="card-body items-center text-center">
                    <h2 className='text-3xl font-bold'>0</h2>
                    <h3 className="card-title">Connections available</h3>
                    <p>One connection is required to view contact details of each biodata</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy more connection</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCollections;
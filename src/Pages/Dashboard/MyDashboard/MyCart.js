import React from 'react';

const MyCart = () => {
    return (
        <div>
            <div className="card bg-base-100 border shadow-lg">
                <div className="card-body items-center text-center">
                    <h2 className='text-3xl font-bold'>0</h2>
                    <h3 className="card-title">My Purchased</h3>
                    <p>All your purchased history</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Demo</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;
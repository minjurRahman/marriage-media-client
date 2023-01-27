import React from 'react';

const PrimaryBtn = ({children}) => {
    return (
        <div>
            <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">{children}</button>
        </div>
    );
};

export default PrimaryBtn;
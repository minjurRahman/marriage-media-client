import React from 'react';

const HowWeWork = ({ describe }) => {
    const { name, description, img } = describe;
    return (
        <div className="card bg-pink-50 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Avatar" className="rounded-sm w-24 h-14" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl font-bold">{name}</h2>
                <p>{description}</p>
                {/* <h3 className='text-5xl'>{view}</h3> */}
            </div>
        </div>
    );
};

export default HowWeWork;
import React from 'react';

const UserStatistic = ({statistic}) => {
    const {name, description, img, view} = statistic;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Avatar" className="rounded-sm w-24" />
            </figure>
            <div className="card-body items-center text-center">
                {/* <h2 className="card-title">{name}</h2> */}
                <p>{description}</p>
                <h3 className='text-5xl'>{view}</h3>
            </div>
        </div>
    );
};

export default UserStatistic;
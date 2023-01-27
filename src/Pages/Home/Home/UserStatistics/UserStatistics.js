import React from 'react';
import UserStatistic from './UserStatistic';

const UserStatistics = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: "Total Groom and Bride's Biodatas",
            img: "male-female avatar",
            view: 1200
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: "Total Groom's Biodatas",
            img: "male avatar",
            view: 834
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: "Total Bride's Biodatas",
            img: "female avatar",
            view: 566
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: "Total Successful Marriages",
            img: "total successful avatar",
            view: 53
        },
    ]

    return (
        <div>
            <div className='mt-16 mb-6'>
                <div className='text-center'>
                    <h1 className='text-5xl font-bold text-primary uppercase'>Salafiyah Nikah User Statistics</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {
                        servicesData.map(statistic => <UserStatistic
                            key={statistic.id}
                            statistic={statistic}
                        ></UserStatistic>)
                    }
                </div>
            </div>
        </div>
    );
};

export default UserStatistics;
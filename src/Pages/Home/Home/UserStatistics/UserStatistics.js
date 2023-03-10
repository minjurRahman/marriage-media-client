import React from 'react';
import UserStatistic from './UserStatistic';
import couple from '../../../../assets/statistics/couple.svg';
import male from '../../../../assets/statistics/male.svg';
import female from '../../../../assets/statistics/female.svg';
import married from '../../../../assets/statistics/married.svg';

const UserStatistics = () => {
    const servicesData = [
        {
            id: 1,
            name: 'All Grooms and Brides',
            description: "Total Groom and Bride's Biodatas",
            img: couple,
            view: '1200'
        },
        {
            id: 2,
            name: 'All Grooms',
            description: "Total Groom's Biodatas",
            img: male,
            view: '704'
        },
        {
            id: 3,
            name: 'All Brides',
            description: "Total Bride's Biodatas",
            img: female,
            view: '496'
        },
        {
            id: 3,
            name: 'All Marriages',
            description: "Total Successful Marriages",
            img: married,
            view: '62+'
        },
    ]

    return (
        <div>
            <div className='mt-36 mb-10'>
                <div className='text-center mb-12'>
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
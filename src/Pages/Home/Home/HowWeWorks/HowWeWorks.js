import React from 'react';
import HowWeWork from './HowWeWork';

const HowWeWorks = () => {
    const worksData = [
        {
            id: 1,
            name: 'Create Biodata',
            description: "You can easily create a biodata on Salafiyah Nikah completely free of cost within some steps.",
            img: 'couple',
            view: 1200
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: "Total Groom's Biodatas",
            img: 'male',
            view: 704
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: "Total Bride's Biodatas",
            img: 'female',
            view: 496
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: "Total Successful Marriages",
            img: 'married',
            view: 53
        },
    ]
    return (
        <div>
            <div className='mt-16 mb-6'>
                <div className='text-center mb-12'>
                    <h1 className='text-5xl font-bold text-primary uppercase'> How Salafiyah Nikah Works</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {
                        worksData.map(describe => <HowWeWork
                            key={describe.id}
                            describe={describe}
                        ></HowWeWork>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HowWeWorks;
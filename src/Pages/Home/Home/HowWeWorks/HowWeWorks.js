import React from 'react';
import HowWeWork from './HowWeWork';
import createbio from '../../../../assets/aboutWorks/hiw-create-biodata.svg';
import search from '../../../../assets/aboutWorks/hiw-search.svg';
import contact from '../../../../assets/aboutWorks/hiw-contact.svg';
import married from '../../../../assets/aboutWorks/hiw-success.svg';

const HowWeWorks = () => {
    const worksData = [
        {
            id: 1,
            name: 'Create Biodata',
            description: "You can easily create a biodata on Salafiyah Nikah completely free of cost within some steps.",
            img: createbio,
            view: 1200
        },
        {
            id: 2,
            name: 'Search Biodata',
            description: "You can easily search biodata using many filters including age, upazila, profession, educational qualification.",
            img: search,
            view: 704
        },
        {
            id: 3,
            name: 'Contact with guardians',
            description: "If someone likes your biodata or you like someone's biodata you can directly contact their parent.",
            img: contact,
            view: 496
        },
        {
            id: 3,
            name: 'Get Married',
            description: "If you like the biodata and conversation, do your own inquiry & get married according to Sunnah.",
            img: married,
            view: 53
        },
    ]
    return (
        <div>
            <div className='mt-36 mb-6'>
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
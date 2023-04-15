import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryBtn from '../../../components/PromaryBtn/PrimaryBtn';

const CreateBio = () => {
    return (
        <div className='mb-6'>
            <div className="card p-20 bg-gray-500 text-neutral-content">
                <div className="card-body items-center text-center">
                    <h1 className="text-5xl text-white">Create biodata in Salafiyah Nikah completely free of cost</h1>
                    
                    <div className="card-actions pt-4 justify-end">
                        <Link to='/dashboard/editbiodata'><PrimaryBtn> Create Your biodata </PrimaryBtn></Link>
                        <button className="btn btn-outline btn-secondary">How to create biodata</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateBio;
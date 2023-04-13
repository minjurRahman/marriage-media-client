import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


const BiodataTable = () => {

    const userInfo = useLoaderData();
    console.log(userInfo)
    const { BiodataType, MaritalStatus, Birthday, Height, Complexion, Weight, BloodGroup, Nationality, AboutYou,     } = userInfo;

    return (
        <div className='border border-collapse '>
            <div class="flex gap-3 border border-collapse border-spacing-3 p-3">
                <div className='text-left'>
                    Birthday
                </div>
                <div className='text-left'>
                    {Birthday}
                </div>
            </div>
            
            <div class="flex gap-6 border p-3">
                <div className='text-left'>
                    About You
                </div>
                <div className='text-left'>
                    {AboutYou}
                </div>
            </div>

            <div class="flex gap-3 border p-3">
                <div className='text-left'>
                    Marital Status
                </div>
                <div className='text-left'>
                    {MaritalStatus}
                </div>
            </div>
        </div>
    );
};

export default BiodataTable;
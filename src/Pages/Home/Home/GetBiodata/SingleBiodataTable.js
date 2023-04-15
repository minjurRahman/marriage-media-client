import React from 'react';

const BiodataTable = ({biodata}) => {

    const {email} = biodata;

    return (
        <div className='border border-collapse '>
            <div class="flex gap-3 border border-collapse border-spacing-3 p-3">
                <div className='text-left'>
                    Birthday
                </div>
                <div className='text-left'>
                    {email}
                </div>
            </div>
            
            <div class="flex gap-6 border p-3">
                <div className='text-left'>
                    About You
                </div>
                <div className='text-left'>
                    {/* {AboutYou} */}
                </div>
            </div>

            <div class="flex gap-3 border p-3">
                <div className='text-left'>
                    Marital Status
                </div>
                <div className='text-left'>
                    {/* {MaritalStatus} */}
                </div>
            </div>
        </div>
    );
};

export default BiodataTable;
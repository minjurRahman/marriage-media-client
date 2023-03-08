import React from 'react';

const MarriageRelatedInfo = () => {
    return (
        <div className='mb-6 '>
            <h2 className='text-3xl font-semibold text-center mb-4'>Marriage Related Information</h2>
            <hr />
            <form className='flex justify-center items-center'>
                <div>
                    <label className="label"> <span className="label-text">Your Education Method</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' required>
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="">General</option>
                            <option value="">Qawmi</option>
                            <option value="">Alia</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">Marital Status</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' required>
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="">Never Married</option>
                            <option value="">Married</option>
                            <option value="">Divorced</option>
                            <option value="">Widow</option>
                            <option value="">Widower</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">Birthday</span> </label>
                    <input type='date'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        // {...register("name", {
                        //     required: 'Name is required'
                        // })}
                        placeholder='Please enter your area name'
                    />
                    <label className="label w-full max-w-xs"><span className="label-text"> <span className='text-red-500'>Note:</span> Please provide your real birth date. If there is a fabricated birth date in NID or birth registration, do not provide it.</span></label>


                    <label className="label"> <span className="label-text">Height</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' required>
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="">Less than 4'5'</option>
                            <option value="">5'</option>
                            <option value="">6'</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">Complexion</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' required>
                        <optgroup label="Please choose an option">
                        <option selected disabled value="">Select</option>
                            <option value="">Black</option>
                            <option value="">Brown</option>
                            <option value="">Light Brown</option>
                            <option value="">Fair</option>
                            <option value="">Very Fair</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">Weight</span> </label>
                    <input type='number'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        // {...register("name", {
                        //     required: 'Name is required'
                        // })}
                        placeholder='Your Weight'
                    />

                    <label className="label"> <span className="label-text">Blood Group</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' required>
                        <optgroup label="Please choose an option">
                        <option selected disabled value="">Select</option>
                            <option value="">A+</option>
                            <option value="">A-</option>
                            <option value="">B+</option>
                            <option value="">B-</option>
                            <option value="">AB+</option>
                            <option value="">AB-</option>
                            <option value="">O+</option>
                            <option value="">O-</option>
                            <option value="">Don't know</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">Nationality</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' required>
                        <optgroup label="Please choose an option">
                        <option selected disabled value="">Select</option>
                            <option value="">Bangladeshi</option>   
                        </optgroup>
                    </select>
                </div>
            </form>

        </div>
    );
};

export default MarriageRelatedInfo;
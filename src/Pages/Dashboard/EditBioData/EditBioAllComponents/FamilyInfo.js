import React from 'react';

const FamilyInfo = () => {
    return (
        <div className='mb-6 '>
            <h2 className='text-3xl font-semibold text-center mb-4'>Family Information</h2>
            <hr />
            <form className='flex justify-center items-center'>
                <div>
                    <label className="label"> <span className="label-text">Father's Name</span> </label>
                    <input type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        // {...register("name", {
                        //     required: 'Name is required'
                        // })}
                        placeholder='Name'
                    />
                    <label className="label w-full max-w-xs"><span className="label-text"> <span className='text-red-500'>Note:</span> Only for authority.</span></label>

                    <label className="label"> <span className="label-text">Is your father alive? </span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' required>
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="">Yes, alive</option>
                            <option value="">Not alive</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">Description of father's profession</span> </label>
                    <input type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        // {...register("name", {
                        //     required: 'Name is required'
                        // })}
                        placeholder='Profession'
                    />
                    <label className="label w-full max-w-xs"><span className="label-text"> <span className='text-red-500'>Note:</span> If he is an employee, write the type of organization and title, and if he is a businessman, what kind of business he does etc.</span></label>

                    <label className="label"> <span className="label-text">Mother's Name</span> </label>
                    <input type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        // {...register("name", {
                        //     required: 'Name is required'
                        // })}
                        placeholder='Name'
                    />
                    <label className="label w-full max-w-xs"><span className="label-text"> <span className='text-red-500'>Note:</span> Only for authority.</span></label>

                    <label className="label"> <span className="label-text">Is your mother alive? </span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' required>
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="">Yes, alive</option>
                            <option value="">Not alive</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">Description of mother's profession</span> </label>
                    <input type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        // {...register("name", {
                        //     required: 'Name is required'
                        // })}
                        placeholder='Profession'
                    />

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

export default FamilyInfo;
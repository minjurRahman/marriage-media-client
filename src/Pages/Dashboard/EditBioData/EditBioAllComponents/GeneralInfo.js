import React from 'react';

const GeneralInfo = ({register, errors, setGender}) => {
    return (
        <div className='mb-6 '>
            <h2 className='text-3xl font-semibold text-center mb-4'>General Information</h2>
            <hr />
            <form className='flex justify-center items-center'>
                <div>
                    <label className="label"> <span className="label-text">Biodata Type</span> </label>
                    <select onChange={(e)=>setGender(e.target.value)} name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                    // {...register("BiodataType", {
                    //     required: 'Biodata Type is required'
                    // })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="male">Male's Biodata</option>
                            <option value="female">Female's Biodata</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">Marital Status</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                    {...register("MaritalStatus", {
                        required: 'Marital Status is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="Never Married">Never Married</option>
                            <option value="Married">Married</option>
                            <option value="Divorced">Divorced</option>
                            <option value="Widow">Widow</option>
                            <option value="Widower">Widower</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">Birthday</span> </label>
                    <input type='date'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("Birthday", {
                            required: 'Birthday is required'
                        })}
                        placeholder='Please enter your area name' 
                    />
                    {errors.Birthday && <span>This field is required</span>}
                    <label className="label w-full max-w-xs"><span className="label-text"> <span className='text-red-500'>Note:</span> Please provide your real birth date. If there is a fabricated birth date in NID or birth registration, do not provide it.</span></label>


                    <label className="label"> <span className="label-text">Height</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                    {...register("Height", {
                        required: 'Height is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="Less than 4'5'">Less than 4'5'</option>
                            <option value="5'">5'</option>
                            <option value="6'">6'</option>
                        </optgroup>
                    </select>
                    {errors.Height && <span>This field is required</span>}

                    <label className="label"> <span className="label-text">Complexion</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                    {...register("Complexion", {
                        required: 'Complexion is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="Black">Black</option>
                            <option value="Brown">Brown</option>
                            <option value="Light Brown">Light Brown</option>
                            <option value="Fair">Fair</option>
                            <option value="Very Fair">Very Fair</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">Weight</span> </label>
                    <input type='number'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        // {...register("name", {
                        //     required: 'Name is required'
                        // })}
                        {...register("Weight", {
                            required: 'Weight is required'
                        })}
                        placeholder='Your Weight'
                    />

                    <label className="label"> <span className="label-text">Blood Group</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' 
                    {...register("BloodGroup", {
                        required: 'Blood Group is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="Don't know">Don't know</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">Nationality</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' 
                    {...register("Nationality", {
                        required: 'Nationality is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="Bangladeshi">Bangladeshi</option>
                        </optgroup>
                    </select>
                </div>
            </form>

        </div>
    );
};

export default GeneralInfo;
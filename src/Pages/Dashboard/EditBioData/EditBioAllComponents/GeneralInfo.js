import React from 'react';

const GeneralInfo = ({register, errors, setGender, bioData}) => {

    return (
        <div className='mb-6 '>
            <h2 className='text-3xl font-semibold text-center mb-4'>General Information</h2>
            <hr />
            <form className='flex justify-center items-center'>
                <div>
                    <label className="label"> <span className="label-text">Biodata Type</span> </label>
                    <select onChange={(e)=>setGender(e.target.value)} name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                    required>
                        <optgroup label="Please choose an option">
                            <option selected={!bioData?.gender && true} disabled value="">Select</option>
                            <option selected={bioData?.gender === "male" && true} value="male">Male's Biodata</option>
                            <option selected={bioData?.gender === "female" && true} value="female">Female's Biodata</option>
                        </optgroup>
                    </select>

                    {/* Marital Status */}
                    <label className="label"> <span className="label-text">Marital Status</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                    {...register("MaritalStatus", {
                        required: 'Marital Status is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected={!bioData?.MaritalStatus && true} disabled value="">Select</option>
                            <option selected={bioData?.MaritalStatus === "Never Married" && true} value="Never Married">Never Married</option>
                            <option selected={bioData?.MaritalStatus === "Married" && true} value="Married">Married</option>
                            <option selected={bioData?.MaritalStatus === "Divorced" && true} value="Divorced">Divorced</option>
                            <option selected={bioData?.MaritalStatus === "Widow" && true} value="Widow">Widow</option>
                            <option selected={bioData?.MaritalStatus === "Widower" && true} value="Widower">Widower</option>
                        </optgroup>
                    </select>

                    {/* Birthday */}
                    <label className="label"> <span className="label-text">Birthday</span> </label>
                    <input value={bioData?.Birthday} type='date'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("Birthday", {
                            required: 'Birthday is required'
                        })}
                        placeholder='Please enter your area name' 
                    />
                    {errors.Birthday && <span>This field is required</span>}
                    <label className="label w-full max-w-xs"><span className="label-text"> <span className='text-red-500'>Note:</span> Please provide your real birth date. If there is a fabricated birth date in NID or birth registration, do not provide it.</span></label>
                    
                    {/* Height */}
                    <label className="label"> <span className="label-text">Height</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                    {...register("Height", {
                        required: 'Height is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected={!bioData?.Height && true} disabled value="">Select</option>
                            <option selected={bioData?.Height === "Less than 4'5'" && true} value="Less than 4'5'">Less than 4'5'</option>
                            <option selected={bioData?.Height === "5'" && true} value="5'">5'</option>
                            <option selected={bioData?.Height === "6'" && true} value="6'">6'</option>
                        </optgroup>
                    </select>
                    {errors.Height && <span>This field is required</span>}

                    {/* Complexion */}
                    <label className="label"> <span className="label-text">Complexion</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                    {...register("Complexion", {
                        required: 'Complexion is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected={!bioData?.Complexion && true} disabled value="">Select</option>
                            <option selected={bioData?.Complexion === "Black" && true} value="Black">Black</option>
                            <option selected={bioData?.Complexion === "Brown" && true} value="Brown">Brown</option>
                            <option selected={bioData?.Complexion === "Light" && true} value="Light Brown">Light Brown</option>
                            <option selected={bioData?.Complexion === "Fair" && true} value="Fair">Fair</option>
                            <option selected={bioData?.Complexion === "Very Fair" && true} value="Very Fair">Very Fair</option>
                        </optgroup>
                    </select>

                    {/* Weight */}
                    <label className="label"> <span className="label-text">Weight</span> </label>
                    <input value={bioData?.Weight} type='number'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("Weight", {
                            required: 'Weight is required'
                        })}
                        placeholder='Your Weight'
                    />

                    {/* Blood */}
                    <label className="label"> <span className="label-text">Blood Group</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' 
                    {...register("BloodGroup", {
                        required: 'Blood Group is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected={!bioData?.BloodGroup && true} disabled value="">Select</option>
                            <option selected={bioData?.BloodGroup === "A+" && true} value="A+">A+</option>
                            <option selected={bioData?.BloodGroup === "A-" && true} value="A-">A-</option>
                            <option selected={bioData?.BloodGroup === "B+" && true} value="B+">B+</option>
                            <option selected={bioData?.BloodGroup === "B-" && true} value="B-">B-</option>
                            <option selected={bioData?.BloodGroup === "AB+" && true} value="AB+">AB+</option>
                            <option selected={bioData?.BloodGroup === "AB-" && true} value="AB-">AB-</option>
                            <option selected={bioData?.BloodGroup === "O+" && true} value="O+">O+</option>
                            <option selected={bioData?.BloodGroup === "O-" && true} value="O-">O-</option>
                            <option selected={bioData?.BloodGroup === "Don't know" && true} value="Don't know">Don't know</option>
                        </optgroup>
                    </select>

                    {/* Nationality */}
                    <label className="label"> <span className="label-text">Nationality</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' 
                    {...register("Nationality", {
                        required: 'Nationality is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected={!bioData?.Nationality && true} disabled value="">Select</option>
                            <option selected={bioData?.Nationality === "Bangladeshi" && true} value="Bangladeshi">Bangladeshi</option>
                        </optgroup>
                    </select>
                </div>
            </form>

        </div>
    );
};

export default GeneralInfo;
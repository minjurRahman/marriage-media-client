import React from 'react';

const FamilyInfo = ({register, errors, setGender}) => {
    return (
        <div className='mb-6 '>
            <h2 className='text-3xl font-semibold text-center mb-4'>Family Information</h2>
            <hr />
            <form className='flex justify-center items-center'>
                <div>
                    <label className="label"> <span className="label-text">Father's Name</span> </label>
                    <input type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("FatherName", {
                            required: "Father's Name is required"
                        })}
                        placeholder='Name'
                    />
                    <label className="label w-full max-w-xs"><span className="label-text"> <span className='text-red-500'>Note:</span> Only for authority.</span></label>

                    <label className="label"> <span className="label-text">Is your father alive? </span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' 
                    {...register("FatherAlive", {
                        required: "This field is required"
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="Yes, alive">Yes, alive</option>
                            <option value="Not alive">Not alive</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">Description of father's profession</span> </label>
                    <input type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("FatherProfession", {
                            required: 'This field is required'
                        })}
                        placeholder='Profession'
                    />
                    <label className="label w-full max-w-xs"><span className="label-text"> <span className='text-red-500'>Note:</span> If he is an employee, write the type of organization and title, and if he is a businessman, what kind of business he does etc.</span></label>

                    <label className="label"> <span className="label-text">Mother's Name</span> </label>
                    <input type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("MotherName", {
                            required: "Mother's name is required"
                        })}
                        placeholder='Name'
                    />
                    <label className="label w-full max-w-xs"><span className="label-text"> <span className='text-red-500'>Note:</span> Only for authority.</span></label>

                    <label className="label"> <span className="label-text">Is your mother alive? </span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' 
                    {...register("MotherAlive", {
                        required: "This field is required"
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="Yes, alive">Yes, alive</option>
                            <option value="Not alive">Not alive</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">Description of mother's profession</span> </label>
                    <input type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("MotherProfession", {
                            required: 'This field is required'
                        })}
                        placeholder='Profession'
                    />

                    <label className="label"> <span className="label-text">How many brothers do you have?</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' 
                    {...register("BrotherNumber", {
                        required: 'This field is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">Brothers information</span> </label>
                    <textarea placeholder="Write here" className="textarea textarea-bordered textarea-lg border-double rounded-md w-full max-w-xs" 
                    {...register("BrothersInfoDetails", {
                        required: 'Brothers information is required'
                    })}
                    ></textarea>
                    <label className="label w-full max-w-xs"><span className="label-text"> <span className='text-red-500'>Note:</span> Write down educational qualifications, marital status, and occupation. If you have more than one brother, write in a separate line with a comma.</span></label>

                    <label className="label"> <span className="label-text">How many sisters do you have?</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' 
                    {...register("SisterNumber", {
                        required: 'This field is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">Sisters information</span> </label>
                    <textarea placeholder="Write here" className="textarea textarea-bordered textarea-lg border-double rounded-md w-full max-w-xs" 
                    {...register("SistersInfoDetails", {
                        required: 'Sisters information is required'
                    })}
                    ></textarea>
                    <label className="label w-full max-w-xs"><span className="label-text"> <span className='text-red-500'>Note:</span> Write down educational qualifications, marital status, and occupation. If you have more than one sister, write in a separate line with a comma.</span></label>

                    <label className="label"> <span className="label-text">Family financial status</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' 
                    {...register("FamilyStatus", {
                        required: 'Family financial status is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                        <option selected disabled value="">Select</option>
                            <option value="Upper class">Upper class</option>
                            <option value="Upper middle class">Upper middle class</option>
                            <option value="Middle class">Middle class</option>
                            <option value="Lower middle class">Lower middle class</option>
                            <option value="Lower class">Lower class</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">How is your family's religious condition?</span> </label>
                    <textarea placeholder="Write here" className="textarea textarea-bordered textarea-lg border-double rounded-md w-full max-w-xs" 
                    {...register("FamilyReligiousCondition", {
                        required: "family's religious condition is required"
                    })}
                    ></textarea>

                </div>
            </form>

        </div>
    );
};

export default FamilyInfo;
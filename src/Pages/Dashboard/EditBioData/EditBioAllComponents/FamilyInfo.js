import React from 'react';

const FamilyInfo = ({ register, errors, setGender, bioData }) => {
    return (
        <div className='mb-6 '>
            <h2 className='text-3xl font-semibold text-center mb-4'>Family Information</h2>
            <hr />
            <form className='flex justify-center items-center'>
                <div>
        {/* Father's Name */}
                    <label className="label"> <span className="label-text">Father's Name</span> </label>
                    <input value={bioData?.FatherName} type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("FatherName", {
                            required: "Father's Name is required"
                        })}
                        placeholder='Name'
                    />
                    <label className="label w-full max-w-xs"><span className="label-text"> <span className='text-red-500'>Note:</span> Only for authority.</span></label>

        {/* Father Alive */}
                    <label className="label"> <span className="label-text">Is your father alive? </span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("FatherAlive", {
                            required: "This field is required"
                        })}
                        required>
                        <optgroup label="Please choose an option">
                            <option selected={!bioData?.FatherAlive && true} disabled value="">Select</option>
                            <option selected={bioData?.FatherAlive === "Yes, alive" && true} value="Yes, alive">Yes, alive</option>
                            <option selected={bioData?.FatherAlive === "Not alive" && true} value="Not alive">Not alive</option>
                        </optgroup>
                    </select>

         {/* Father Profession */}
                    <label className="label"> <span className="label-text">Description of father's profession</span> </label>
                    <input value={bioData?.FatherProfession} type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("FatherProfession", {
                            required: 'This field is required'
                        })}
                        placeholder='Profession'
                    />
                    <label className="label w-full max-w-xs"><span className="label-text"> <span className='text-red-500'>Note:</span> If he is an employee, write the type of organization and title, and if he is a businessman, what kind of business he does etc.</span></label>

        {/* Mother's Name */}
                    <label className="label"> <span className="label-text">Mother's Name</span> </label>
                    <input value={bioData?.MotherName} type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("MotherName", {
                            required: "Mother's name is required"
                        })}
                        placeholder='Name'
                    />
                    <label className="label w-full max-w-xs"><span className="label-text"> <span className='text-red-500'>Note:</span> Only for authority.</span></label>

        {/* Mother Alive */}
                    <label className="label"> <span className="label-text">Is your mother alive? </span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("MotherAlive", {
                            required: "This field is required"
                        })}
                        required>
                        <optgroup label="Please choose an option">
                            <option selected={!bioData?.MotherAlive && true} disabled value="">Select</option>
                            <option selected={bioData?.MotherAlive === "Yes, alive" && true} value="Yes, alive">Yes, alive</option>
                            <option selected={bioData?.MotherAlive === "Not alive" && true} value="Not alive">Not alive</option>
                        </optgroup>
                    </select>

         {/* Mother Profession */}
                    <label className="label"> <span className="label-text">Description of mother's profession</span> </label>
                    <input value={bioData?.MotherProfession} type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("MotherProfession", {
                            required: 'This field is required'
                        })}
                        placeholder='Profession'
                    />

        {/* Brother Number */}
                    <label className="label"> <span className="label-text">How many brothers do you have?</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("BrotherNumber", {
                            required: 'This field is required'
                        })}
                        required>
                        <optgroup label="Please choose an option">
                            <option selected={!bioData?.BrotherNumber && true} disabled value="">Select</option>
                            <option selected={bioData?.BrotherNumber === "1" && true} value="1">1</option>
                            <option selected={bioData?.BrotherNumber === "2" && true} value="2">2</option>
                            <option selected={bioData?.BrotherNumber === "3" && true} value="3">3</option>
                            <option selected={bioData?.BrotherNumber === "4" && true} value="4">4</option>
                            <option selected={bioData?.BrotherNumber === "5" && true} value="5">5</option>
                            <option selected={bioData?.BrotherNumber === "6" && true} value="6">6</option>
                            <option selected={bioData?.BrotherNumber === "7" && true} value="7">7</option>
                            <option selected={bioData?.BrotherNumber === "8" && true} value="8">8</option>
                        </optgroup>
                    </select>

        {/* Brothers information */}
                    <label className="label"> <span className="label-text">Brothers information</span> </label>
                    <textarea value={bioData?.BrothersInfoDetails} placeholder="Write here" className="textarea textarea-bordered textarea-lg border-double rounded-md w-full max-w-xs"
                        {...register("BrothersInfoDetails", {
                            required: 'Brothers information is required'
                        })}
                    ></textarea>
                    <label className="label w-full max-w-xs"><span className="label-text"> <span className='text-red-500'>Note:</span> Write down educational qualifications, marital status, and occupation. If you have more than one brother, write in a separate line with a comma.</span></label>

        {/* Sister Number */}
                    <label className="label"> <span className="label-text">How many sisters do you have?</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("SisterNumber", {
                            required: 'This field is required'
                        })}
                        required>
                        <optgroup label="Please choose an option">
                        <option selected={!bioData?.SisterNumber && true} disabled value="">Select</option>
                            <option selected={bioData?.SisterNumber === "1" && true} value="1">1</option>
                            <option selected={bioData?.SisterNumber === "2" && true} value="2">2</option>
                            <option selected={bioData?.SisterNumber === "3" && true} value="3">3</option>
                            <option selected={bioData?.SisterNumber === "4" && true} value="4">4</option>
                            <option selected={bioData?.SisterNumber === "5" && true} value="5">5</option>
                            <option selected={bioData?.SisterNumber === "6" && true} value="6">6</option>
                            <option selected={bioData?.SisterNumber === "7" && true} value="7">7</option>
                            <option selected={bioData?.SisterNumber === "8" && true} value="8">8</option>
                        </optgroup>
                    </select>

        {/* Sisters information */}
                    <label className="label"> <span className="label-text">Sisters information</span> </label>
                    <textarea value={bioData?.SistersInfoDetails} placeholder="Write here" className="textarea textarea-bordered textarea-lg border-double rounded-md w-full max-w-xs"
                        {...register("SistersInfoDetails", {
                            required: 'Sisters information is required'
                        })}
                    ></textarea>
                    <label className="label w-full max-w-xs"><span className="label-text"> <span className='text-red-500'>Note:</span> Write down educational qualifications, marital status, and occupation. If you have more than one sister, write in a separate line with a comma.</span></label>

        {/* Financial status */}
                    <label className="label"> <span className="label-text">Family financial status</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("FamilyStatus", {
                            required: 'Family financial status is required'
                        })}
                        required>
                        <optgroup label="Please choose an option">
                            <option selected={!bioData?.FamilyStatus && true} disabled value="">Select</option>
                            <option selected={bioData?.FamilyStatus === "Upper class" && true} value="Upper class">Upper class</option>
                            <option selected={bioData?.FamilyStatus === "Upper middle class" && true} value="Upper middle class">Upper middle class</option>
                            <option selected={bioData?.FamilyStatus === "Middle class" && true} value="Middle class">Middle class</option>
                            <option selected={bioData?.FamilyStatus === "Lower middle class" && true} value="Lower middle class">Lower middle class</option>
                            <option selected={bioData?.FamilyStatus === "Lower class" && true} value="Lower class">Lower class</option>
                        </optgroup>
                    </select>
                        
                    <label className="label"> <span className="label-text">How is your family's religious condition?</span> </label>
                    <textarea value={bioData?.FamilyReligiousCondition} placeholder="Write here" className="textarea textarea-bordered textarea-lg border-double rounded-md w-full max-w-xs"
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
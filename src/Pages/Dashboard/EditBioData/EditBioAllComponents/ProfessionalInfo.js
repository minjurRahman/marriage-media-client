import React from 'react';

const ProfessionalInfo = ({ register, errors, bioData }) => {
    return (
        <div className='mb-6 '>
            <h2 className='text-3xl font-semibold text-center mb-4'>Professional Information</h2>
            <hr />
            <form className='flex justify-center items-center'>
                <div>
                    {/* Occupation */}
                    <label className="label"> <span className="label-text">Occupation</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("Occupation", {
                            required: 'This field is required'
                        })}
                        required>
                        <optgroup label="Please choose an option">
                            <option selected={!bioData?.Occupation && true} disabled value="">Select</option>
                            <option selected={bioData?.Occupation === "Imam" && true} value="Imam">Imam</option>
                            <option selected={bioData?.Occupation === "Madrasa Teacher" && true} value="Madrasa Teacher">Madrasa Teacher</option>
                            <option selected={bioData?.Occupation === "Teacher" && true} value="Teacher">Teacher</option>
                            <option selected={bioData?.Occupation === "Doctor" && true} value="Doctor">Doctor</option>
                            <option selected={bioData?.Occupation === "Engineer" && true} value="Engineer">Engineer</option>
                            <option selected={bioData?.Occupation === "Businessman" && true} value="Businessman">Businessman</option>
                            <option selected={bioData?.Occupation === "Private Job" && true} value="Private Job">Private Job</option>
                            <option selected={bioData?.Occupation === "Freelancer" && true} value="Freelancer">Freelancer</option>
                            <option selected={bioData?.Occupation === "Student" && true} value="Student">Student</option>
                            <option selected={bioData?.Occupation === "Expatriate" && true} value="Expatriate">Expatriate</option>
                            <option selected={bioData?.Occupation === "Farmers" && true} value="Farmers">Farmers</option>
                            <option selected={bioData?.Occupation === "Others" && true} value="Others">Others</option>
                            <option selected={bioData?.Occupation === "No Profession" && true} value="No Profession">No Profession</option>
                        </optgroup>
                    </select>

                    {/* Description of Profession */}
                    <label className="label"> <span className="label-text">Description of Profession</span> </label>
                    <textarea value={bioData?.OccupationDescription} placeholder="Write here" className="h-32 textarea textarea-bordered textarea-lg border-double rounded-md w-full max-w-xs"
                        {...register("OccupationDescription", {
                            required: 'This field is required'
                        })}
                    ></textarea>
                    <label className="label w-full max-w-xs"><span className="label-text"> <span className='text-red-500'>Note:</span> You may write where your working place is, which company you are working in, whether your earnings are halal or not, etc.</span></label>

                    {/* Income */}
                    <label className="label"> <span className="label-text">Monthly income</span> </label>
                    <input value={bioData?.Income} type='number'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("Income", {
                            required: 'This field is required'
                        })}
                        placeholder='Write here'
                    />
                </div>
            </form>
        </div>
    );
};

export default ProfessionalInfo;
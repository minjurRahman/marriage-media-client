import React from 'react';

const ProfessionalInfo = ({ register, errors }) => {
    return (
        <div className='mb-6 '>
            <h2 className='text-3xl font-semibold text-center mb-4'>Professional Information</h2>
            <hr />
            <form className='flex justify-center items-center'>
                <div>
                    <label className="label"> <span className="label-text">Occupation</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' 
                    {...register("Occupation", {
                        required: 'This field is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="Imam">Imam</option>
                            <option value="Madrasa Teacher">Madrasa Teacher</option>
                            <option value="Teacher">Teacher</option>
                            <option value="Doctor">Doctor</option>
                            <option value="Engineer">Engineer</option>
                            <option value="Businessman">Businessman</option>
                            <option value="Private Job">Private Job</option>
                            <option value="Freelancer">Freelancer</option>
                            <option value="Student">Student</option>
                            <option value="Expatriate">Expatriate</option>
                            <option value="Farmers">Farmers</option>
                            <option value="Others">Others</option>
                            <option value="No Profession">No Profession</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">Description of Profession</span> </label>
                    <textarea placeholder="Write here" className="textarea textarea-bordered textarea-lg border-double rounded-md w-full max-w-xs" 
                    {...register("OccupationDescription", {
                        required: 'This field is required'
                    })}
                    ></textarea>
                    <label className="label w-full max-w-xs"><span className="label-text"> <span className='text-red-500'>Note:</span> You may write where your working place is, which company you are working in, whether your earnings are halal or not, etc.</span></label>
                    
                    <label className="label"> <span className="label-text">Monthly income</span> </label>
                    <input type='number'
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
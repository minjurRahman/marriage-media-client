import React from 'react';

const EducationalInfo = ({register, errors, setGender}) => {
    return (
        <div className='mb-6 '>
            <h2 className='text-3xl font-semibold text-center mb-4'>Educational Qualifications</h2>
            <hr />
            <form className='flex justify-center items-center'>
                <div>
                    <label className="label"> <span className="label-text">Your Education Method</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' 
                    {...register("EducationMethod", {
                        required: 'Education Method is required'
                    })}
                    >
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="General">General</option>
                            <option value="Qawmi">Qawmi</option>
                            <option value="Alia">Alia</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">Highest educational qualification</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' 
                    {...register("HighestEducationalQualification", {
                        required: 'Highest educational qualification is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="Below SSC">Below SSC</option>
                            <option value="SSC">SSC</option>
                            <option value="HSC">HSC</option>
                            <option value="Diploma Running">Diploma Running</option>
                            <option value="Diploma">Diploma</option>
                            <option value="Undergraduate">Undergraduate</option>
                            <option value="Graduate">Graduate</option>
                            <option value="Post Graduate">Post Graduate</option>
                            <option value="Doctorate">Doctorate</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">SSC / Dakhil / Equivalent Passing year </span> </label>
                    <input type='number'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("SSCDakhilYear", {
                            required: 'SSC / Dakhil / Equivalent Passing year is required'
                        })}
                        placeholder='2011'
                    />

                    <label className="label"> <span className="label-text">Group</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' 
                    {...register("SSCDakhilGroup", {
                        required: 'SSC / Dakhil Group is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="Science">Science</option>
                            <option value="Commerce">Commerce</option>
                            <option value="Arts">Arts</option>
                            <option value="Vocational">Vocational</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">Result</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' 
                    {...register("SSCDakhilResult", {
                        required: 'SSC / Dakhil Result is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="A+ (All Subjects)">A+ (All Subjects)</option>
                            <option value="A+">A+</option>
                            <option value="A">A</option>
                            <option value="A-">A-</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">What medium did you study after SSC?</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' 
                    {...register("MediumAfterSSCDakhil", {
                        required: 'Medium After SSC / Dakhil is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="HSC">HSC</option>
                            <option value="Diploma">Diploma</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">HSC / Alim / Equivalent passing year </span> </label>
                    <input type='number'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("HSCAlimYear", {
                            required: 'HSC / Alim passing year is required'
                        })}
                        placeholder='2013'
                    />

                    <label className="label"> <span className="label-text">Group </span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' 
                    {...register("HSCAlimGroup", {
                        required: 'HSC / Alim group year is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="Science">Science</option>
                            <option value="Commerce">Commerce</option>
                            <option value="Arts">Arts</option>
                            <option value="Vocational">Vocational</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">Result</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' 
                    {...register("HSCAlimResult", {
                        required: 'HSC / Alim result is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="A+ (All Subjects)">A+ (All Subjects)</option>
                            <option value="A+">A+</option>
                            <option value="A">A</option>
                            <option value="A-">A-</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">Graduation study subject</span> </label>
                    <input type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("GraduationSubject", {
                            required: 'Graduation subject is required'
                        })}
                        placeholder='Name of subject'
                    />

                    <label className="label"> <span className="label-text">Name of educational institution</span> </label>
                    <input type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("InstitutionUniversityName", {
                            required: 'Institution / University name is required'
                        })}
                        placeholder='Institution/ University'
                    />

                    <label className="label"> <span className="label-text">Passing year</span> </label>
                    <input type='number'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("GraduationYear", {
                            required: 'Graduation year is required'
                        })}
                        placeholder='2018'
                    />

                    <label className="label"> <span className="label-text">Other educational qualifications</span> </label>
                    <textarea placeholder="Write here" className="textarea textarea-bordered textarea-lg border-double rounded-md w-full max-w-xs" 
                    {...register("OtherEducation",
                    )}
                    ></textarea>
                    <label className="label w-full max-w-xs"><span className="label-text"> <span className='text-red-500'>Note:</span> Write the details including the name of the educational institution, subject, passing year. If there is nothing, leave it empty.</span></label>                    
                </div>
            </form>

        </div>
    );
};

export default EducationalInfo;
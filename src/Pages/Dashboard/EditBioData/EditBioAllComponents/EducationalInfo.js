import React from 'react';

const EducationalInfo = ({register, errors, setGender, bioData}) => {
    return (
        <div className='mb-6 '>
            <h2 className='text-3xl font-semibold text-center mb-4'>Educational Qualifications</h2>
            <hr />
            <form className='flex justify-center items-center'>
                <div>
                    {/* Education Method */}
                    <label className="label"> <span className="label-text">Your Education Method</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' 
                    {...register("EducationMethod", {
                        required: 'Education Method is required'
                    })}
                    >
                        <optgroup label="Please choose an option">
                            <option selected={!bioData?.EducationMethod && true} disabled value="">Select</option>
                            <option selected={bioData?.EducationMethod === "General" && true} value="General">General</option>
                            <option selected={bioData?.EducationMethod === "Qawmi" && true} value="Qawmi">Qawmi</option>
                            <option selected={bioData?.EducationMethod === "Alia" && true} value="Alia">Alia</option>
                        </optgroup>
                    </select>

                    {/* Highest Education */}
                    <label className="label"> <span className="label-text">Highest educational qualification</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' 
                    {...register("HighestEducationalQualification", {
                        required: 'Highest educational qualification is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected={!bioData?.HighestEducationalQualification && true} disabled value="">Select</option>
                            <option selected={bioData?.HighestEducationalQualification === "Below SSC" && true} value="Below SSC">Below SSC</option>
                            <option selected={bioData?.HighestEducationalQualification === "SSC" && true} value="SSC">SSC</option>
                            <option selected={bioData?.HighestEducationalQualification === "HSC" && true} value="HSC">HSC</option>
                            <option selected={bioData?.HighestEducationalQualification === "Diploma Running" && true} value="Diploma Running">Diploma Running</option>
                            <option selected={bioData?.HighestEducationalQualification === "Diploma" && true} value="Diploma">Diploma</option>
                            <option selected={bioData?.HighestEducationalQualification === "Undergraduate" && true} value="Undergraduate">Undergraduate</option>
                            <option selected={bioData?.HighestEducationalQualification === "Graduate" && true} value="Graduate">Graduate</option>
                            <option selected={bioData?.HighestEducationalQualification === "Post Graduate" && true} value="Post Graduate">Post Graduate</option>
                            <option selected={bioData?.HighestEducationalQualification === "Doctorate" && true} value="Doctorate">Doctorate</option>
                        </optgroup>
                    </select>

                    {/* SSC/ Dakhil Year */}
                    <label className="label"> <span className="label-text">SSC / Dakhil / Equivalent Passing year </span> </label>
                    <input value={bioData?.SSCDakhilYear} type='number'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("SSCDakhilYear", {
                            required: 'SSC / Dakhil / Equivalent Passing year is required'
                        })}
                        placeholder='2011'
                    />

                    {/* SSC/Dakhil group */}
                    <label className="label"> <span className="label-text">Group</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' 
                    {...register("SSCDakhilGroup", {
                        required: 'SSC / Dakhil Group is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected={!bioData?.SSCDakhilGroup && true} disabled value="">Select</option>
                            <option selected={bioData?.SSCDakhilGroup === "Science" && true} value="Science">Science</option>
                            <option selected={bioData?.SSCDakhilGroup === "Commerce" && true} value="Commerce">Commerce</option>
                            <option selected={bioData?.SSCDakhilGroup === "Arts" && true} value="Arts">Arts</option>
                            <option selected={bioData?.SSCDakhilGroup === "Vocational" && true} value="Vocational">Vocational</option>
                        </optgroup>
                    </select>

                    {/* SSC / Dakhil Result */}
                    <label className="label"> <span className="label-text">Result</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' 
                    {...register("SSCDakhilResult", {
                        required: 'SSC / Dakhil Result is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected={!bioData?.SSCDakhilResult && true} disabled value="">Select</option>
                            <option selected={bioData?.SSCDakhilResult === "A+ (All Subjects)" && true} value="A+ (All Subjects)">A+ (All Subjects)</option>
                            <option selected={bioData?.SSCDakhilResult === "A+" && true} value="A+">A+</option>
                            <option selected={bioData?.SSCDakhilResult === "A" && true} value="A">A</option>
                            <option selected={bioData?.SSCDakhilResult === "A-" && true} value="A-">A-</option>
                            <option selected={bioData?.SSCDakhilResult === "B" && true} value="B">B</option>
                            <option selected={bioData?.SSCDakhilResult === "C" && true} value="C">C</option>
                            <option selected={bioData?.SSCDakhilResult === "D" && true} value="D">D</option>
                        </optgroup>
                    </select>

                    {/* After SSC / Dakhil */}
                    <label className="label"> <span className="label-text">What medium did you study after SSC?</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' 
                    {...register("MediumAfterSSCDakhil", {
                        required: 'Medium After SSC / Dakhil is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected={!bioData?.MediumAfterSSCDakhil && true} disabled value="">Select</option>
                            <option selected={bioData?.MediumAfterSSCDakhil === "HSC" && true} value="HSC">HSC</option>
                            <option selected={bioData?.MediumAfterSSCDakhil === "Diploma" && true} value="Diploma">Diploma</option>
                        </optgroup>
                    </select>

                    {/* HSC / Alim Year */}
                    <label className="label"> <span className="label-text">HSC / Alim / Equivalent passing year </span> </label>
                    <input value={bioData?.HSCAlimYear} type='number'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("HSCAlimYear", {
                            required: 'HSC / Alim passing year is required'
                        })}
                        placeholder='2013'
                    />

                    {/* HSC / Alim group */}
                    <label className="label"> <span className="label-text">Group </span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' 
                    {...register("HSCAlimGroup", {
                        required: 'HSC / Alim group year is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected={!bioData?.HSCAlimGroup && true} disabled value="">Select</option>
                            <option selected={bioData?.HSCAlimGroup === "Science" && true} value="Science">Science</option>
                            <option selected={bioData?.HSCAlimGroup === "Commerce" && true} value="Commerce">Commerce</option>
                            <option selected={bioData?.HSCAlimGroup === "Arts" && true} value="Arts">Arts</option>
                            <option selected={bioData?.HSCAlimGroup === "Vocational" && true} value="Vocational">Vocational</option>
                        </optgroup>
                    </select>

                    {/* HSC / Alim result */}
                    <label className="label"> <span className="label-text">Result</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' 
                    {...register("HSCAlimResult", {
                        required: 'HSC / Alim result is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected={!bioData?.HSCAlimResult && true} disabled value="">Select</option>
                            <option selected={bioData?.HSCAlimResult === "A+ (All Subjects)" && true} value="A+ (All Subjects)">A+ (All Subjects)</option>
                            <option selected={bioData?.HSCAlimResult === "A+" && true} value="A+">A+</option>
                            <option selected={bioData?.HSCAlimResult === "A" && true} value="A">A</option>
                            <option selected={bioData?.HSCAlimResult === "A-" && true} value="A-">A-</option>
                            <option selected={bioData?.HSCAlimResult === "B" && true} value="B">B</option>
                            <option selected={bioData?.HSCAlimResult === "C" && true} value="C">C</option>
                            <option selected={bioData?.HSCAlimResult === "D" && true} value="D">D</option>
                        </optgroup>
                    </select>

                    {/* Graduation subject */}
                    <label className="label"> <span className="label-text">Graduation study subject</span> </label>
                    <input value={bioData?.GraduationSubject} type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("GraduationSubject", {
                            required: 'Graduation subject is required'
                        })}
                        placeholder='Name of subject'
                    />

                    {/* Institution / University name */}
                    <label className="label"> <span className="label-text">Name of educational institution</span> </label>
                    <input value={bioData?.InstitutionUniversityName} type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("InstitutionUniversityName", {
                            required: 'Institution / University name is required'
                        })}
                        placeholder='Institution/ University'
                    />

                    {/* Graduation year */}
                    <label className="label"> <span className="label-text">Passing year</span> </label>
                    <input value={bioData?.GraduationYear} type='number'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("GraduationYear", {
                            required: 'Graduation year is required'
                        })}
                        placeholder='2018'
                    />

                    {/* Other Education */}
                    <label className="label"> <span className="label-text">Other educational qualifications</span> </label>
                    <textarea value={bioData?.OtherEducation} placeholder="Write here" className="textarea textarea-bordered textarea-lg border-double rounded-md w-full max-w-xs" 
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
import React from 'react';

const EducationalInfo = () => {
    return (
        <div className='mb-6 '>
            <h2 className='text-3xl font-semibold text-center mb-4'>Educational Qualifications</h2>
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

                    <label className="label"> <span className="label-text">Highest educational qualification</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' required>
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="">Below SSC</option>
                            <option value="">SSC</option>
                            <option value="">HSC</option>
                            <option value="">Diploma Running</option>
                            <option value="">Diploma</option>
                            <option value="">Undergraduate</option>
                            <option value="">Graduate</option>
                            <option value="">Post Graduate</option>
                            <option value="">Doctorate</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">SSC / Dakhil / Equivalent Passing year </span> </label>
                    <input type='number'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        // {...register("name", {
                        //     required: 'Name is required'
                        // })}
                        placeholder='2011'
                    />

                    <label className="label"> <span className="label-text">Group</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' required>
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="">Science</option>
                            <option value="">Commerce</option>
                            <option value="">Arts</option>
                            <option value="">Vocational</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">Result</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' required>
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="">A+ (All Subjects)</option>
                            <option value="">A+</option>
                            <option value="">A</option>
                            <option value="">A-</option>
                            <option value="">B</option>
                            <option value="">C</option>
                            <option value="">D</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">What medium did you study after SSC?</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' required>
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="">HSC</option>
                            <option value="">Diploma</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">HSC / Alim / Equivalent passing year </span> </label>
                    <input type='number'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        // {...register("name", {
                        //     required: 'Name is required'
                        // })}
                        placeholder='2013'
                    />

                    <label className="label"> <span className="label-text">Group </span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' required>
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="">Science</option>
                            <option value="">Commerce</option>
                            <option value="">Arts</option>
                            <option value="">Vocational</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">Result</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' required>
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="">A+ (All Subjects)</option>
                            <option value="">A+</option>
                            <option value="">A</option>
                            <option value="">A-</option>
                            <option value="">B</option>
                            <option value="">C</option>
                            <option value="">D</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">Graduation study subject</span> </label>
                    <input type='number'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        // {...register("name", {
                        //     required: 'Name is required'
                        // })}
                        placeholder='Name of subject'
                    />

                    <label className="label"> <span className="label-text">Name of educational institution</span> </label>
                    <input type='number'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        // {...register("name", {
                        //     required: 'Name is required'
                        // })}
                        placeholder='Institution/ University'
                    />

                    <label className="label"> <span className="label-text">Passing year</span> </label>
                    <input type='number'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        // {...register("name", {
                        //     required: 'Name is required'
                        // })}
                        placeholder='2018'
                    />

                    <label className="label"> <span className="label-text">Other educational qualifications</span> </label>
                    <textarea placeholder="Write here" className="textarea textarea-bordered textarea-lg border-double rounded-md w-full max-w-xs" ></textarea>
                    <label className="label w-full max-w-xs"><span className="label-text"> <span className='text-red-500'>Note:</span> Write the details including the name of the educational institution, subject, passing year. If there is nothing, leave it empty.</span></label>

                    
                </div>
            </form>

        </div>
    );
};

export default EducationalInfo;
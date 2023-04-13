import React from 'react';

const ExpectedLifePartnerInfo = ({ register, errors }) => {
    return (
        <div className='mb-6 '>
            <h2 className='text-3xl font-semibold text-center mb-4'>Expected Life Partner</h2>
            <hr />
            <form className='flex justify-center items-center'>
                <div>
                    <label className="label"> <span className="label-text">Age</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' 
                    {...register("ExpectedAge", {
                        required: 'Age is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="15 to 20">15 to 20</option>
                            <option value="21 to 25">21 to 25</option>
                            <option value="26 to 28">26 to 28</option>
                            <option value="29 to 32">29 to 32</option>
                            <option value="32 to 37">32 to 37</option>
                            <option value="38 or above">38 or above</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">Complexion</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' 
                    {...register("ExpectedComplexion", {
                        required: 'Complexion is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="Bright Brown">Bright Brown</option>
                            <option value="Fair">Fair</option>
                            <option value="Bright Fair">Bright Fair</option>
                            <option value="Dark">Dark</option>
                            <option value="Brown">Brown</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">Hight</span> </label>
                    <input type='number'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("ExpectedHight", {
                            required: 'Hight is required'
                        })}
                        placeholder='Please Write Here'
                    />

                    <label className="label"> <span className="label-text">Educational Qualification</span> </label>
                    <input type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("ExpectedEducationalQualifi", {
                            required: 'Educational Qualification is required'
                        })}
                        placeholder='Please Write Here'
                    />

                    <label className="label"> <span className="label-text">District</span> </label>
                    <input type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("ExpectedDistrict", {
                            required: 'District is required'
                        })}
                        placeholder='Please Write Here'
                    />

                    <label className="label"> <span className="label-text">Marital status</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' 
                    {...register("ExpectedPartnerType", {
                        required: 'Marital status is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected disabled value="">Select</option>
                            <option value="Never Married">Never Married</option>
                            <option value="Divorced">Divorced</option>
                            <option value="Widow">Widow</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">Profession</span> </label>
                    <input type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("ExpectedProfession", {
                            required: 'This field is required'
                        })}
                        placeholder='Please Write Here'
                    />

                    <label className="label"> <span className="label-text">Financial condition</span> </label>
                    <input type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("ExpectedFinancialCondition", {
                            required: 'This field is required'
                        })}
                        placeholder='Please Write Here'
                    />
                    
                    <label className="label"> <span className="label-text">Expected qualities or attributes of your life partner</span> </label>
                    <textarea placeholder="Write here" className="textarea textarea-bordered textarea-lg border-double rounded-md w-full max-w-xs" 
                    {...register("ExpectedPartnerQualities", {
                        required: 'This field is required'
                    })}
                    ></textarea>
                    <label className="label w-full max-w-xs"><span className="label-text"> <span className='text-red-500'>Note:</span> You may write your expectations in detail. Also, you may mention if there is any special condition.</span></label> 
                    
                </div>
            </form>

        </div>
    );
};

export default ExpectedLifePartnerInfo;
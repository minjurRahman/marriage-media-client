import React from 'react';

const ExpectedLifePartnerInfo = ({ register, errors, bioData }) => {
    return (
        <div className='mb-6 '>
            <h2 className='text-3xl font-semibold text-center mb-4'>Expected Life Partner</h2>
            <hr />
            <form className='flex justify-center items-center'>
                <div>
                    {/*Expected Age */}
                    <label className="label"> <span className="label-text">Age</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' 
                    {...register("ExpectedAge", {
                        required: 'Age is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected={!bioData?.ExpectedAge && true} disabled value="">Select</option>
                            <option selected={bioData?.ExpectedAge === "15 to 20" && true} value="15 to 20">15 to 20</option>
                            <option selected={bioData?.ExpectedAge === "21 to 25" && true} value="21 to 25">21 to 25</option>
                            <option selected={bioData?.ExpectedAge === "26 to 28" && true} value="26 to 28">26 to 28</option>
                            <option selected={bioData?.ExpectedAge === "29 to 32" && true} value="29 to 32">29 to 32</option>
                            <option selected={bioData?.ExpectedAge === "32 to 37" && true} value="32 to 37">32 to 37</option>
                            <option selected={bioData?.ExpectedAge === "38 or above" && true} value="38 or above">38 or above</option>
                        </optgroup>
                    </select>

                    {/* Expected Complexion */}
                    <label className="label"> <span className="label-text">Complexion</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' 
                    {...register("ExpectedComplexion", {
                        required: 'Complexion is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected={!bioData?.ExpectedComplexion && true} disabled value="">Select</option>
                            <option selected={bioData?.ExpectedComplexion === "Bright Brown" && true} value="Bright Brown">Bright Brown</option>
                            <option selected={bioData?.ExpectedComplexion === "Fair" && true} value="Fair">Fair</option>
                            <option selected={bioData?.ExpectedComplexion === "Bright Fair" && true} value="Bright Fair">Bright Fair</option>
                            <option selected={bioData?.ExpectedComplexion === "Dark" && true} value="Dark">Dark</option>
                            <option selected={bioData?.ExpectedComplexion === "Brown" && true} value="Brown">Brown</option>
                        </optgroup>
                    </select>

                    {/* Expected Hight */}
                    <label className="label"> <span className="label-text">Hight</span> </label>
                    <input value={bioData?.ExpectedHight} type='number'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("ExpectedHight", {
                            required: 'Hight is required'
                        })}
                        placeholder='Please Write Here'
                    />

                    {/* Educational Qualification */}
                    <label className="label"> <span className="label-text">Educational Qualification</span> </label>
                    <input value={bioData?.ExpectedEducationalQualifi} type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("ExpectedEducationalQualifi", {
                            required: 'Educational Qualification is required'
                        })}
                        placeholder='Please Write Here'
                    />

                    {/* Expected District */}
                    <label className="label"> <span className="label-text">District</span> </label>
                    <input value={bioData?.ExpectedDistrict} type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("ExpectedDistrict", {
                            required: 'District is required'
                        })}
                        placeholder='Please Write Here'
                    />

                    {/* Expected Partner Type */}
                    <label className="label"> <span className="label-text">Marital status</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' 
                    {...register("ExpectedPartnerType", {
                        required: 'Marital status is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected={!bioData?.ExpectedPartnerType && true} disabled value="">Select</option>
                            <option selected={bioData?.ExpectedPartnerType === "Never Married" && true} value="Never Married">Never Married</option>
                            <option selected={bioData?.ExpectedPartnerType === "Divorced" && true} value="Divorced">Divorced</option>
                            <option selected={bioData?.ExpectedPartnerType === "Widow" && true} value="Widow">Widow</option>
                        </optgroup>
                    </select>

                    {/* Expected Profession */}
                    <label className="label"> <span className="label-text">Profession</span> </label>
                    <input value={bioData?.ExpectedProfession} type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("ExpectedProfession", {
                            required: 'This field is required'
                        })}
                        placeholder='Please Write Here'
                    />

                    {/* Expected Financial Condition */}
                    <label className="label"> <span className="label-text">Financial condition</span> </label>
                    <input value={bioData?.ExpectedFinancialCondition} type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("ExpectedFinancialCondition", {
                            required: 'This field is required'
                        })}
                        placeholder='Please Write Here'
                    />
                    
                    {/* Expected Partner Qualities */}
                    <label className="label"> <span className="label-text">Expected qualities or attributes of your life partner</span> </label>
                    <textarea value={bioData?.ExpectedPartnerQualities} placeholder="Write here" className="h-32 textarea textarea-bordered textarea-lg border-double rounded-md w-full max-w-xs" 
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
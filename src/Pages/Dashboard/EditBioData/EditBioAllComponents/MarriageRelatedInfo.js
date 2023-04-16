import React from 'react';

const MarriageRelatedInfo = ({ register, errors, bioData }) => {
    return (
        <div className='mb-6 '>
            <h2 className='text-3xl font-semibold text-center mb-4'>Marriage Related Information</h2>
            <hr />
            <form className='flex justify-center items-center'>
                <div>
                    {/* Why Second Married */}
                    <label className="label"> <span className="label-text">Why do you want to get married again when you are married?</span> </label>
                    <textarea value={bioData?.WhySecondMarried} placeholder="Write here" className="textarea textarea-bordered textarea-lg border-double rounded-md w-full max-w-xs" 
                    {...register("WhySecondMarried", {
                        required: 'This field is required'
                    })}
                    ></textarea>
                    <label className="label w-full max-w-xs"><span className="label-text"> <span className='text-red-500'>Note:</span> Write details whether the present wife has consent to your new marriage and other matters.</span></label>  

                    {/* Wifes Details */}
                    <label className="label"> <span className="label-text">How many wives and children do you have at present?</span> </label>
                    <textarea value={bioData?.WifeChildrenNumber} placeholder="Write here" className="textarea textarea-bordered textarea-lg border-double rounded-md w-full max-w-xs" 
                    {...register("WifeChildrenNumber", {
                        required: 'Name is required'
                    })}
                    ></textarea>

                    {/* Guardians Agree */}
                    <label className="label"> <span className="label-text">Do your guardians agree to your marriage?</span> </label>
                    <input value={bioData?.GuardiansAgree} type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("GuardiansAgree", {
                            required: 'This field is required'
                        })}
                        placeholder='Please Write Here'
                    />
                    
                    {/* After Marriage Allow Study */}
                    <label className="label"> <span className="label-text">Would you like to allow your wife to study after marriage?</span> </label>
                    <input value={bioData?.AfterMarriageAllowStudy} type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("AfterMarriageAllowStudy", {
                            required: 'This field is required'
                        })}
                        placeholder='Please Write Here'
                    />

                    {/* After Marriage Allow Job */}
                    <label className="label"> <span className="label-text">Would you like to allow your wife to do any job after marriage?</span> </label>
                    <input value={bioData?.AfterMarriageAllowJob} type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("AfterMarriageAllowJob", {
                            required: 'This field is required'
                        })}
                        placeholder='Please Write Here'
                    />

                    {/* After Marriage Live */}
                    <label className="label"> <span className="label-text">Where will you live with your wife after marriage?</span> </label>
                    <input value={bioData?.AfterMarriageLive} type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("AfterMarriageLive", {
                            required: 'This field is required'
                        })}
                        placeholder='Please Write Here'
                    />

                    {/* Joutuk */}
                    <label className="label"> <span className="label-text">Would you or your family expect any gift from the bride's family?</span> </label>
                    <input value={bioData?.Joutuk} type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("Joutuk", {
                            required: 'This field is required'
                        })}
                        placeholder='Please Write Here'
                    />
                    
                </div>
            </form>

        </div>
    );
};

export default MarriageRelatedInfo;
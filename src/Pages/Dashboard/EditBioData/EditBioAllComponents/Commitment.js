import React from 'react';

const Commitment = ({ register, errors, bioData }) => {
    return (
        <div className='mb-6 '>
            <h2 className='text-3xl font-semibold text-center mb-4'>Pledge</h2>
            <hr />
            <form className='flex justify-center items-center'>
                <div>
                    <label className="label"> <span className="label-text">Do your parents know that you are submitting biodata to the OrdhekDeen.com website?</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("ParentsAwareAboutSubmission", {
                            required: 'This field is required'
                        })}
                        required>
                        <optgroup label="Please choose an option">
                            <option selected={!bioData?.ParentsAwareAboutSubmission && true} disabled value="">Select</option>
                            <option selected={bioData?.ParentsAwareAboutSubmission === "Yes" && true} value="Yes">Yes</option>
                            <option selected={bioData?.ParentsAwareAboutSubmission === "No" && true} value="No">No</option>
                        </optgroup>
                    </select>

                    <label className="label"> <span className="label-text">By Allah, testify that all the information given is true.</span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("Testify", {
                            required: 'This field is required'
                        })}
                        required>
                        <optgroup label="Please choose an option">
                            <option selected={!bioData?.Testify && true} disabled value="">Select</option>
                            <option selected={bioData?.Testify === "Yes" && true} value="Yes">Yes</option>
                            <option selected={bioData?.Testify === "No" && true} value="No">No</option>
                        </optgroup>
                    </select>

                    <label className="label w-full max-w-xs"><span className="label-text"> <span className='text-red-500'>Note:</span> If you provide any false information, SalafiyahNikah.com will not take any responsibility for the conventional law and the hereafter. Do you agree?</span></label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("NoResponsibility", {
                            required: 'This field is required'
                        })}
                        required>
                        <optgroup label="Please choose an option">
                            <option selected={!bioData?.NoResponsibility && true} disabled value="">Select</option>
                            <option selected={bioData?.NoResponsibility === "Yes" && true} value="Yes">Yes</option>
                            <option selected={bioData?.NoResponsibility === "No" && true} value="No">No</option>
                        </optgroup>
                    </select>

                </div>
            </form>
        </div>
    );
};

export default Commitment;
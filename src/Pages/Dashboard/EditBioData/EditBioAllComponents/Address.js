import React from 'react';
import { Link } from 'react-router-dom';

const Address = ({register, errors, setGender, bioData}) => {
    return (
        <div className='h-[600px] mb-6 flex justify-center items-center'>
            <div className='p-8 card w-96 border shadow-xl'>
                <h2 className='text-3xl font-semibold text-center mb-4'>Address</h2>
                <hr />
                <form onSubmit=''>
                    <div className="form-control w-full max-w-xs">
                    <label for="cars">Permanent Address</label>
    
                        {/* Permanent Address */}
                        <label className="label"> <span className="label-text">Select Your District</span> </label>
                        <select name="district" className='input input-bordered w-full mt-1 max-w-xs'
                        {...register("PermanentAddress", {
                            required: 'Permanent Address is required'
                        })}
                        >
                            <optgroup label="Dhaka">
                                <option selected={bioData?.PermanentAddress === "Dhaka" && true} value="Dhaka">Dhaka</option>
                                <option selected={bioData?.PermanentAddress === "Faridpur" && true} value="Faridpur">Faridpur</option>
                                <option selected={bioData?.PermanentAddress === "Gazipur" && true} value="Gazipur">Gazipur</option>
                                <option selected={bioData?.PermanentAddress === "Gopalganj" && true} value="Gopalganj">Gopalganj</option>
                                <option selected={bioData?.PermanentAddress === "Kishoreganj" && true} value="Kishoreganj">Kishoreganj</option>
                                <option selected={bioData?.PermanentAddress === "Madaripur" && true} value="Madaripur">Madaripur</option>
                                <option selected={bioData?.PermanentAddress === "Manikganj" && true} value="Manikganj">Manikganj</option>
                                <option selected={bioData?.PermanentAddress === "Munshiganj" && true} value="Munshiganj">Munshiganj</option>
                            </optgroup>
                            <optgroup label="Barishal">
                                <option selected={bioData?.PermanentAddress === "Barishal" && true} value="Barishal">Barishal</option>
                                <option selected={bioData?.PermanentAddress === "Barguna" && true} value="Barguna">Barguna</option>
                                <option selected={bioData?.PermanentAddress === "Bhola" && true} value="Bhola">Bhola</option>
                                <option selected={bioData?.PermanentAddress === "Jhalakathi" && true} value="Jhalakathi">Jhalakathi</option>
                                <option selected={bioData?.PermanentAddress === "Patuakhali" && true} value="Patuakhali">Patuakhali</option>
                                <option selected={bioData?.PermanentAddress === "Pirojpur" && true} value="Pirojpur">Pirojpur</option>
                            </optgroup>
                            <optgroup label="Rajshahi">
                                <option selected={bioData?.PermanentAddress === "Bogura" && true} value="Bogura">Bogura</option>
                                <option selected={bioData?.PermanentAddress === "Chapainawabganj" && true} value="Chapainawabganj">Chapainawabganj</option>
                                <option selected={bioData?.PermanentAddress === "Joypurhat" && true} value="Joypurhat">Joypurhat</option>
                                <option selected={bioData?.PermanentAddress === "Naogaon" && true} value="Naogaon">Naogaon</option>
                                <option selected={bioData?.PermanentAddress === "Natore" && true} value="Natore">Natore</option>
                                <option selected={bioData?.PermanentAddress === "Pabna" && true} value="Pabna">Pabna</option>
                                <option selected={bioData?.PermanentAddress === "Rajshahi" && true} value="Rajshahi">Rajshahi</option>
                                <option selected={bioData?.PermanentAddress === "Sirajganj" && true} value="Sirajganj">Sirajganj</option>
                            </optgroup>
                        </select>

                        {/* Details Address */}
                        <input value={bioData?.DetailsAddress} type='text'
                            className='input input-bordered mt-3 w-full max-w-xs'
                            {...register("DetailsAddress", {
                                required: 'Address Details is required'
                            })}
                            placeholder='Please write your details Address'
                        />
                        {/* {errors.Details-Address && <p className='text-red-600'>{errors.Details-Address.message}</p>} */}

                        {/* Present Address Check Box */}
                        <label for="cars">Present Address</label>
                        <div className="form-control">
                            <label className="cursor-pointer label">
                                <input type="checkbox" checked className="checkbox checkbox-secondary" />
                                <span className="label-text">Same as Permanent Address</span>
                            </label>
                        </div>

                        {/* Present Address */}
                        <label className="label"> <span className="label-text">Select Your District</span> </label>
                        <select name="district" className='input input-bordered w-full mt-1 max-w-xs'
                        {...register("PresentAddress", {
                            required: 'Present Address is required'
                        })}
                        >
                            <optgroup label="Dhaka">
                                <option selected={bioData?.PresentAddress === "Dhaka" && true} value="Dhaka">Dhaka</option>
                                <option selected={bioData?.PresentAddress === "Faridpur" && true} value="Faridpur">Faridpur</option>
                                <option selected={bioData?.PresentAddress === "Gazipur" && true} value="Gazipur">Gazipur</option>
                                <option selected={bioData?.PresentAddress === "Gopalganj" && true} value="Gopalganj">Gopalganj</option>
                                <option selected={bioData?.PresentAddress === "Kishoreganj" && true} value="Kishoreganj">Kishoreganj</option>
                                <option selected={bioData?.PresentAddress === "Madaripur" && true} value="Madaripur">Madaripur</option>
                                <option selected={bioData?.PresentAddress === "Manikganj" && true} value="Manikganj">Manikganj</option>
                                <option selected={bioData?.PresentAddress === "Munshiganj" && true} value="Munshiganj">Munshiganj</option>
                            </optgroup>
                            <optgroup label="Barishal">
                                <option selected={bioData?.PresentAddress === "Barishal" && true} value="Barishal">Barishal</option>
                                <option selected={bioData?.PresentAddress === "Barguna" && true} value="Barguna">Barguna</option>
                                <option selected={bioData?.PresentAddress === "Bhola" && true} value="Bhola">Bhola</option>
                                <option selected={bioData?.PresentAddress === "Jhalakathi" && true} value="Jhalakathi">Jhalakathi</option>
                                <option selected={bioData?.PresentAddress === "Patuakhali" && true} value="Patuakhali">Patuakhali</option>
                                <option selected={bioData?.PresentAddress === "Pirojpur" && true} value="Pirojpur">Pirojpur</option>
                            </optgroup>
                            <optgroup label="Rajshahi">
                                <option selected={bioData?.PresentAddress === "Bogura" && true} value="Bogura">Bogura</option>
                                <option selected={bioData?.PresentAddress === "Chapainawabganj" && true} value="Chapainawabganj">Chapainawabganj</option>
                                <option selected={bioData?.PresentAddress === "Joypurhat" && true} value="Joypurhat">Joypurhat</option>
                                <option selected={bioData?.PresentAddress === "Naogaon" && true} value="Naogaon">Naogaon</option>
                                <option selected={bioData?.PresentAddress === "Natore" && true} value="Natore">Natore</option>
                                <option selected={bioData?.PresentAddress === "Pabna" && true} value="Pabna">Pabna</option>
                                <option selected={bioData?.PresentAddress === "Rajshahi" && true} value="Rajshahi">Rajshahi</option>
                                <option selected={bioData?.PresentAddress === "Sirajganj" && true} value="Sirajganj">Sirajganj</option>
                            </optgroup>

                        </select>

                    {/* Group District */}
                    </div>
                    <div className="form-control mt-3 w-full max-w-xs">
                    <label className="label"> <span className="label-text">Where did you grow up?</span> </label>
                        <input value={bioData?.GrowUp} type='text'
                            className='input input-bordered w-full max-w-xs'
                            {...register("GrowUp", {
                                required: 'Grow Up is required'
                            })}
                            placeholder='District'
                        />
                    </div>
                    <input className='btn btn-secondary my-4 w-full max-w-xs' value='Next' type="submit" />
                    {/* {signError && <p className='text-red-600'>{signError}</p>} */}
                </form>
            </div>
        </div>
    );
};

export default Address;
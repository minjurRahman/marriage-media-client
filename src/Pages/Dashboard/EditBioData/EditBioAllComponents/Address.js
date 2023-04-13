import React from 'react';
import { Link } from 'react-router-dom';

const Address = ({register, errors, setGender}) => {
    return (
        <div className='h-[600px] mb-6 flex justify-center items-center'>
            <div className='p-8 card w-96 border shadow-xl'>
                <h2 className='text-3xl font-semibold text-center mb-4'>Address</h2>
                <hr />
                <form onSubmit=''>
                    <div className="form-control w-full max-w-xs">
                    <label for="cars">Permanent Address</label>
    
                        <label className="label"> <span className="label-text">Select Your District</span> </label>
                        <select name="district" className='input input-bordered w-full mt-1 max-w-xs'
                        {...register("PermanentAddress", {
                            required: 'Permanent Address is required'
                        })}
                        >
                            <optgroup label="Dhaka">
                                <option value="Dhaka">Dhaka</option>
                                <option value="Faridpur">Faridpur</option>
                                <option value="Gazipur">Gazipur</option>
                                <option value="Gopalganj">Gopalganj</option>
                                <option value="Kishoreganj">Kishoreganj</option>
                                <option value="Madaripur">Madaripur</option>
                                <option value="Manikganj">Manikganj</option>
                                <option value="Munshiganj">Munshiganj</option>
                            </optgroup>
                            <optgroup label="Barishal">
                                <option value="Barishal">Barishal</option>
                                <option value="Barguna">Barguna</option>
                                <option value="Bhola">Bhola</option>
                                <option value="Jhalakathi">Jhalakathi</option>
                                <option value="Patuakhali">Patuakhali</option>
                                <option value="Pirojpur">Pirojpur</option>
                            </optgroup>
                            <optgroup label="Rajshahi">
                                <option value="Bogura">Bogura</option>
                                <option value="Chapainawabganj">Chapainawabganj</option>
                                <option value="Joypurhat">Joypurhat</option>
                                <option value="Naogaon">Naogaon</option>
                                <option value="Natore">Natore</option>
                                <option value="Pabna">Pabna</option>
                                <option value="Rajshahi">Rajshahi</option>
                                <option value="Sirajganj">Sirajganj</option>
                            </optgroup>
                        </select>

                        {/*  */}


                        <input type='text'
                            className='input input-bordered mt-3 w-full max-w-xs'
                            {...register("DetailsAddress", {
                                required: 'Address Details is required'
                            })}
                            placeholder='Please write your details Address'
                        />
                        {/* {errors.Details-Address && <p className='text-red-600'>{errors.Details-Address.message}</p>} */}

                        <label for="cars">Present Address</label>
                        <div className="form-control">
                            <label className="cursor-pointer label">
                                <input type="checkbox" checked className="checkbox checkbox-secondary" />
                                <span className="label-text">Same as Permanent Address</span>
                            </label>
                        </div>

                        <label className="label"> <span className="label-text">Select Your District</span> </label>
                        <select name="district" className='input input-bordered w-full mt-1 max-w-xs'
                        {...register("PresentAddress", {
                            required: 'Present Address is required'
                        })}
                        >
                            <optgroup label="Dhaka">
                                <option value="Dhaka">Dhaka</option>
                                <option value="Faridpur">Faridpur</option>
                                <option value="Gazipur">Gazipur</option>
                                <option value="Gopalganj">Gopalganj</option>
                                <option value="Kishoreganj">Kishoreganj</option>
                                <option value="Madaripur">Madaripur</option>
                                <option value="Manikganj">Manikganj</option>
                                <option value="Munshiganj">Munshiganj</option>
                            </optgroup>
                            <optgroup label="Barishal">
                                <option value="Barishal">Barishal</option>
                                <option value="Barguna">Barguna</option>
                                <option value="Bhola">Bhola</option>
                                <option value="Jhalakathi">Jhalakathi</option>
                                <option value="Patuakhali">Patuakhali</option>
                                <option value="Pirojpur">Pirojpur</option>
                            </optgroup>
                            <optgroup label="Rajshahi">
                                <option value="Bogura">Bogura</option>
                                <option value="Chapainawabganj">Chapainawabganj</option>
                                <option value="Joypurhat">Joypurhat</option>
                                <option value="Naogaon">Naogaon</option>
                                <option value="Natore">Natore</option>
                                <option value="Pabna">Pabna</option>
                                <option value="Rajshahi">Rajshahi</option>
                                <option value="Sirajganj">Sirajganj</option>
                            </optgroup>
                        </select>


                    </div>
                    <div className="form-control mt-3 w-full max-w-xs">
                    <label className="label"> <span className="label-text">Where did you grow up?</span> </label>
                        <input type='text'
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
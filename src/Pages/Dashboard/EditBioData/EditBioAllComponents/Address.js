import React from 'react';
import { Link } from 'react-router-dom';

const Address = () => {
    return (
        <div className='h-[600px] mb-6 flex justify-center items-center'>
            <div className='p-8 card w-96 border shadow-xl'>
                <h2 className='text-3xl font-semibold text-center mb-4'>Address</h2>
                <hr />
                <form onSubmit=''>
                    <div className="form-control w-full max-w-xs">
                    <label for="cars">Permanent Address</label>
                        {/*  */}
                        <label className="label"> <span className="label-text">Select Your District</span> </label>
                        <select name="district" className='input input-bordered w-full mt-1 max-w-xs'>
                            <optgroup label="Dhaka">
                                <option value="">Dhaka</option>
                                <option value="">Faridpur</option>
                                <option value="">Gazipur</option>
                                <option value="">Gopalganj</option>
                                <option value="">Kishoreganj</option>
                                <option value="">Madaripur</option>
                                <option value="">Manikganj</option>
                                <option value="">Munshiganj</option>
                            </optgroup>
                            <optgroup label="Barishal">
                                <option value="">Barishal</option>
                                <option value="">Barguna</option>
                                <option value="">Bhola</option>
                                <option value="">Jhalakathi</option>
                                <option value="">Patuakhali</option>
                                <option value="">Pirojpur</option>
                            </optgroup>
                            <optgroup label="Rajshahi">
                                <option value="">Bogura</option>
                                <option value="">Chapainawabganj</option>
                                <option value="">Joypurhat</option>
                                <option value="">Naogaon</option>
                                <option value="">Natore</option>
                                <option value="">Pabna</option>
                                <option value="">Rajshahi</option>
                                <option value="">Sirajganj</option>
                            </optgroup>
                        </select>

                        {/*  */}


                        <input type='text'
                            className='input input-bordered mt-3 w-full max-w-xs'
                            // {...register("name", {
                            //     required: 'Name is required'
                            // })}
                            placeholder='Please enter your area name'
                        />

                        {/* {errors.name && <p className='text-red-600'>{errors.name.message}</p>} */}
                        <label for="cars">Present Address</label>

                        <div className="form-control">
                            <label className="cursor-pointer label">
                                <input type="checkbox" checked className="checkbox checkbox-secondary" />
                                <span className="label-text">Same as Permanent Address</span>
                            </label>
                        </div>

                        {/* <input type='email'
                            className='input input-bordered w-full max-w-xs'
                            // {...register("email", {
                            //     required: 'Email is required'
                            // })}
                            placeholder='Enter your email address'
                        /> */}
                        {/* {errors.email && <p className='text-red-600'>{errors.email.message}</p>} */}
                        <label className="label"> <span className="label-text">Select Your District</span> </label>
                        <select name="district" className='input input-bordered w-full mt-1 max-w-xs'>
                            <optgroup label="Dhaka">
                                <option value="">Dhaka</option>
                                <option value="">Faridpur</option>
                                <option value="">Gazipur</option>
                                <option value="">Gopalganj</option>
                                <option value="">Kishoreganj</option>
                                <option value="">Madaripur</option>
                                <option value="">Manikganj</option>
                                <option value="">Munshiganj</option>
                            </optgroup>
                            <optgroup label="Barishal">
                                <option value="">Barishal</option>
                                <option value="">Barguna</option>
                                <option value="">Bhola</option>
                                <option value="">Jhalakathi</option>
                                <option value="">Patuakhali</option>
                                <option value="">Pirojpur</option>
                            </optgroup>
                            <optgroup label="Rajshahi">
                                <option value="">Bogura</option>
                                <option value="">Chapainawabganj</option>
                                <option value="">Joypurhat</option>
                                <option value="">Naogaon</option>
                                <option value="">Natore</option>
                                <option value="">Pabna</option>
                                <option value="">Rajshahi</option>
                                <option value="">Sirajganj</option>
                            </optgroup>
                        </select>


                    </div>
                    <div className="form-control mt-3 w-full max-w-xs">
                    <label className="label"> <span className="label-text">Where did you grow up?</span> </label>
                        <input type='text'
                            className='input input-bordered w-full max-w-xs'
                            // {...register("email", {
                            //     required: 'Email is required'
                            // })}
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
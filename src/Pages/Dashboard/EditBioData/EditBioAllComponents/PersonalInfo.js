import React from 'react';

const PersonalInfo = ({ register, errors, bioData }) => {
    return (
        <div className='mb-6 '>
            <h2 className='text-3xl font-semibold text-center mb-4'>Personal Information</h2>
            <hr />
            <form className='flex justify-center items-center'>
                <div>
        {/* Clothes Wear */}
                    <label className="label"> <span className="label-text">What kind of clothes do you usually wear outside the house?</span> </label>
                    <input value={bioData?.ClothesWear} type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("ClothesWear", {
                            required: 'This field is required'
                        })}
                        placeholder='Write here'
                    />
                    <label className="label w-full max-w-xs"><span className="label-text"> <span className='text-red-500'>Note:</span> In case of brides, you must mention whether you wear burqa, hijab, niqab and socks.</span></label>
      
        {/* Beard */}
                    <label className="label"> <span className="label-text">Do you have beard according to sunnah? Since when?</span> </label>
                    <input value={bioData?.Beard} type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("Beard", {
                            required: 'This field is required'
                        })}
                        placeholder='Write here'
                    />
                    <label className="label w-full max-w-xs"><span className="label-text"> <span className='text-red-500'>Note:</span> Please clearly write how many years you have been keeping a beard. If you have less beard growth due to biological reasons, it should be mentioned.</span></label>

        {/* Clothes Above Ankles */}
                    <label className="label"> <span className="label-text">Do you wear clothes above the ankles?</span> </label>
                    <input value={bioData?.ClothesAboveAnkles} type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("ClothesAboveAnkles", {
                            required: 'This field is required'
                        })}
                        placeholder='Write here'
                    />

        {/* Praying */}
                    <label className="label"> <span className="label-text">Do you pray five times a day? Since when?</span> </label>
                    <input value={bioData?.Praying} type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("Praying", {
                            required: 'This field is required'
                        })}
                        placeholder='Write here'
                    />
                    <label className="label w-full max-w-xs"><span className="label-text"> <span className='text-red-500'>Note:</span> Please write a clear answer with "Yes" or "No". It must be mentioned how many years you have been praying five times a day.</span></label>

        {/* PrayingTime */}
                    <label className="label"> <span className="label-text">Usually how many times(waqt) a week are your prayers missed(Qaza)?</span> </label>
                    <input value={bioData?.PrayingTime} type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("PrayingTime", {
                            required: 'This field is required'
                        })}
                        placeholder='Write here'
                    />
                    
        {/* Mahram Comply */}
                    <label className="label"> <span className="label-text">Do you comply with mahram / non-mahram?</span> </label>
                    <input value={bioData?.MahramComply} type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("MahramComply", {
                            required: 'This field is required'
                        })}
                        placeholder='Write here'
                    />

        {/* Quran Recite */}
                    <label className="label"> <span className="label-text">Are you able to recite the Quran correctly?</span> </label>
                    <input value={bioData?.QuranRecite} type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("QuranRecite", {
                            required: 'This field is required'
                        })}
                        placeholder='Write here'
                    />

        {/* Fiqh Follow */}
                    <label className="label"> <span className="label-text">Which Fiqh do you follow? </span> </label>
                    <select name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' 
                    {...register("FiqhFollow", {
                        required: 'This field is required'
                    })}
                    required>
                        <optgroup label="Please choose an option">
                            <option selected={!bioData?.FiqhFollow && true} disabled value="">Select</option>
                            <option selected={bioData?.FiqhFollow === "Hanafi" && true} value="Hanafi">Hanafi</option>
                            <option selected={bioData?.FiqhFollow === "Maliki" && true} value="Maliki">Maliki</option>
                            <option selected={bioData?.FiqhFollow === "Shafi" && true} value="Shafi">Shafi'i</option>
                            <option selected={bioData?.FiqhFollow === "Hanbali" && true} value="Hanbali">Hanbali</option>
                            <option selected={bioData?.FiqhFollow === "Ahle Hadis / Salafi" && true} value="Ahle Hadis / Salafi">Ahle Hadis / Salafi</option>
                        </optgroup>
                    </select>

        {/* Watch Drama Movie */}
                    <label className="label"> <span className="label-text">Do you watch or listen to dramas / movies / serials / songs?</span> </label>
                    <input value={bioData?.WatchDramaMovie} type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("WatchDramaMovie", {
                            required: 'This field is required'
                        })}
                        placeholder='Write here'
                    />
                   
        {/* Diseases */}
                    <label className="label"> <span className="label-text">Do you have any mental or physical diseases?</span> </label>
                    <input value={bioData?.Diseases} type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("Diseases", {
                            required: 'This field is required'
                        })}
                        placeholder='Write here'
                    />

        {/* Involved Dawa Platform */}
                    <label className="label"> <span className="label-text">Are you involved in any special work of deen?</span> </label>
                    <input value={bioData?.InvolvedDawaPlatform} type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("InvolvedDawaPlatform",)}
                        placeholder='Write here'
                    />

        {/* Mazar Belief */}
                    <label className="label"> <span className="label-text">What are your ideas or beliefs about the shrine(Mazar)?</span> </label>
                    <input value={bioData?.MazarBelief} type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("MazarBelief", {
                            required: 'This field is required'
                        })}
                        placeholder='Write here'
                    />

        {/* Islamic Books */}
                    <label className="label"> <span className="label-text">Write the names of at least 3 Islamic books you have read.</span> </label>
                    <input value={bioData?.IslamicBooks} type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("IslamicBooks", {
                            required: 'This field is required'
                        })}
                        placeholder='Write here'
                    />

        {/* Islamic Scholars */}
                    <label className="label"> <span className="label-text">Write the names of at least 3 islamic scholars of your choice.</span> </label>
                    <input value={bioData?.IslamicScholars} type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("IslamicScholars", {
                            required: 'This field is required'
                        })}
                        placeholder='Write here'
                    />

        {/* About You */}
                    <label className="label"> <span className="label-text">Write something about yourself</span> </label>
                    <textarea value={bioData?.AboutYou} placeholder="Write here" className="textarea textarea-bordered textarea-lg border-double rounded-md w-full h-40 max-w-xs" 
                    {...register("AboutYou", {
                        required: 'This field is required'
                    })}
                    ></textarea>
                    <label className="label w-full max-w-xs"><span className="label-text"> <span className='text-red-500'>Note:</span> You can write about your likes and dislikes, hobbies, dreams, religious and worldly qualifications, and so on. The more details you provide, the easier it will be for others to understand you and the higher the chances of receiving relevant proposals.</span></label>

        {/* Groom's mobile number */}
                    <label className="label"> <span className="label-text">Groom's mobile number.</span> </label>
                    <input value={bioData?.GroomsCellPhone} type='text'
                        className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs'
                        {...register("GroomsCellPhone", {
                            required: 'This field is required'
                        })}
                        placeholder='Write here'
                    />
                    <label className="label w-full max-w-xs"><span className="label-text"> <span className='text-red-500'>Note:</span>Groom's personal mobile numbers are being taken for biodata verification. It will not be disclosed to anyone except the authorities.</span></label>
                    
        {/* Here is Photo Taken from grooms */}
                    <label className="label"> <span className="label-text">Groom's photo</span> </label>
                    <button name="district" className='p-3 border-2 border-double rounded-md select-bordered w-full max-w-xs' required>
                    <input type="file" className="file-input 
                    file-input-bordered w-full max-w-xs" />
                    </button>
                    <label className="label w-full max-w-xs"><span className="label-text"> <span className='text-red-500'>Note:</span>Your photo will not be disclosed to anyone other than the OrdhekDeen authorities. Photo is taken only for identity verification. Upload a recent photo where the face is clearly defined.</span></label>
               
               
                </div>
            </form>

        </div>
    );
};

export default PersonalInfo;
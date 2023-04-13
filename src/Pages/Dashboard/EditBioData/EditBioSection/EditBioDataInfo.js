import React, { useContext, useState } from 'react';
import Address from '../EditBioAllComponents/Address';
import Commitment from '../EditBioAllComponents/Commitment';
import Communication from '../EditBioAllComponents/Communication';
import EducationalInfo from '../EditBioAllComponents/EducationalInfo';
import ExpectedLifePartnerInfo from '../EditBioAllComponents/ExpectedLifePartnerInfo';
import FamilyInfo from '../EditBioAllComponents/FamilyInfo';
import GeneralInfo from '../EditBioAllComponents/GeneralInfo';
import MarriageRelatedInfo from '../EditBioAllComponents/MarriageRelatedInfo';
import PersonalInfo from '../EditBioAllComponents/PersonalInfo';
import ProfessionalInfo from '../EditBioAllComponents/ProfessionalInfo';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../contexts/AuthProvider';

const EditBioDataInfo = () => {
    //user email
    const { user } = useContext(AuthContext);

    //Gender verification
    const [gender, setGender] = useState("")


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const newData = { ...data, email: user?.email }
        JSON.stringify(data)
        console.log(newData)

        fetch('http://localhost:5000/user',{
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="submit" />
                <GeneralInfo register={register} errors={errors} setGender={setGender} ></GeneralInfo>
                {
                    gender === 'male' && <>
                        <Address register={register} errors={errors} setGender={setGender} ></Address>
                        <EducationalInfo register={register} errors={errors} setGender={setGender} ></EducationalInfo>
                        <FamilyInfo register={register} errors={errors} setGender={setGender} ></FamilyInfo>
                        <PersonalInfo register={register} errors={errors} ></PersonalInfo>
                        <ProfessionalInfo register={register} errors={errors} ></ProfessionalInfo>
                    </>
                }
                {
                    gender === 'female' && <>
                        <MarriageRelatedInfo register={register} errors={errors} ></MarriageRelatedInfo>
                        <ExpectedLifePartnerInfo register={register} errors={errors} ></ExpectedLifePartnerInfo>
                        <Commitment register={register} errors={errors} ></Commitment>
                        <Communication register={register} errors={errors} ></Communication>
                    </>
                }
            </form>

        </div>
    );
};

export default EditBioDataInfo;
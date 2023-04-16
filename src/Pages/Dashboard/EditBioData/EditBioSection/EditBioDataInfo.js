import React, { useContext, useEffect, useState } from 'react';
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

    // Get data from database state
    const [bioData, setBioData] = useState({});

    //Gender verification
    const [gender, setGender] = useState("")

    //Put data from user
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const newData = { ...data, email: user?.email, gender, createdAt:  new Date() }
        JSON.stringify(data)
        console.log(newData)

        fetch(`${process.env.REACT_APP_serverLink}/user`,{
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    // Get data from database
    useEffect( () =>{
        fetch(`${process.env.REACT_APP_serverLink}/user/${user?.email}`)
        .then(res => res.json())
        .then(data => setBioData(data))
     },[user?.email])

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="submit" />
                <GeneralInfo bioData={bioData} register={register} errors={errors} setGender={setGender} ></GeneralInfo>
                {
                    gender === 'male' && <>
                        <Address bioData={bioData} register={register} errors={errors} setGender={setGender} ></Address>
                        <EducationalInfo bioData={bioData} register={register} errors={errors} setGender={setGender} ></EducationalInfo>
                        <FamilyInfo bioData={bioData} register={register} errors={errors} setGender={setGender} ></FamilyInfo>
                        <PersonalInfo bioData={bioData} register={register} errors={errors} ></PersonalInfo>
                        <ProfessionalInfo bioData={bioData} register={register} errors={errors} ></ProfessionalInfo>
                        <MarriageRelatedInfo bioData={bioData} register={register} errors={errors} ></MarriageRelatedInfo>
                        <ExpectedLifePartnerInfo bioData={bioData} register={register} errors={errors} ></ExpectedLifePartnerInfo>
                        <Commitment bioData={bioData} register={register} errors={errors} ></Commitment>
                    </>
                }
                {
                    gender === 'female' && <>
                        <Address bioData={bioData} register={register} errors={errors} setGender={setGender} ></Address>
                        <EducationalInfo bioData={bioData} register={register} errors={errors} setGender={setGender} ></EducationalInfo>
                        <FamilyInfo bioData={bioData} register={register} errors={errors} setGender={setGender} ></FamilyInfo>
                        <PersonalInfo bioData={bioData} register={register} errors={errors} ></PersonalInfo>
                        <ProfessionalInfo bioData={bioData} register={register} errors={errors} ></ProfessionalInfo>
                        <MarriageRelatedInfo bioData={bioData} register={register} errors={errors} ></MarriageRelatedInfo>
                        <ExpectedLifePartnerInfo bioData={bioData} register={register} errors={errors} ></ExpectedLifePartnerInfo>
                        <Commitment bioData={bioData} register={register} errors={errors} ></Commitment>
                        {/* <Communication register={register} errors={errors} ></Communication> */}
                    </>
                }
            </form>

        </div>
    );
};

export default EditBioDataInfo;
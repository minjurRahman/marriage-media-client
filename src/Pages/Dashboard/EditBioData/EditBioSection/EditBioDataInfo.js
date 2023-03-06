import React from 'react';
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

const EditBioDataInfo = () => {
    return (
        <div>
            <GeneralInfo></GeneralInfo>
            <Address></Address>
            <EducationalInfo></EducationalInfo>
            <FamilyInfo></FamilyInfo>
            <PersonalInfo></PersonalInfo>
            <ProfessionalInfo></ProfessionalInfo>
            <MarriageRelatedInfo></MarriageRelatedInfo>
            <ExpectedLifePartnerInfo></ExpectedLifePartnerInfo>
            <Commitment></Commitment>
            <Communication></Communication>
        </div>
    );
};

export default EditBioDataInfo;
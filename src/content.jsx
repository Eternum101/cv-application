import React, { useState } from 'react';
import PersonalInfo from "./components/PersonalInfo";
import EducationInfo from "./components/EducationInfo";
import ExperienceInfo from "./components/ExperienceInfo";
import PreviewCV from "./components/PreviewCV";

export default function Content () {

    const [personalInfo, setPersonalInfo] = useState({
        title: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        aboutMe: '',
      });
    
      const [education, setEducation] = useState({
        schoolName: '',
        studyTitle: '',
        studyStartDate: '',
        studyEndDate: '',
      });
    
      const [experience, setExperience] = useState({
        companyName: '',
        positionTitle: '',
        experienceStartDate: '',
        experienceEndDate: '',
        companyLocation: '',
        experienceDescription: '',
      });

        // Event handlers to update state on user input
    const handlePersonalInfoChange = (event) => {
        const { name, value } = event.target;
        setPersonalInfo((prevPersonalInfo) => ({
        ...prevPersonalInfo,
        [name]: value,
        }));
    };

    const handleEducationChange = (event) => {
        const { name, value } = event.target;
        setEducation((prevEducation) => ({
        ...prevEducation,
        [name]: value,
        }));
    };

    const handleExperienceChange = (event) => {
        const { name, value } = event.target;
        setExperience((prevExperience) => ({
        ...prevExperience,
        [name]: value,
        }));
    };

    return (
        <div className="content">
            <section className="cv-form">
            <PersonalInfo personalInfo={personalInfo} onChange={handlePersonalInfoChange} />
            <EducationInfo education={education} onChange={handleEducationChange} />
            <ExperienceInfo experience={experience} onChange={handleExperienceChange} />
            </section>
        <PreviewCV 
            personalInfo={personalInfo}
            education={education}
            experience={experience}
        />
        </div>
    )
}
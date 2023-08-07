import React, { useState } from 'react';
import PersonalInfo from "./components/PersonalInfo";
import EducationInfo from "./components/EducationInfo";
import ExperienceInfo from "./components/ExperienceInfo";
import PreviewCV from "./components/PreviewCV";

export default function Content() {
  const [personalInfo, setPersonalInfo] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    aboutMe: '',
  });

  const [education, setEducation] = useState([
    {
      schoolName: '',
      studyTitle: '',
      studyStartDate: '',
      studyEndDate: '',
    },
  ]);

  const [experience, setExperience] = useState([
    {
      companyName: '',
      positionTitle: '',
      experienceStartDate: '',
      experienceEndDate: '',
      companyLocation: '',
      experienceDescription: '',
    },
  ]);

  const handlePersonalInfoChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo((prevPersonalInfo) => ({
      ...prevPersonalInfo,
      [name]: value,
    }));
  };

  const handleEducationChange = (event, index) => {
    const { name, value } = event.target;
    const updatedEducation = [...education];
    updatedEducation[index][name] = value;
    setEducation(updatedEducation);
  };

  const handleExperienceChange = (event, index) => {
    const { name, value } = event.target;
    const updatedExperience = [...experience];
    updatedExperience[index][name] = value;
    setExperience(updatedExperience);
  };

  const handleNewEducationForm = () => {
    setEducation([...education, { schoolName: '', studyTitle: '', studyStartDate: '', studyEndDate: '' }]);
  };

  const handleNewExperienceForm = () => {
    setExperience([...experience, { companyName: '', positionTitle: '', experienceStartDate: '', experienceEndDate: '', companyLocation: '', experienceDescription: '' }]);
  };

  const handleDeleteEducationForm = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  }

  const handleDeleteExperienceForm = (index) => {
    const updatedExperience = [...experience];
    updatedExperience.splice(index, 1);
    setExperience(updatedExperience);
  };

  return (
    <div className="content">
      <section className="cv-form">
        <PersonalInfo personalInfo={personalInfo} onChange={handlePersonalInfoChange} />
        <EducationInfo
          education={education}
          onChange={handleEducationChange}
          onNewForm={handleNewEducationForm}
          onDeleteForm={handleDeleteEducationForm}
        />
        <ExperienceInfo
          experience={experience}
          onChange={handleExperienceChange}
          onNewExperienceForm={handleNewExperienceForm}
          onDeleteExperienceForm={handleDeleteExperienceForm}
        />
      </section>
      <PreviewCV
        personalInfo={personalInfo}
        education={education}
        experience={experience}
      />
    </div>
  );
}

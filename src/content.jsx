import React, { useState } from 'react';
import PersonalInfo from "./components/PersonalInfo";
import EducationInfo from "./components/EducationInfo";
import ExperienceInfo from "./components/ExperienceInfo";
import PreviewCV from "./components/PreviewCV";
import { FaPenToSquare, FaTrashCan } from 'react-icons/fa6';

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

  const handleAutoFill = () => {
    const autoFillData = {
      firstName: 'John',
      lastName: 'Doe',
      title: 'Web Developer',
      email: 'johndoe@example.com',
      phone: '123-456-7890',
      address: '1234 Elm Street',
      aboutMe: 'Passionate web developer with a love for creating beautiful and functional websites.',
    };
  
    setPersonalInfo(autoFillData);
  
    const autoFillEducation = [
      {
        schoolName: 'University of ABC',
        studyTitle: 'Bachelor of Science in Computer Science',
        studyStartDate: '04/2017',
        studyEndDate: '04/2021',
      },
      {
        schoolName: 'Coding Institute XYZ',
        studyTitle: 'Web Development Bootcamp',
        studyStartDate: '09/2015',
        studyEndDate: '05/2019',
      },
    ];
  
    setEducation(autoFillEducation);
  
    const autoFillExperience = [
      {
        companyName: 'Tech Company XYZ',
        positionTitle: 'Frontend Developer',
        experienceStartDate: '06/2021',
        experienceEndDate: 'Present',
        companyLocation: 'Cityville, Countryland',
        experienceDescription: 'Developed user interfaces and implemented features for various projects.',
      },
      {
        companyName: 'Web Agency ABC',
        positionTitle: 'Junior Web Developer',
        experienceStartDate: '09/2020',
        experienceEndDate: '04/2021',
        companyLocation: 'Codeburg, Techland',
        experienceDescription: 'Assisted in building responsive and interactive websites for clients.',
      },
    ];
  
    setExperience(autoFillExperience);
  };  

  const handleClearFields = () => {
    setPersonalInfo({
      title: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      aboutMe: '',
    });
    setEducation([
      {
        schoolName: '',
        studyTitle: '',
        studyStartDate: '',
        studyEndDate: '',
      },
    ]);
    setExperience([
      {
        companyName: '',
        positionTitle: '',
        experienceStartDate: '',
        experienceEndDate: '',
        companyLocation: '',
        experienceDescription: '',
      },
    ]);
  };

  return (
    <div className="content">
      <section className="cv-form">
        <div className='autofill-container'>
          <button onClick={handleAutoFill}><FaPenToSquare size='1.1em'/>Autofill</button>
          <button onClick={handleClearFields}><FaTrashCan size='1.1em'/>Clear</button>
        </div>
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

// Import React, React Icons, PersonalInfo, EducationInfo, ExperienceInfo, PreviewCV
import React, { useState } from 'react';
import PersonalInfo from "./components/PersonalInfo";
import EducationInfo from "./components/EducationInfo";
import ExperienceInfo from "./components/ExperienceInfo";
import PreviewCV from "./components/PreviewCV";
import { FaPenToSquare, FaTrashCan } from 'react-icons/fa6';

export default function Content() {

  // useState Hook initializes the 'personalInfo' state object with various fields
  // which can be updated using their corresponding setter functions
  const [personalInfo, setPersonalInfo] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    aboutMe: '',
  });

  // useState Hook initializes the 'education' state object with various fields
  // which can be updated using their corresponding setter functions
  const [education, setEducation] = useState([
    {
      schoolName: '',
      studyTitle: '',
      studyStartDate: '',
      studyEndDate: '',
    },
  ]);

  // useState Hook initializes the 'experience' state object with various fields
  // which can be updated using their corresponding setter functions
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

  // Updates the 'personalInfo' state object when the user interacts with input fields
  const handlePersonalInfoChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo((prevPersonalInfo) => ({
      ...prevPersonalInfo,
      [name]: value,
    }));
  };

  // Updates the 'education' state object when the user interacts with input fields
  const handleEducationChange = (event, index) => {
    const { name, value } = event.target;
    const updatedEducation = [...education];
    updatedEducation[index][name] = value;
    setEducation(updatedEducation);
  };

  // Updates the 'experience' state object when the user interacts with input fields
  const handleExperienceChange = (event, index) => {
    const { name, value } = event.target;
    const updatedExperience = [...experience];
    updatedExperience[index][name] = value;
    setExperience(updatedExperience);
  };

  // Adds a new education form to the 'education' array in the state
  const handleNewEducationForm = () => {
    setEducation([...education, { schoolName: '', studyTitle: '', studyStartDate: '', studyEndDate: '' }]);
  };

  // Adds a new experience form to the 'experience' array in the state
  const handleNewExperienceForm = () => {
    setExperience([...experience, { companyName: '', positionTitle: '', experienceStartDate: '', experienceEndDate: '', companyLocation: '', experienceDescription: '' }]);
  };

  // Deletes a education form the 'education' array in the state
  const handleDeleteEducationForm = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  }

  // Deletes a experience form the 'experience' array in the state
  const handleDeleteExperienceForm = (index) => {
    const updatedExperience = [...experience];
    updatedExperience.splice(index, 1);
    setExperience(updatedExperience);
  };

  // Autofills all forms with specified information
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

  // Clears all input fields on each form
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

  // JSX Code to display content
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

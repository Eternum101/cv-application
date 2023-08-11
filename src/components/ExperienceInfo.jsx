// Import React & React Icons
import React from 'react';
import { FaSuitcase, FaTrashCan } from 'react-icons/fa6';

const ExperienceInfo = ({ experience, onChange, onNewExperienceForm, onDeleteExperienceForm }) => {
  
  // Triggers the addition of a new experience form by calling the 
  // onNewExperienceForm function
  const handleNewInput = () => {
    onNewExperienceForm();
  };

  // Handles the deletion of an experience form at a specific index by 
  // calling the onDeleteExperienceForm function with the provided index
  const handleDeleteInput = (index) => {
    onDeleteExperienceForm(index);
  };

  // JSX Code to display experience information
  return (
    <div className='experience-info'>
      <div className='experience-header'>
        <span className='number-icon'>3</span> -
        <FaSuitcase size='2em'/>
        <h2>Experience</h2>
      </div>
      {experience.map((item, index) => (
        <div key={index} className='experience-content'>
        <form className='form-item'>
          <div className='input-container'>
            <label htmlFor={`companyName-${index}`}>Company Name:</label>
            <input
              type='text'
              id={`companyName-${index}`}
              name='companyName'
              placeholder='Enter Company Name'
              value={item.companyName}
              onChange={(e) => onChange(e, index)}
            />
          </div>
          <div className='input-container'>
            <label htmlFor={`positionTitle-${index}`}>Position Title:</label>
            <input
              type='text'
              id={`positionTitle-${index}`}
              name='positionTitle'
              placeholder='Enter Position'
              value={item.positionTitle}
              onChange={(e) => onChange(e, index)}
            />
          </div>
          <div className='input-container'>
            <label htmlFor={`experienceStartDate-${index}`}>Start Date:</label>
            <input
              type='text'
              id={`experienceStartDate-${index}`}
              name='experienceStartDate'
              placeholder='MM/YYYY'
              value={item.experienceStartDate}
              onChange={(e) => onChange(e, index)}
            />
          </div>
          <div className='input-container'>
            <label htmlFor={`experienceEndDate-${index}`}>End Date:</label>
            <input
              type='text'
              id={`experienceEndDate-${index}`}
              name='experienceEndDate'
              placeholder='MM/YYYY'
              value={item.experienceEndDate}
              onChange={(e) => onChange(e, index)}
            />
          </div>
          <div className='input-container'>
            <label htmlFor={`companyLocation-${index}`}>Location:</label>
            <input
              type='text'
              id={`companyLocation-${index}`}
              name='companyLocation'
              placeholder='Enter Location'
              value={item.companyLocation}
              onChange={(e) => onChange(e, index)}
            />
          </div>
          <div className='input-container'>
            <label htmlFor={`experienceDescription-${index}`}>Description:</label>
            <textarea
              id={`experienceDescription-${index}`}
              name='experienceDescription'
              placeholder='Enter Description'
              value={item.experienceDescription}
              onChange={(e) => onChange(e, index)}
            />
          </div>
          <div className='delete-container'>
            <button className='delete-button' onClick={() => handleDeleteInput(index)}><FaTrashCan/> Delete Entry</button>
          </div>
          <hr></hr>
        </form>
        </div>
      ))}
      <div className="btn-container">
        <button className='btn-new' onClick={handleNewInput}>
          Add Experience
        </button>
      </div>
    </div>
  );
};

export default ExperienceInfo;

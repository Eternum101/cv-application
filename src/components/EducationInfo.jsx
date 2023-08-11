// Import React & React Icons
import React from 'react';
import { FaGraduationCap, FaTrashCan } from 'react-icons/fa6';

const EducationInfo = ({ education, onChange, onNewForm, onDeleteForm }) => {

  // Adds a new "Education" form section with a corresponding number to the list 
  // of form headings
  const handleNewInput = () => {
    onNewForm();
    setFormHeadings((prevHeadings) => [
      ...prevHeadings,
      { heading: 'Education', number: prevHeadings.length + 1 },
    ]);
  };

  // Triggers the deletion of a form section at the specified index
  const handleDeleteInput = (index) => {
    onDeleteForm(index);
  }
  
  // JSX Code to display education information
  return (
    <div className='education-info'>
      <div className='education-header'>
          <span className='number-icon'>2</span> -
          <FaGraduationCap size='2em'/>
          <h2>Education</h2>
      </div>
      {education.map((item, index) => (
        <div key={index} className='education-content'>
        <form className='form-item'>
          <div className='input-container'>
            <label htmlFor={`schoolName-${index}`}>School Name:</label>
            <input
              type='text'
              id={`schoolName-${index}`}
              name='schoolName'
              placeholder='Enter School Name'
              value={item.schoolName}
              onChange={(e) => onChange(e, index)}
            />
          </div>
          <div className='input-container'>
            <label htmlFor={`studyTitle-${index}`}>Title of Study:</label>
            <input
              type='text'
              id={`studyTitle-${index}`}
              name='studyTitle'
              placeholder='Enter Field of Study'
              value={item.studyTitle}
              onChange={(e) => onChange(e, index)}
            />
          </div>
          <div className='input-container'>
            <label htmlFor={`studyStartDate-${index}`}>Start Date:</label>
            <input
              type='text'
              id={`studyStartDate-${index}`}
              name='studyStartDate'
              placeholder='MM/YYYY'
              value={item.studyStartDate}
              onChange={(e) => onChange(e, index)}
            />
          </div>
          <div className='input-container'>
            <label htmlFor={`studyEndDate-${index}`}>End Date:</label>
            <input
              type='text'
              id={`studyEndDate-${index}`}
              name='studyEndDate'
              placeholder='MM/YYYY'
              value={item.studyEndDate}
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
      <div className='btn-container'>
        <button className='btn-new' onClick={handleNewInput}>
          Add Education
        </button>
      </div>
    </div>
  );
};

export default EducationInfo;
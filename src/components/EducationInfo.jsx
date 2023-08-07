import { FaGraduationCap, FaTrashCan } from 'react-icons/fa6';

const EducationInfo = ({ education, onChange, onNewForm, onDeleteForm }) => {

  const handleNewInput = () => {
    onNewForm();
    setFormHeadings((prevHeadings) => [
      ...prevHeadings,
      { heading: 'Education', number: prevHeadings.length + 1 },
    ]);
  };

  const handleDeleteInput = (index) => {
    onDeleteForm(index);
  }
  
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
              onChange={(e) => onChange(e, index)} // Pass the index to identify the specific input
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
              onChange={(e) => onChange(e, index)} // Pass the index to identify the specific input
            />
          </div>
          <div className='input-container'>
            <label htmlFor={`studyStartDate-${index}`}>Start Date:</label>
            <input
              type='date'
              id={`studyStartDate-${index}`}
              name='studyStartDate'
              placeholder='Enter Start Date'
              value={item.studyStartDate}
              onChange={(e) => onChange(e, index)} // Pass the index to identify the specific input
            />
          </div>
          <div className='input-container'>
            <label htmlFor={`studyEndDate-${index}`}>End Date:</label>
            <input
              type='date'
              id={`studyEndDate-${index}`}
              name='studyEndDate'
              placeholder='Enter End Date'
              value={item.studyEndDate}
              onChange={(e) => onChange(e, index)} // Pass the index to identify the specific input
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
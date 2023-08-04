import React, { useState } from 'react';

const EducationInfo = ({ education, onChange }) => {
    return (
        <div className='education-info'>
          <h2>Education</h2>
          <form>
          <div className='input-container'>
              <label htmlFor="schoolName">School Name:</label>
              <input
                type="text"
                id="schoolName"
                name="schoolName"
                placeholder='Enter School Name'
                value={education.schoolName}
                onChange={onChange}
              />
            </div>
            <div className='input-container'>
            <label htmlFor="studyTitle">Title of Study:</label>
            <input
                type="text"
                id="studyTitle"
                name="studyTitle"
                placeholder='Enter Field of Study'
                value={education.studyTitle}
                onChange={onChange}
            />
            </div>
            <div className='input-container'>
            <label htmlFor="studyStartDate">Start Date:</label>
            <input
                type="text"
                id="studyStartDate"
                name="studyStartDate"
                placeholder='Enter Start Date'
                value={education.studyStartDate}
                onChange={onChange}
            />
            </div>
            <div className='input-container'>
            <label htmlFor="studyEndDate">End Date:</label>
            <input
                type="text"
                id="studyEndDate"
                name="studyEndDate"
                placeholder='Enter End Date'
                value={education.studyEndDate}
                onChange={onChange}
            />
            </div>
          </form>
        </div>
      );
    };

    export default EducationInfo;
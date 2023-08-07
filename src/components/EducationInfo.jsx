import React, { useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa6';

const EducationInfo = ({ education, onChange }) => {
    return (
        <div className='education-info'>
          <div className='education-header'>
          <span className='number-icon'>2</span> -
            <FaGraduationCap size='2em'/>
            <h2>Education</h2>
          </div>
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
                type="date"
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
                type="date"
                id="studyEndDate"
                name="studyEndDate"
                placeholder='Enter End Date'
                value={education.studyEndDate}
                onChange={onChange}
            />
            </div>
            <button className='btn-new'>Add Education</button>
          </form>
        </div>
      );
    };

    export default EducationInfo;
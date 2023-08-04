import React, { useState } from 'react';

const ExperienceInfo = ({ experience, onChange }) => {
    return (
        <div className='experience-info'>
          <h2>Experience</h2>
          <form>
          <div className='input-container'>
              <label htmlFor="companyName">Company Name:</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                placeholder='Enter Company Name'
                value={experience.companyName}
                onChange={onChange}
              />
            </div>
            <div className='input-container'>
            <label htmlFor="positionTitle">Position Title:</label>
            <input
                type="text"
                id="positionTitle"
                name="positionTitle"
                placeholder='Enter Position'
                value={experience.positionTitle}
                onChange={onChange}
            />
            </div>
            <div className='input-container'>
            <label htmlFor="experienceStartDate">Start Date:</label>
            <input
                type="text"
                id="experienceStartDate"
                name="experienceStartDate"
                placeholder='Enter Start Date'
                value={experience.experienceStartDate}
                onChange={onChange}
            />
            </div>
            <div className='input-container'>
            <label htmlFor="experienceEndDate">End Date:</label>
            <input
                type="text"
                id="experienceEndDate"
                name="experienceEndDate"
                placeholder='Enter End Date'
                value={experience.experienceEndDate}
                onChange={onChange}
            />
            </div>
            <div className='input-container'>
            <label htmlFor="companyLocation">Location:</label>
            <input
                type="text"
                id="companyLocation"
                name="companyLocation"
                placeholder='Enter Location'
                value={experience.companyLocation}
                onChange={onChange}
            />
            </div>
            <div className='input-container'>
            <label htmlFor="experienceDescription">Description:</label>
            <input
                type="text"
                id="experienceDescription"
                name="experienceDescription"
                placeholder='Enter Description'
                value={experience.experienceDescription}
                onChange={onChange}
            />
            </div>
            {/* Add more input fields for other personal information (e.g., date of birth, nationality, etc.) */}
          </form>
        </div>
      );
    };

    export default ExperienceInfo;
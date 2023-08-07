import React, { useState } from 'react';
import { FaSuitcase } from 'react-icons/fa6';

const ExperienceInfo = ({ experience, onChange, onNewForm }) => {
    return (
        <div className='experience-info'>
          <div className='experience-header'>
            <span className='number-icon'>3</span> -
            <FaSuitcase size='2em'/>
            <h2>Experience</h2>
          </div>
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
                type="date"
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
                type="date"
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
            <textarea
                type="text"
                id="experienceDescription"
                name="experienceDescription"
                placeholder='Enter Description'
                value={experience.experienceDescription}
                onChange={onChange}
            />
            </div>
            <button className='btn-new' onClick={onNewForm}>Add Experience</button>
          </form>
        </div>
      );
    };

    export default ExperienceInfo;
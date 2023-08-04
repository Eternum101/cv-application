import React, { useState } from 'react';

const PersonalInfo = ({ personalInfo, onChange }) => {
    return (
        <div className='personal-info'>
          <h2>Personal Information</h2>
          <form>
          <div className='input-container'>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder='Enter Title'
                value={personalInfo.title}
                onChange={onChange}
              />
            </div>
            <div className='input-container'>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder='Enter First Name'
                value={personalInfo.firstName}
                onChange={onChange}
              />
            </div>
            <div className='input-container'>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder='Enter Last Name'
                value={personalInfo.lastName}
                onChange={onChange}
              />
            </div>
            <div className='input-container'>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder='Enter Email'
                value={personalInfo.email}
                onChange={onChange}
              />
            </div>
            <div className='input-container'>
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder='Enter Phone Number'
                value={personalInfo.phone}
                onChange={onChange}
              />
            </div>
            <div className='input-container'>
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder='Enter Address'
                value={personalInfo.address}
                onChange={onChange}
              />
            </div>
            <div className='input-container'>
              <label htmlFor="aboutMe">About Me:</label>
              <input
                type="text"
                id="aboutMe"
                name="aboutMe"
                placeholder='Enter Description'
                className='input-about'
                value={personalInfo.aboutMe}
                onChange={onChange}
              />
            </div>
            {/* Add more input fields for other personal information (e.g., date of birth, nationality, etc.) */}
          </form>
        </div>
      );
    };

    export default PersonalInfo;
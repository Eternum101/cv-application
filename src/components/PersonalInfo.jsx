// Import React & React Icons
import React from 'react';
import { FaAddressCard } from 'react-icons/fa6';

const PersonalInfo = ({ personalInfo, onChange }) => {
    // JSX Code to display personal information
    return (
        <div className='personal-info'>
          <div className='personal-header'>
            <span className='number-icon'>1</span> -
            <FaAddressCard size="2em"/> 
            <h2>Personal Information</h2>
          </div>
          <form>
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
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder='eg. Web Developer'
                value={personalInfo.title}
                onChange={onChange}
              />
            </div>
            <div className='input-container'>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder='eg. johndoe@gmail.com'
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
                placeholder='eg. 0425687125'
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
                placeholder='eg. JohnDoe, Way, 1234'
                value={personalInfo.address}
                onChange={onChange}
              />
            </div>
            <div className='input-container'>
              <label htmlFor="aboutMe">About Me:</label>
              <textarea
                type="text"
                id="aboutMe"
                name="aboutMe"
                placeholder='Tell us about yourself!'
                className='input-about'
                value={personalInfo.aboutMe}
                onChange={onChange}
              />
            </div>
          </form>
        </div>
      );
    };

    export default PersonalInfo;
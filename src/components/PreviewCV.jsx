// Import React & React Icons
import React from "react";
import { FaMobileScreenButton, FaLocationDot, FaRegEnvelope} from 'react-icons/fa6';

const PreviewCV = ({ personalInfo, education, experience }) => {

  // JSX Code to display preview cv
  return (
    <div className="prev-cv">
      <div className="cv-header">
        <h2>{personalInfo.firstName} {personalInfo.lastName}</h2>
        <h3>{personalInfo.title}</h3>
        <div className="cv-contact">
        <div className="cv-icons">
          <FaRegEnvelope size='1.1em'/><p>{personalInfo.email}</p>
        </div>
        <div className="cv-icons">
          <FaMobileScreenButton size='1.1em'/><p>{personalInfo.phone}</p>
        </div>
        <div className="cv-icons">
          <FaLocationDot size='1.1em'/><p>{personalInfo.address}</p>
        </div>
      </div>
      </div>
      <div className="cv-personal">
        <div className="cv-aboutme">
          <p>{personalInfo.aboutMe}</p>
        </div>
      </div>
      <div className="cv-education">
        <h3>Education</h3>
        <ul>
          {education.map((item, index) => (
            <li key={index}>
              <div className="cv-date">
                <p>{item.studyStartDate} - {item.studyEndDate}</p>
              </div>
              <div className="cv-education-desc">
                <h4>{item.schoolName}</h4>
                <p>{item.studyTitle}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="cv-experience">
        <h3>Experience</h3>
        <ul>
          {experience.map((item, index) => (
            <li key={index}>
              <div className="cv-date">
                <p>{item.experienceStartDate} - {item.experienceEndDate}</p>
                <p>{item.companyLocation}</p>
              </div>
              <div className="cv-experience-desc">
                <h4>{item.companyName}</h4>
                <p>{item.positionTitle}</p>
              <div>
              <p>{item.experienceDescription}</p>
              </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PreviewCV;

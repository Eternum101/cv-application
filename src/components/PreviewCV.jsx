const PreviewCV = ({ personalInfo, education, experience }) => {
    return (
      <div className="prev-resume">
  <div className="resume-header">
    <h2>{personalInfo.firstName} {personalInfo.lastName}</h2>
    <h3>{personalInfo.title}</h3>
  </div>
  <div className="resume-personal">
    <div className="resume-contact">
      {/* Display Personal Information */}
      <h4>Contact</h4>
      <p>{personalInfo.email}</p>
      <p>{personalInfo.phone}</p>
      <p>{personalInfo.address}</p>
    </div>
    <div className="resume-aboutme">
      {/* Display About Me */}
      <h4>About Me</h4>
      <p>{personalInfo.aboutMe}</p>
    </div>
  </div>
  <div className="resume-education">
    <h3>Education</h3>
    <ul>
      <li>
        <div className="resume-date">
          {/* Display Start Date and End Date */}
          <p>{education.studyStartDate} - {education.studyEndDate}</p>
        </div>
        <div className="resume-education-desc">
          {/* Display Education Information */}
          <h4>{education.schoolName}</h4>
          <p>{education.studyTitle}</p>
        </div>
      </li>
      {/* Add more education items here as separate li elements */}
    </ul>
  </div>
  <div className="resume-experience">
    <h3>Experience</h3>
    <ul>
      <li>
        <div className="resume-date">
          {/* Display Start Date and End Date */}
          <p>{experience.experienceStartDate} - {experience.experienceEndDate}</p>
          <p>{experience.companyLocation}</p>
        </div>
        <div className="resume-experience-desc">
          {/* Display Experience Information */}
          <h4>{experience.companyName}</h4>
          <p>{experience.positionTitle}</p>
          <p>{experience.experienceDescription}</p>
        </div>
      </li>
      {/* Add more experience items here as separate li elements */}
    </ul>
  </div>
</div>
    );
  };
  
  export default PreviewCV;
  
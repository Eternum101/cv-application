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
          <h4>About Me</h4>
          <p>{personalInfo.aboutMe}</p>
        </div>
      </div>
      <div className="resume-education">
          {/* Display Education Information */}
          <h3>Education</h3>
          <hr></hr>
        <div className="resume-education-desc"></div>
          <p>{education.studyStartDate}</p>
          <p>{education.studyEndDate}</p>
          <p>{education.schoolName}</p>
          <p>{education.studyTitle}</p>
        <div>
      </div>
          {/* Display Experience Information */}
          <h3>Experience</h3>
          <p>Company: {experience.companyName}</p>
          <p>Position: {experience.positionTitle}</p>
          <p>Start Date: {experience.experienceStartDate}</p>
          <p>End Date: {experience.experienceEndDate}</p>
          <p>Location: {experience.companyLocation}</p>
          <p>Description: {experience.experienceDescription}</p>
        </div>
      </div>
    );
  };
  
  export default PreviewCV;
  
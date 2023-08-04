const PreviewCV = ({ personalInfo, education, experience }) => {
    return (
      <div className="prev-resume">
        <div className="resume-header">
          <h2>{personalInfo.firstName} {personalInfo.lastName}</h2>
          <h3>{personalInfo.title}</h3>
        </div>
        <div className="resume-contact">
          {/* Display Personal Information */}
          <p>Email: {personalInfo.email}</p>
          <p>Phone: {personalInfo.phone}</p>
          <p>Address: {personalInfo.address}</p>
  
          {/* Display Education Information */}
          <h3>Education</h3>
          <p>School: {education.schoolName}</p>
          <p>Study: {education.studyTitle}</p>
          <p>Start Date: {education.studyStartDate}</p>
          <p>End Date: {education.studyEndDate}</p>
        </div>
        <div>
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
  
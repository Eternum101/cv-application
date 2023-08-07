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
          {education.map((item, index) => (
            <li key={index}>
              <div className="resume-date">
                {/* Display Start Date and End Date */}
                <p>{item.studyStartDate} - {item.studyEndDate}</p>
              </div>
              <div className="resume-education-desc">
                {/* Display Education Information */}
                <h4>{item.schoolName}</h4>
                <p>{item.studyTitle}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="resume-experience">
        <h3>Experience</h3>
        <ul>
          {experience.map((item, index) => (
            <li key={index}>
              <div className="resume-date">
                {/* Display Start Date and End Date */}
                <p>{item.experienceStartDate} - {item.experienceEndDate}</p>
                <p>{item.companyLocation}</p>
              </div>
              <div className="resume-experience-desc">
                {/* Display Experience Information */}
                <h4>{item.companyName}</h4>
                <p>{item.positionTitle}</p>
                <p>{item.experienceDescription}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PreviewCV;

// Import React, React Icons & html2pdf
import React from 'react';
import html2pdf from 'html2pdf.js';
import { FaDownload, FaGithub } from 'react-icons/fa6'; 

const Header = () => {
  
  // Generates and downloads a PDF version of the cv preview. Uses the html2pdf library
  // to achieve this
  const handleDownloadCV = () => {
    const cvContainer = document.querySelector('.prev-resume');

    const options = {
      margin: 10,
      filename: 'cv_preview.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, logging: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().from(cvContainer).set(options).save();
  };

  // JSX Code to display header
  return (
      <header className="header">
          <h1>CV<span>Builder</span></h1>
      <div className="header-buttons">
          <button onClick={handleDownloadCV}><FaDownload size='1.1em'/>Download</button>
        <a href="https://github.com/Eternum101/cv-application" target="_blank" rel="noopener noreferrer">
          <button><FaGithub size='1.1em'/>Source Code</button>
        </a>
      </div>
      </header>
    )
}

export default Header;
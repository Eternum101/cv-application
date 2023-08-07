import React from 'react';
import html2pdf from 'html2pdf.js';

const Header = ({ cvData }) => {
  const handleDownloadCV = () => {
    const cvContainer = document.querySelector('.prev-resume'); // Use the correct selector for the container

    // Configuration for the PDF generation
    const options = {
      margin: 10,
      filename: 'cv_preview.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, logging: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    // Generate the PDF
    html2pdf().from(cvContainer).set(options).save();
  };

    return (
        <header className="header">
            <h1>CV<span>Builder</span></h1>
        <div className="header-buttons">
            <button onClick={handleDownloadCV}>Download</button>
            <button>Share</button>
        </div>
        </header>
    )
}

export default Header;
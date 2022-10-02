import React from 'react';
import ghLogo from '../../assets/images/GitHub-Mark-64px.png';
import linkedinLogo from '../../assets/images/linkedin-logo.png';

function Credit({ ghName, ghLink, linkedinLink }: Record<string, string>) {
  return (
    <div className="credit">
      <span>{ghName}</span>
      <a
        className="copyright-link"
        href={ghLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={ghLogo} className="credit-img" alt="github" />
      </a>
      <a
        className="copyright-link"
        href={linkedinLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedinLogo} className="credit-img" alt="linkedin" />
      </a>
    </div>
  );
}

export default Credit;

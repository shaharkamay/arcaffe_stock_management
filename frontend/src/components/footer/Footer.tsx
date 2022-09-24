import React from 'react';
import "../../assets/styles/footer.css";
import Credit from './Credit';

const Footer = (): JSX.Element => {
  return (
    <footer>
      <div className="container">
        <div className="copyright">
          <div className="copyright-item">© Copyright 2022</div>
          <div className="copyright-item">
            <Credit
              ghLink="https://github.com/shaharkamay"
              ghName="Shahar Kamay"
              linkedinLink="https://www.linkedin.com/in/shahar-kamay/"
            />
          </div>
          <div className="copyright-item">
            <Credit
              ghLink="https://github.com/meandean17"
              ghName="Dean Shalev"
              linkedinLink="https://www.linkedin.com/in/dean-shalev-04565a223/"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
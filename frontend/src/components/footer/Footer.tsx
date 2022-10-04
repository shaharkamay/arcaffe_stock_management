import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../assets/styles/footer.css';
import Credit from './Credit';

const Footer = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const changeLanguage = (lng: string) => {
    void i18n.changeLanguage(lng);
  };

  return (
    <footer>
      <div className="container" style={{ display: 'flex' }}>
        <div className="copyright">
          <div className="copyright-item">{t('footer.copyright')}</div>
          <div className="copyright-item">
            <Credit
              ghLink="https://github.com/shaharkamay"
              ghName={t('footer.shahar')}
              linkedinLink="https://www.linkedin.com/in/shahar-kamay/"
            />
          </div>
          <div className="copyright-item">
            <Credit
              ghLink="https://github.com/meandean17"
              ghName={t('footer.dean')}
              linkedinLink="https://www.linkedin.com/in/dean-shalev-04565a223/"
            />
          </div>
        </div>
        {lang === 'he' ? (
          <button
            className="lng-button"
            onClick={() => {
              changeLanguage('en');
            }}
          >
            <span className="lng-button-text">HE</span>
          </button>
        ) : (
          <button
            className="lng-button"
            onClick={() => {
              changeLanguage('he');
            }}
          >
            <span className="lng-button-text">EN</span>
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
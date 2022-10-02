import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../assets/styles/footer.css';
import { SelectList } from '../';
import Credit from './Credit';

const Footer = (): JSX.Element => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    void i18n.changeLanguage(lng);
  };

  return (
    <footer>
      <div className="container">
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
      </div>
      <SelectList
        initialValue="he"
        onChange={(e) => changeLanguage((e.target as HTMLSelectElement).value)}
        list={[
          { value: 'he', displayName: 'he' },
          { value: 'en', displayName: 'en' },
        ]}
      />
    </footer>
  );
};

export default Footer;
import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../../../context/Theme';

function SelectTheme() {
  const { t } = useTranslation();
  const { setTheme } = useContext(ThemeContext);
  const [selectValue, setSelectValue] = useState(
    localStorage.getItem('theme') || 'theme-auto'
  );
  return (
    <select
      value={selectValue ? selectValue.split('-')[1] : 'auto'}
      className="select-theme"
      id="select-theme"
      onChange={(e) => {
        localStorage.setItem('theme', `theme-${e.target.value}`);
        setSelectValue(e.target.value);
        setTheme(`theme-${e.target.value}`);
      }}
    >
      <option value="auto">{t('header.theme.auto')}</option>
      <option value="light">{t('header.theme.light')}</option>
      <option value="dark">{t('header.theme.dark')}</option>
    </select>
  );
}

export default SelectTheme;

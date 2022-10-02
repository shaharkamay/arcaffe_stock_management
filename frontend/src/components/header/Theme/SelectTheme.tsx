import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../../../context/Theme';
import { SelectList } from '../../';

function SelectTheme() {
  const { t } = useTranslation();
  const { setTheme } = useContext(ThemeContext);
  return (
    <SelectList
      initialValue={localStorage.getItem('theme') || 'theme-auto'}
      onChange={(e) => {
        localStorage.setItem(
          'theme',
          `theme-${(e.target as HTMLSelectElement).value}`
        );
        setTheme(`theme-${(e.target as HTMLSelectElement).value}`);
      }}
      list={[
        { value: 'auto', displayName: t('header.theme.auto') },
        { value: 'light', displayName: t('header.theme.light') },
        { value: 'dark', displayName: t('header.theme.dark') },
      ]}
    />
  );
}

export default SelectTheme;

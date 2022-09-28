import React from 'react';
import { useTranslation } from 'react-i18next';
import Item from './Item';

const List = (
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLUListElement> &
    React.HTMLAttributes<HTMLUListElement>
): JSX.Element => {
  const { t } = useTranslation();
  return (
    <ul {...props}>
      <Item to="/arcaffe_stock_management">{t('header.home')}</Item>
      <Item to="/arcaffe_stock_management/login">{t('header.login')}</Item>
      <Item to="/arcaffe_stock_management/summary">{t('header.summary')}</Item>
    </ul>
  );
};

export default List;
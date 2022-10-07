import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { getLocalStockList } from '../../utils';

const Wrapper = styled.div.attrs(() => ({ className: 'container' }))`
  padding: 1rem 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid var(--background);
  background-color: var(--background-secondary);
  border-bottom: 2px solid var(--clr-primary);
  border-radius: 4px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.05),
    0px 20px 20px rgba(0, 0, 0, 0.05), 0px 30px 20px rgba(0, 0, 0, 0.05);
`;

const Tr = styled.tr``;

const Th = styled.th`
  font-family: var(--font-title);
  font-weight: normal;
  font-size: 1.2rem;
  color: var(--clr-light);
  border: 1px solid var(--background);
  padding: 0.5rem 1rem;
  background-color: var(--clr-primary);
`;

const Td = styled.td`
  padding: 0.2rem 0.5rem;
  color: var(--foreground-secondary);
  border: 1px solid var(--background);
`;

const Summary = () => {
  const { t } = useTranslation();

  const stockList = getLocalStockList();
  return (
    <Wrapper>
      <Table>
        <thead>
          <Tr>
            <Th>{t('summary.name')}</Th>
            <Th>{t('summary.amount')}</Th>
            <Th>{t('summary.amountNeeded')}</Th>
            <Th>{t('summary.amountToOrder')}</Th>
          </Tr>
        </thead>
        <tbody>
          {stockList.map((item) => {
            const amountToOrder =
              item.amountNeeded - item.amount < 0
                ? 0
                : item.amountNeeded - item.amount;
            return (
              <Tr key={item.name}>
                <Td>{item.name}</Td>
                <Td>{item.amount}</Td>
                <Td>{item.amountNeeded}</Td>
                <Td>{amountToOrder}</Td>
              </Tr>
            );
          })}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default Summary;

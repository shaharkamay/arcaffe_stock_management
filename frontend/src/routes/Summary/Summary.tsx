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
  border: 1px solid var(--background-secondary);
  background-color: var(--background);
  border-bottom: 2px solid var(--clr-secondary);
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
  border: 1px solid var(--background-secondary);
  padding: 0.5rem 1rem;
  background-color: var(--clr-secondary);
`;

const Td = styled.td`
  padding: 0.2rem 0.5rem;
  color: var(--clr-secondary);
  border: 1px solid var(--background-secondary);
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
            <Th>{t('summary.amountToOrder')}</Th>
          </Tr>
        </thead>
        <tbody>
          {stockList.map((item) => {
            const amount =
              item.amountNeeded - item.count < 0
                ? 0
                : item.amountNeeded - item.count;
            return (
              <Tr key={item.name}>
                <Td>{item.name}</Td>
                <Td>{amount}</Td>
              </Tr>
            );
          })}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default Summary;

import React, { useState, ChangeEventHandler } from 'react';
import styled from 'styled-components';

const Select = styled.select`
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--clr-light);
  font-weight: 500;
  font-size: 1.2rem;
  font-family: var(--font-title);
`;

const Option = styled.option`
  color: var(--foreground);
  background-color: var(--background-secondary);
`;

const SelectList = ({
  className,
  list,
  initialValue,
  onChange,
}: {
  className?: string;
  list: { value: string; displayName: React.ReactNode }[];
  initialValue: string;
  onChange: ChangeEventHandler;
}) => {
  const [selected, setSelected] = useState(initialValue);

  return (
    <Select
      value={selected}
      className={className}
      onChange={(e) => {
        onChange(e);
        setSelected(e.target.value);
      }}
    >
      {list.map((item) => (
        <Option key={item.value} value={item.value}>
          {item.displayName}
        </Option>
      ))}
    </Select>
  );
};

export default SelectList;

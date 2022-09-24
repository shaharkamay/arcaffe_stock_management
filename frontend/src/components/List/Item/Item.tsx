import React, {useRef} from 'react';
import Button from '../../Button/Button';
import {ItemI} from '../../../@types';
import useLongPress from '../../../hooks/useLongPress';
import styled, { css } from 'styled-components';

const Wrapper = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.7rem;
  font-size: 1.2rem;
  gap: 0.5rem;
  background-color: var(--background);
  position: relative;
  box-sizing: border-box;

  & + &::before {
    position: absolute;
    margin: 0 auto;
    top: 0;
    content: '';
    width: calc(100% - 1.4rem);
    height: 1px;
    background-color: var(--background-secondary);
  }

  ${({ selected }: { selected: boolean }) =>
    selected &&
    css`
      background-color: var(--clr-quaternary);
    `};
`;

const ItemName = styled.span`
  width: 100%;
  text-align: start;
`;

const ItemCount = styled.input`
  display: inline-flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: var(--background);
  color: var(--foreground);
  font-weight: 600;
  font-size: 1rem;
  border: 3px solid var(--clr-quaternary);
  border-radius: 4px;
  box-sizing: border-box;
  height: 3rem;
  width: 3rem;
  outline: none;

  &:focus {
    border: 3px solid var(--clr-tertiary);
  }
`;

const Item = ({
  item,
  onItemClick,
  selectedItems,
  setSelectedItems,
  stockList,
  setStockList,
}: {
  item: ItemI;
  onItemClick: (e: React.TouchEvent<HTMLElement>, item: ItemI) => void;
  selectedItems: ItemI[];
  setSelectedItems: React.Dispatch<React.SetStateAction<ItemI[]>>;
  stockList: ItemI[];
  setStockList: React.Dispatch<React.SetStateAction<ItemI[]>>;
}): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onLongPress = (e: React.TouchEvent<HTMLElement>) => {
    onItemClick(e, item);
  };

  const onClick = (e: React.TouchEvent<HTMLElement>) => {
    let doesExistInSelectedItems = false;
    if ((e.target as HTMLTextAreaElement).tagName === 'INPUT') {
      return;
    }

    for (let j = 0; j < selectedItems.length; j++) {
      const selectedName = selectedItems[j].name;
      if (selectedName !== item.name) {
        doesExistInSelectedItems = true;
      }
    }
    if (doesExistInSelectedItems) {
      if ((e.target as HTMLTextAreaElement).tagName === 'BUTTON') return;
    }
    if (selectedItems.length > 0) {
      onItemClick(e, item);
    }
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };
  const { onMouseDown, onTouchStart, onMouseUp, onMouseLeave, onTouchEnd } =
    useLongPress(
      onLongPress,
      onClick,
      defaultOptions
    ) as unknown as React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >;

  const alterItemCount = (amount: number) => {
    let doesExistInSelectedItems = false;
    for (let j = 0; j < selectedItems.length; j++) {
      const selectedName = selectedItems[j].name;
      if (selectedName === item.name) {
        doesExistInSelectedItems = true;
      }
    }
    let updatedStockList: ItemI[] = [];
    let updatedSelectedItems = [];
    if (!doesExistInSelectedItems) {
      updatedStockList = stockList.map((i) => {
        if (i.name === item.name) {
          const newTotal = item.count + amount < 0 ? 0 : item.count + amount;

          return { ...item, count: newTotal };
        }
        return i;
      });
    } else {
      updatedSelectedItems = [...selectedItems];
      for (let j = 0; j < updatedSelectedItems.length; j++) {
        if (updatedSelectedItems[j].count + amount < 0)
          updatedSelectedItems[j].count = 0;
        else updatedSelectedItems[j].count += amount;
      }
      setSelectedItems(updatedSelectedItems);
      updatedStockList = [...stockList];
      for (let j = 0; j < stockList.length; j++) {
        for (let k = 0; k < updatedSelectedItems.length; k++) {
          if (stockList[j].name === updatedSelectedItems[k].name) {
            updatedStockList[j].count = updatedSelectedItems[k].count;
          }
        }
      }
    }
    localStorage.setItem('stockList', JSON.stringify(updatedStockList));
    setStockList(updatedStockList);
  };

  const setItemCount = (e: React.FocusEvent) => {
    if ((e.target as HTMLTextAreaElement).value === '') return;
    const updatedStockList = stockList.map((i) => {
      if (i.name === item.name) {
        return {
          ...item,
          count:
            Number((e.target as HTMLTextAreaElement).value) < 0
              ? 0
              : Number((e.target as HTMLTextAreaElement).value),
        };
      }
      return i;
    });
    setStockList(() => {
      localStorage.setItem('stockList', JSON.stringify(updatedStockList));
      return [...updatedStockList];
    });
  };

  if (inputRef.current?.value) {
    inputRef.current.value = '';
  }

  return (
    <Wrapper
      selected={selectedItems.filter((i) => i.name === item.name).length > 0}
      {...{
        onMouseDown,
        onTouchStart,
        onMouseUp,
        onMouseLeave,
        onTouchEnd,
      }}
    >
      <Button
        onClick={(e) => {
          e.stopPropagation();
          alterItemCount(-5);
        }}
      >
        -5
      </Button>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          alterItemCount(-1);
        }}
      >
        -
      </Button>
      <ItemName>{item.name} </ItemName>
      <ItemCount
        type="text"
        onBlur={setItemCount}
        disabled={Boolean(selectedItems.length)}
        placeholder={item.count.toString()}
        ref={inputRef}
      />
      <Button
        onClick={(e) => {
          e.stopPropagation();
          alterItemCount(1);
        }}
      >
        +
      </Button>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          alterItemCount(5);
        }}
      >
        +5
      </Button>
    </Wrapper>
  );
};

export default Item;
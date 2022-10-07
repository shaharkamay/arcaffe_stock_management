import React, { useRef } from 'react';
import { Button } from '../../../components';
import { ItemI } from '../../../@types';
import { useLongPress } from '../../../hooks';
import styled, { css } from 'styled-components';
import checkMarkSvg from '../../../assets/images/check_circle.svg';
import { useItemsMutations } from '../queries';

const Wrapper = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.7rem;
  font-size: 1.2rem;
  gap: 0.5rem;
  background-color: var(--background-secondary);
  position: relative;
  box-sizing: border-box;
  cursor: move;
  color: var(--foreground);

  &::after {
    position: absolute;
    margin: 0 auto;
    top: 0;
    content: '';
    width: calc(100% - 1.4rem);
    height: 1px;
    background-color: var(--background);
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
  user-select: none;
  font-size: 1rem;
  word-break: break-all;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Check = styled.img`
  width: 1.2rem;
  height: 1.2rem;
`;

const AmountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const ItemAmount = styled.input<{ belowAmountNeeded?: boolean }>`
  display: inline-flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: ${({
    belowAmountNeeded,
  }: {
    belowAmountNeeded?: boolean;
  }) => (belowAmountNeeded ? '#ffc8c8' : '#c2ffc2')};
  color: var(--foreground);
  font-weight: 600;
  font-size: 1rem;
  border: 3px solid var(--clr-quaternary);
  border-radius: 4px;
  box-sizing: border-box;
  width: 3rem;
  outline: none;

  &:focus {
    border: 3px solid var(--clr-tertiary);
    background-color: var(--background-secondary);
    &::placeholder {
      color: transparent;
    }
  }
`;

const ItemAmountNeeded = styled(ItemAmount)`
  background-color: var(--clr-primary);
  color: var(--clr-light);
  border-width: 3px;
  border-radius: 999px;

  &::placeholder {
    color: var(--clr-light);
  }
  &:focus {
    color: var(--foreground);
  }
`;

const Item = ({
  item,
  onItemClick,
  selectedItemsIds
}: {
  item: ItemI;
  onItemClick: (e: React.TouchEvent<HTMLElement>, item: ItemI) => void;
  selectedItemsIds: string[];
}): JSX.Element => {
  const {updateItemMutation} = useItemsMutations();

  const inputRef = useRef<HTMLInputElement>(null);

  const onLongPress = (e: React.TouchEvent<HTMLElement>) => {
    navigator?.vibrate?.(1);
    onItemClick(e, item);
  };

  const onClick = (e: React.TouchEvent<HTMLElement>) => {
    let doesExistInSelectedItems = false;
    if ((e.target as HTMLTextAreaElement).tagName === 'INPUT') {
      return;
    }

    for (let j = 0; j < selectedItemsIds.length; j++) {
      const id = selectedItemsIds[j];
      if (id !== item.id) {
        doesExistInSelectedItems = true;
      }
    }
    if (doesExistInSelectedItems) {
      if ((e.target as HTMLTextAreaElement).tagName === 'BUTTON') return;
    }
    if (selectedItemsIds.length > 0) {
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

  const alterItemAmount = (amount: number) => {
    let doesExistInSelectedItems = false;
    selectedItemsIds.forEach(id => {
      if(id === item.id)
        doesExistInSelectedItems = true;
    });

    if (!doesExistInSelectedItems) 
      updateItemMutation.mutate({...item, amount: item.amount + amount});
    else {
      selectedItemsIds.forEach(() => {
        // updateItemMutation.mutate({id, amount: selectedItem.amount + amount});
      });
    }
  };

  const setItemAmount = (e: React.FocusEvent) => {
    if ((e.target as HTMLTextAreaElement).value === '') return;
    const amount =
      Number((e.target as HTMLTextAreaElement).value) < 0
        ? 0
        : Number((e.target as HTMLTextAreaElement).value);
      
    updateItemMutation.mutate({...item, amount});
    (e.target as HTMLTextAreaElement).value = '';
  };

  const setItemAmountNeeded = (e: React.FocusEvent) => {
    if ((e.target as HTMLTextAreaElement).value === '') return;
    const amountNeeded =
      Number((e.target as HTMLTextAreaElement).value) < 0
        ? 0
        : Number((e.target as HTMLTextAreaElement).value);

    updateItemMutation.mutate({...item, amountNeeded});
    (e.target as HTMLTextAreaElement).value = '';
  };

  if (inputRef.current?.value) {
    inputRef.current.value = '';
  }

  const selected = selectedItemsIds.filter((id) => id === item.id).length > 0;

  return (
    <Wrapper
      selected={selected}
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
          alterItemAmount(-1);
        }}
      >
        -
      </Button>
      <ItemName>
        {item.name}
        {selected && <Check src={checkMarkSvg} />}
      </ItemName>
      <AmountWrapper>
        <ItemAmount
          type="text"
          onBlur={setItemAmount}
          disabled={Boolean(selectedItemsIds.length)}
          placeholder={item.amount.toString()}
          belowAmountNeeded={item.amount < item.amountNeeded}
          ref={inputRef}
        />
        <ItemAmountNeeded
          type="text"
          onBlur={setItemAmountNeeded}
          disabled={Boolean(selectedItemsIds.length)}
          placeholder={item.amountNeeded.toString()}
          ref={inputRef}
        />
      </AmountWrapper>

      <Button
        onClick={(e) => {
          e.stopPropagation();
          alterItemAmount(1);
        }}
      >
        +
      </Button>
    </Wrapper>
  );
};

export default Item;

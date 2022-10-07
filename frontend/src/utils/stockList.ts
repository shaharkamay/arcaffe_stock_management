import { ItemI } from '../@types';

export const updateLocalStockList = (stockList: ItemI[]) => {
  localStorage.setItem('stockList', JSON.stringify(stockList));
};

export const getLocalStockList = () => {
  const localStockList: string = localStorage.getItem('stockList') || '[]';
  const parsedStockList: ItemI[] = JSON.parse(localStockList) as ItemI[];
  return parsedStockList;
};

export const setItemKeyValue = (
  stockList: ItemI[],
  item: ItemI,
  value: unknown,
  key: string
) => {
  const updatedStockList = stockList.map((i) => {
    if (i.name === item.name) {
      return {
        ...item,
        [key]: value,
      };
    }
    return i;
  });

  return updatedStockList;
};

export const updateItemAmount = (
  stockList: ItemI[],
  item: ItemI,
  amountToAdd: number
) => {
  const updatedStockList = stockList.map((i) => {
    if (i.name === item.name) {
      return {
        ...item,
        amount: item.amount + amountToAdd < 0 ? 0 : item.amount + amountToAdd,
      };
    }
    return i;
  });

  return updatedStockList;
};

export const updateAllItemsAmount = (
  stockList: ItemI[],
  amountToAdd: number
) => {
  const updatedStockList = stockList.map((i) => {
    return {
      ...i,
      amount: i.amount + amountToAdd < 0 ? 0 : i.amount + amountToAdd,
    };
  });

  return updatedStockList;
};

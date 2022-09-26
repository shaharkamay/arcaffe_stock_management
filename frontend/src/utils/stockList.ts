import { ItemI } from '../@types';

export const updateLocalStockList = (stockList: ItemI[]) => {
  localStorage.setItem('stockList', JSON.stringify(stockList));
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

export const updateItemCount = (
  stockList: ItemI[],
  item: ItemI,
  amountToAdd: number
) => {
  const updatedStockList = stockList.map((i) => {
    if (i.name === item.name) {
      return {
        ...item,
        count: item.count + amountToAdd < 0 ? 0 : item.count + amountToAdd,
      };
    }
    return i;
  });

  return updatedStockList;
};

export const updateAllItemsCount = (
  stockList: ItemI[],
  amountToAdd: number
) => {
  const updatedStockList = stockList.map((i) => {
    return {
      ...i,
      count: i.count + amountToAdd < 0 ? 0 : i.count + amountToAdd,
    };
  });

  return updatedStockList;
};

import { useState } from 'react';

export const useSelection = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const addItem = (item) => {
    const selectedItemCopy = [...selectedItems];
    selectedItemCopy.push(item);
    setSelectedItems(selectedItemCopy);
    return selectedItemCopy;
  };

  const removeItem = (item) => {
    let selectedItemsCopy = [...selectedItems];
    if (selectedItemsCopy.includes(item)) {
      let idx = selectedItemsCopy.indexOf(item);
      selectedItemsCopy = [
        ...selectedItems.slice(0, idx),
        ...selectedItems.slice(idx + 1),
      ];
      setSelectedItems(selectedItemsCopy);
      return selectedItemsCopy;
    }
  };

  const handleSelect = (item) => {
    if (selectedItems.includes(item)) {
      removeItem(item);
    } else {
      addItem(item);
    }
  };

  return [selectedItems, { handleSelect }];
};

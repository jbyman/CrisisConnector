import { useState } from 'react';

export const useSelection = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const addItem = (item) => {
    const selectedItemCopy = [...selectedItems];
    selectedItemCopy.push(item);
    setSelectedItems(selectedItemCopy);
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

export const useForm = () => {
  const [form, setForm] = useState({
    currencyAmt: 0,
    currency: '',
    maskAmt: 0,
    maskType: '',
    sanitizerAmt: 0,
    faceShieldsAmt: 0,
    wipesAmt: 0,
    other: 0,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const isNum = isNaN(value);

    setForm({
      ...form,
      [e.target.name]: isNum ? value : parseInt(value),
    });
  };

  return [form, { handleChange }];
};

import { useState } from 'react';

export const useForm = () => {
  const [form, setForm] = useState({
    currencyAmt: 0,
    currency: '',
    maskAmt: 0,
    maskType: '',
    'Hand sanitizer': 0,
    'Face shields': 0,
    'Disinfecting wipes': 0,
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

  // some ugly code to reset form if user de-selects (hacky given our app has only 1 page and we can't unmount page to clear)
  const clearSelectedFormField = (item) => {
    switch (item) {
      case 'Money':
        return setForm({ ...form, currencyAmt: 0, currency: '' });
      case 'Masks':
        return setForm({ ...form, maskAmt: 0, maskType: '' });
      case 'Hand Sanitizer':
        return setForm({ ...form, 'Hand sanitizer': 0 });
      case 'Face Shields':
        return setForm({ ...form, 'Face shields': 0 });
      case 'Disinfecting Wipes':
        return setForm({ ...form, 'Disinfecting wipes': 0 });
      case 'Other':
        return setForm({ ...form, other: 0 });
      default:
        return;
    }
  };

  return [form, { handleChange, clearSelectedFormField }];
};

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

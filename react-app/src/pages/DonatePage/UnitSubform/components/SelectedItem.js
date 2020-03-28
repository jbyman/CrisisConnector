import React from 'react';

import TextField from 'components/TextField';
import Select from 'components/Select';

const maskTypes = ['N95', 'P95', 'R95', 'Surgical masks', 'Homemade masks'];

const SelectedItem = ({ item }) => {
  const itemMap = {
    Money: (
      <>
        <label>{'I can donate'}</label>
        <TextField width={'5rem'} />
        <div>{'in'}</div>
        {/* <Select>todo</Select> */}
      </>
    ),
    Masks: (
      <>
        <label>{'I can donate'}</label>
        <TextField width={'5rem'} />
        <TextField width={'5rem'} />
        <div>{'masks.'}</div>
      </>
    ),
    'Hand Sanitizer': (
      <>
        <label>{'I can donate'}</label>
        <TextField width={'5rem'} />
        <div>{'mL of hand sanitizer.'}</div>
      </>
    ),
    'Face Shields': (
      <>
        <label>{'I can donate'}</label>
        <TextField width={'5rem'} />
        <div>{'face shields.'}</div>
      </>
    ),
    'Disinfecting Wipes': (
      <>
        <label>{'I can donate'}</label>
        <TextField width={'5rem'} />
        <div>{'pack disinfecting wipes.'}</div>
      </>
    ),
    Other: (
      <>
        <label>{'I can donate'}</label>
        <TextField width={'5rem'} />
      </>
    ),
  };

  return itemMap[item];
};

export default SelectedItem;

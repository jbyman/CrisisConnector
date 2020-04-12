import React from 'react';
import { css } from 'styled-components/macro';

import TextField from 'components/TextField';
import Select from 'components/Select';
import { MASK_TYPES } from '../../../../helpers/maskTypes';

const CURRENCIES = ['USD', 'GBP', 'IDR'];

const SelectedItem = ({ item, form, handleChange }) => {
  switch (item) {
    case 'Money':
      return (
        <>
          <label>{'I can donate'}</label>
          <TextField
            value={form.currencyAmt}
            name="currencyAmt"
            handleChange={handleChange}
            type="number"
          />
          <div
            css={css`
              &&& {
                margin-right: 0;
              }
            `}
          >
            {'in'}
          </div>
          <Select
            label="mask"
            width={'10rem'}
            value={form.currency}
            name="currency"
            onChange={handleChange}
            placeholder="Select"
            type="text"
          >
            {CURRENCIES.map((currency) => (
              <option key={currency}>{currency}</option>
            ))}
          </Select>
        </>
      );

    case 'Masks':
      return (
        <>
          <label>{'I can donate'}</label>
          <TextField
            width={'7rem'}
            value={form.maskAmt}
            name="maskAmt"
            handleChange={handleChange}
            type="number"
          />
          <Select
            width={'10rem'}
            value={form.maskType}
            name="maskType"
            onChange={handleChange}
            placeholder="Select"
            type="text"
          >
            {MASK_TYPES.map((mask) => (
              <option key={mask}>{mask}</option>
            ))}
          </Select>
          <div>{'masks.'}</div>
        </>
      );

    case 'Hand Sanitizer':
      return (
        <>
          <label>{'I can donate'}</label>
          <TextField
            width={'7rem'}
            value={form['Hand sanitizer']}
            name="Hand sanitizer"
            handleChange={handleChange}
            type="number"
          />
          <div>{'mL of hand sanitizer.'}</div>
        </>
      );

    case 'Face Shields':
      return (
        <>
          <label>{'I can donate'}</label>
          <TextField
            width={'7rem'}
            value={form['Face shields']}
            name="Face shields"
            handleChange={handleChange}
            type="number"
          />
          <div>{'face shields.'}</div>
        </>
      );

    case 'Disinfecting Wipes':
      return (
        <>
          <label>{'I can donate'}</label>
          <TextField
            width={'7rem'}
            value={form['Disinfecting wipes']}
            name="Disinfecting wipes"
            handleChange={handleChange}
            type="number"
          />
          <div>{'pack of disinfecting wipes.'}</div>
        </>
      );

    case 'Other':
      return (
        <>
          <label>{'I can donate'}</label>
          <TextField
            width={'7rem'}
            value={form.other}
            name="other"
            handleChange={handleChange}
            type="number"
          />
          <div>{'other items.'}</div>
        </>
      );

    default:
      return <div />;
  }
};

export default SelectedItem;

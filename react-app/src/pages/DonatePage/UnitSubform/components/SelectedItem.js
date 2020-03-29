import React from 'react';
import { css } from 'styled-components/macro';

import TextField from 'components/TextField';
import Select from 'components/Select';

const MASK_TYPES = ['N95', 'P95', 'R95', 'Surgical masks', 'Homemade masks'];
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
          />
          <Select
            width={'10rem'}
            value={form.maskType}
            name="maskType"
            onChange={handleChange}
            placeholder="Select"
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
            value={form.sanitizerAmt}
            name="sanitizerAmt"
            handleChange={handleChange}
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
            value={form.faceShieldsAmt}
            name="faceShieldsAmt"
            handleChange={handleChange}
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
            value={form.wipesAmt}
            name="wipesAmt"
            handleChange={handleChange}
          />
          <div>{'pack disinfecting wipes.'}</div>
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
          />
          <div>{'other items.'}</div>
        </>
      );

    default:
      return <div />;
  }
};

export default SelectedItem;

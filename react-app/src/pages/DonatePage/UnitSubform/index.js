import React from 'react';
import { css } from 'styled-components/macro';

import SubformRow from './components/SubformRow';
import ContinueButton from 'components/ContinueButton';

const UnitSubform = ({
  className,
  selectedItems,
  onContinue,
  step,
  form,
  handleChange,
}) => {
  return (
    <form className={className}>
      <label
        css={css`
          margin-top: 2rem;
          font-size: 2rem;
        `}
      >
        {'Please describe:'}
      </label>
      <div
        css={css`
          margin-top: 2rem;
          & > :not(:last-child) {
            margin-bottom: 2rem;
          }
        `}
      >
        {selectedItems.map((item) => (
          <SubformRow
            key={item}
            item={item}
            form={form}
            handleChange={handleChange}
          />
        ))}
      </div>
      <div
        css={css`
          font-style: italic;
          font-size: 1.6rem;
          margin-top: 2rem;
        `}
      >
        {'Estimates are okay. Leave blank if you do not know the quantity.'}
      </div>
      {step === 2 && <ContinueButton onContinue={onContinue} />}
    </form>
  );
};

export default UnitSubform;

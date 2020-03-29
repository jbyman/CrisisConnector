import React from 'react';
import { css } from 'styled-components/macro';

import Checkbox from 'components/Checkbox';
import ContinueButton from 'components/ContinueButton';

const ItemSelect = ({
  className,
  items,
  selectedItems,
  handleSelect,
  updateStep,
  step,
}) => {
  return (
    <div className={className}>
      <label
        css={css`
          font-size: 2rem;
        `}
      >
        {'These items are in high demand. What would you like to donate?'}
      </label>
      <div
        css={css`
          display: flex;
          margin-top: 2rem;
          & > :not(:last-child) {
            margin-right: 2rem;
          }
        `}
      >
        {items.map((item) => (
          <Checkbox
            key={item}
            item={item}
            handleClick={handleSelect}
            selected={selectedItems.includes(item)}
          />
        ))}
      </div>
      {step === 1 && selectedItems.length > 0 && (
        <ContinueButton handleClick={updateStep} />
      )}
    </div>
  );
};

export default ItemSelect;

import React from 'react';
import { css } from 'styled-components/macro';

import Checkbox from 'components/Checkbox';
import ContinueButton from 'components/ContinueButton';

const ItemSelect = ({
  className,
  items,
  selectedItems,
  handleSelect,
  onContinue,
  step,
  handleClear,
}) => {
  return (
    <div className={className}>
      <label
        css={css`
          font-size: 2rem;

          @media screen and (max-width: 620px) {
            font-size: 1.5rem;
          }
        `}
      >
        {'These items are in high demand. What would you like to donate?'}
      </label>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;

          @media screen and (max-width: 620px) {
            flex-direction: column;
            align-items: center;
          }
        `}
      >
        {items.map((item) => (
          <Checkbox
            css={css`
              margin-top: 2rem;

              :not(:last-child) {
                margin-right: 3rem;

                @media screen and (max-width: 620px) {
                  margin-right: 0;
                }
              }
            `}
            key={item}
            item={item}
            handleClick={handleSelect}
            selected={selectedItems.includes(item)}
            handleClear={handleClear}
          />
        ))}
      </div>
      {step === 1 && selectedItems.length > 0 && (
        <ContinueButton onContinue={onContinue} />
      )}
    </div>
  );
};

export default ItemSelect;

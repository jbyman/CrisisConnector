import React from 'react';
import { css } from 'styled-components/macro';

import Checkbox from 'components/Checkbox';

const ItemSelect = ({ className, items, selectedItems, handleSelect }) => {
  return (
    <div className={className}>
      <div
        css={css`
          font-size: 2rem;
        `}
      >
        {'These items are in high demand. What would you like to donate?'}
      </div>
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
          />
        ))}
      </div>
    </div>
  );
};

export default ItemSelect;

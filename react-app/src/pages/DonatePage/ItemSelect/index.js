import React, { useState } from 'react';
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
          margin-top: 2rem;
          & > :not(:last-child) {
            margin-right: 3rem;
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
    </div>
  );
};

export default ItemSelect;

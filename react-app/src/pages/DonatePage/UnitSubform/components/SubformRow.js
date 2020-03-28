import React from 'react';
import { css } from 'styled-components/macro';

import SelectedItem from './SelectedItem';

const SubformRow = ({ item }) => {
  return (
    <div
      css={css`
        font-size: 1.8rem;
        display: flex;
        align-items: center;

        & > :not(:last-child) {
          margin-right: 1rem;
        }
      `}
    >
      <SelectedItem item={item} />
    </div>
  );
};

export default SubformRow;

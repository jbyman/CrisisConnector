import React from 'react';
import { css } from 'styled-components/macro';

import SelectedItem from './SelectedItem';

const SubformRow = ({ item, form, handleChange }) => {
  return (
    <div
      css={css`
        font-size: 1.8rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        & > :not(:last-child) {
          margin-right: 1rem;
        }

        @media screen and (max-width: 620px) {
          font-size: 1.5rem;
          align-items: center;

          & > :not(:last-child) {
            margin-right: 0;
          }
        }
      `}
    >
      <SelectedItem item={item} form={form} handleChange={handleChange} />
    </div>
  );
};

export default SubformRow;

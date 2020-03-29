import React from 'react';
import { css } from 'styled-components/macro';

const TextField = ({ value, name, handleChange, width, height }) => {
  return (
    <input
      type="number"
      min="0"
      css={css`
        padding: 1rem;
        outline: none;
        color: #63abce;
        font-family: Raleway, sans-serif;
        font-size: 1.8rem;
        text-align: center;
        width: ${width ? `${width}` : 'auto'};
        height: ${height ? `${height}` : 'auto'};

        max-width: 7rem;

        border: 1px solid #a7a7a7;
      `}
      name={name}
      value={value}
      onChange={handleChange}
    />
  );
};

export default TextField;

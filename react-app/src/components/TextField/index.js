import React from 'react';
import { css } from 'styled-components/macro';

const TextField = ({
  className,
  value,
  name,
  handleChange,
  width,
  height,
  type,
}) => {
  return (
    <input
      className={className}
      type={type}
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

        @media screen and (max-width: 620px) {
          max-width: 100%;
          width: auto;
          padding: 0.5rem 0;
          font-size: 1.5rem;
        }
      `}
      name={name}
      value={value}
      onChange={handleChange}
    />
  );
};

export default TextField;

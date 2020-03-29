import React from 'react';
import { css } from 'styled-components/macro';

import chevron from './chevron.svg';
import { exists } from 'helpers/form';

const Select = ({
  children,
  className,
  value,
  name,
  onChange,
  label,
  placeholder,
  width,
  height,
}) => {
  const placeholderShown = !exists(value);

  return (
    <div
      className={className}
      css={css`
        display: flex;
        position: relative;
        min-height: fit-content;

        :not(:first-child) {
          padding-left: 8px;

          @media screen and (max-width: 914px) {
            padding-left: 0;
          }
        }
      `}
    >
      <select
        css={css`
          background-color: inherit;
          border: 1px solid #a7a7a7;

          padding: 1.2rem 1.6rem;

          appearance: none;
          border-radius: 0;

          color: ${placeholderShown ? '#bfc4d1' : '#63abce'};
          font-weight: ${placeholderShown ? `500` : '400'};

          /* Chevron */
          background-repeat: no-repeat;
          background-position: right 1.6rem top 50%, 0 0;

          box-sizing: border-box;
          width: ${width ? `${width}` : 'auto'};
          height: ${height ? `${height}` : 'auto'};

          min-height: fit-content;

          font-size: 1.8rem;
          font-family: 'Raleway', sans-serif;

          background-image: url(${chevron});

          touch-action: manipulation;

          :focus + label {
            transform: translate(0, -12px) scale(1);

            font-weight: 500;

            color: #fff;
            background-color: inherit;
          }
        `}
        value={value}
        onChange={onChange}
        name={name}
      >
        {placeholder && (
          <option disabled hidden value="">
            {placeholder}
          </option>
        )}
        {children}
      </select>
    </div>
  );
};

export default Select;

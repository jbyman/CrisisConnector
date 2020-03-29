import React from 'react';
import { css } from 'styled-components/macro';

const Checkbox = ({ className, item, handleClick, selected }) => (
  <div
    className={className}
    css={css`
      display: grid;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;

      font-size: 1.8rem;
      width: 19rem;
      height: 5rem;
      padding: 0.5rem 1rem;
      cursor: pointer;
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.4);

      border: ${selected ? '3px solid #63abce' : 'none'};

      @media screen and (max-width: 620px) {
        font-size: 1.5rem;
      }
    `}
    onClick={() => handleClick(item)}
  >
    {item}
  </div>
);

export default Checkbox;

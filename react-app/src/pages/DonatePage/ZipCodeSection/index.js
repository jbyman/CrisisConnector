import React from 'react';
import { css } from 'styled-components/macro';

import ZipCodeInput from 'components/ZipCodeInput';

const ZipCodeSection = ({ className, useZipCode, onContinue }) => {
  const [zipCode, setZipCode] = useZipCode;

  return (
    <div className={className} css={css``}>
      <h2>{'Where are you?'}</h2>
      <div
        css={css`
          margin-top: 0.5rem;
        `}
      >
        <label htmlFor="zip-code">{'My zip code is'}</label>
        <ZipCodeInput
          name="zip-code"
          css={`
            margin-left: 1rem;
          `}
          value={zipCode}
          onChange={(zc) => setZipCode(zc)}
        />
      </div>
      <span
        css={css`
          color: #63abce;
          font-style: italic;

          visibility: ${zipCode.length === 5 && onContinue
            ? 'visible'
            : 'hidden'};

          cursor: pointer;
        `}
        onClick={onContinue}
      >{`> continue`}</span>
    </div>
  );
};

export default ZipCodeSection;

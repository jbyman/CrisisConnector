import React from 'react';
import { css } from 'styled-components/macro';

import ZipCodeInput from 'components/ZipCodeInput';
import ContinueButton from 'components/ContinueButton';

const ZipCodeSection = ({ className, useZipCode, step, onContinue }) => {
  const [zipCode, setZipCode] = useZipCode;

  return (
    <div className={className}>
      <h2
        css={css`
          &&& {
            @media screen and (max-width: 620px) {
              font-size: 1.5rem;
            }
          }
        `}
      >
        {'Where are you?'}
      </h2>
      <div
        css={css`
          margin-top: 2rem;
        `}
      >
        <label
          css={css`
            font-size: 1.8rem;
            margin-right: 2rem;

            @media screen and (max-width: 620px) {
              font-size: 1.5rem;
            }
          `}
          htmlFor="zip-code"
        >
          {'My zip code is'}
        </label>
        <ZipCodeInput
          name="zip-code"
          value={zipCode}
          onChange={(zc) => setZipCode(zc)}
        />
      </div>
      {step === 3 && zipCode.length === 5 && (
        <ContinueButton onContinue={onContinue} />
      )}
    </div>
  );
};

export default ZipCodeSection;

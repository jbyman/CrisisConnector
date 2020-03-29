import React, { useState } from 'react';
import styled, { css } from 'styled-components/macro';

import { useSelection, useForm } from 'hooks';

import Page from 'components/Page';
import Hero from 'components/Hero';
import Stepper from 'components/Stepper';
import Button from 'components/Button';

import DonationResults from './DonationResults';
import ItemSelect from './ItemSelect';
import UnitSubform from './UnitSubform';
import ZipCodeSection from './ZipCodeSection';

const DonatePage = ({ className }) => {
  const [step, setStep] = useState(1);
  const [zipCode, setZipCode] = useState('');
  const [selectedItems, { handleSelect }] = useSelection();
  const [form, { handleChange }] = useForm();

  const updateStep = () => {
    return step < 5 ? setStep(step + 1) : null;
  };

  return (
    <Page className={className}>
      <Hero />

      <Stepper
        step={step}
        css={css`
          margin-top: 2rem;
        `}
      >
        {[
          <ItemSelect
            key="item-select"
            items={[
              'Money',
              'Masks',
              'Hand Sanitizer',
              'Face Shields',
              'Disinfecting Wipes',
              'Other',
            ]}
            handleSelect={handleSelect}
            selectedItems={selectedItems}
            onContinue={updateStep}
            step={step}
          />,
          <UnitSubform
            key="unit-subform"
            selectedItems={selectedItems}
            onContinue={updateStep}
            step={step}
            form={form}
            handleChange={handleChange}
          />,
          <ZipCodeSection
            key="zip-code-input"
            useZipCode={[zipCode, setZipCode]}
            onContinue={updateStep}
            step={step}
          />,
          <DonationResults
            key="donation-results"
            onFinish={() => setStep(5)}
          />,
        ]}
      </Stepper>
      <ThankYouMessage
        css={css`
          visibility: ${step === 5 ? 'visible' : 'hidden'};
        `}
      />
    </Page>
  );
};

const ThankYouMessage = ({ className }) => {
  return (
    <div
      className={className}
      css={`
        display: flex;
        flex-direction: column;

        margin-top: 4rem;

        @media screen and (max-width: 620px) {
          margin-top: 2rem;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;

          margin-top: 2rem;

          & *:not(:first-child) {
            margin-top: 1rem;
          }
        `}
      >
        <h2>{`Thank you for your help!`}</h2>
        <p>
          {[
            `If you have questions, please contact us at `,
            <Anchor href="mailto:foo@bar.com">{`foo@bar.com`}</Anchor>,
            '.',
          ]}
        </p>
      </div>

      <Button
        primary
        css={css`
          width: 20rem;

          margin-top: 2rem;

          @media screen and (max-width: 914px) {
            width: 100%;
          }
        `}
      >{`Share this tool`}</Button>
    </div>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: #63abce;

  &:hover {
    color: #51a0c8;
  }

  &:active {
    color: #3d96c2;
  }
`;

export default DonatePage;

import React, { useState } from 'react';
import { css } from 'styled-components/macro';

import { useSelection } from 'hooks';

import Page from 'components/Page';
import Hero from 'components/Hero';
import Stepper from 'components/Stepper';

import DonationResults from './DonationResults';
import ItemSelect from './ItemSelect';
import UnitSubform from './UnitSubform';
import ZipCodeInput from './ZipCodeInput';

const DonatePage = ({ className }) => {
  const [step, setStep] = useState(1);
  const [selectedItems, { handleSelect }] = useSelection();

  const updateStep = () => {
    return step < 4 ? setStep(step + 1) : null;
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
            updateStep={updateStep}
            step={step}
          />,
          <UnitSubform
            key="unit-subform"
            selectedItems={selectedItems}
            updateStep={updateStep}
            step={step}
          />,
          <ZipCodeInput key="zip-code-input" />,
          <DonationResults key="donation-results" />,
        ]}
      </Stepper>
    </Page>
  );
};

export default DonatePage;

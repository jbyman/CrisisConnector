import React, { useState } from 'react';
import { css } from 'styled-components/macro';

import { useSelection, useForm } from 'hooks';

import Page from 'components/Page';
import Hero from 'components/Hero';
import Stepper from 'components/Stepper';

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
    return step < 4 ? setStep(step + 1) : null;
  };

  console.log('asdfasdf', form);

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
          <DonationResults key="donation-results" />,
        ]}
      </Stepper>
    </Page>
  );
};

export default DonatePage;

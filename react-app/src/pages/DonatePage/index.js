import React, { useState } from 'react';
import { css } from 'styled-components/macro';

import Page from 'components/Page';
import Hero from 'components/Hero';
import Stepper from 'components/Stepper';

import DonationResults from './DonationResults';
import ItemSelect from './ItemSelect';
import UnitSubform from './UnitSubform';
import ZipCodeSection from './ZipCodeSection';

const DonatePage = ({ className }) => {
  const [step, setStep] = useState(1); // [4, () => {}]; //

  const [zipCode, setZipCode] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  const addItem = (item) => {
    const selectedItemCopy = [...selectedItems];
    selectedItemCopy.push(item);
    setSelectedItems(selectedItemCopy);
    return selectedItemCopy;
  };

  const removeItem = (item) => {
    let selectedItemsCopy = [...selectedItems];
    if (selectedItemsCopy.includes(item)) {
      let idx = selectedItemsCopy.indexOf(item);
      selectedItemsCopy = [
        ...selectedItems.slice(0, idx),
        ...selectedItems.slice(idx + 1),
      ];
      setSelectedItems(selectedItemsCopy);
      return selectedItemsCopy;
    }
  };

  const handleSelect = (item) => {
    if (selectedItems.includes(item)) {
      removeItem(item);
    } else {
      addItem(item);
    }
  };

  return (
    <Page className={className}>
      <Hero />

      {/* Just for testing */}
      {/* TODO: Remove below */}
      <div>
        <button
          disabled={step >= 4}
          onClick={(e) => (step < 4 ? setStep(step + 1) : null)}
        >
          {'step++'}
        </button>
      </div>
      {/* TODO: Remove above */}

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
          />,
          <UnitSubform key="unit-subform" />,
          <ZipCodeSection
            key="zip-code-input"
            useZipCode={[zipCode, setZipCode]}
            onContinue={step === 3 ? () => setStep(4) : null}
          />,
          <DonationResults key="donation-results" />,
        ]}
      </Stepper>
    </Page>
  );
};

export default DonatePage;

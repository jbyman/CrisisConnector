import React, { useState } from 'react';
import axios from 'axios';
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
import { MASK_TYPES } from '../../helpers/maskTypes';

const usZips = require('us-zips');

const DonatePage = ({ className }) => {
  const [step, setStep] = useState(1);
  const [zipCode, setZipCode] = useState('');

  const [selectedItems, { handleSelect }] = useSelection();
  const [form, { handleChange, clearSelectedFormField }] = useForm();

  const [nearestOrganization, setNearestOrganization] = useState({});
  const [error, setError] = useState('');

  const updateStep = async () => {
    if (step === 3) await getOrganization();
    return step < 5 ? setStep(step + 1) : null;
  };

  const getOrganization = async () => {
    const formattedItemsDonating = Object.entries(form)
      ?.reduce((acc, [key, val]) => {
        // handle mask type
        if (MASK_TYPES?.includes(val)) {
          acc.push(`${val}s`);
        }

        // handle disinfecting wipes, hand sanitizer, and face shields
        if (
          val >= 1 &&
          ['Disinfecting wipes', 'Hand sanitizer', 'Face shields']?.includes(
            key
          )
        ) {
          acc.push(key);
        }
        return acc;
      }, [])
      ?.join(', ');

    const payload = {
      latitude: usZips[zipCode]?.latitude,
      longitude: usZips[zipCode]?.longitude,
      donating: formattedItemsDonating,
    };

    try {
      const response = await axios.post('/api/match', payload);
      const data = response?.data?.best_match;
      setNearestOrganization(data);
      setError('');
    } catch (e) {
      setError(
        "We couldn't find an organization with needs that match your items"
      );
    }
  };

  return (
    <Page className={className}>
      <Hero />

      <Stepper
        step={step}
        css={css`
          margin-top: 2rem;

          padding: 2rem;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
          border-radius: 0.5rem;

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
            handleClear={clearSelectedFormField}
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
            onSubmit={getOrganization}
          />,
          <DonationResults
            key="donation-results"
            onFinish={() => setStep(5)}
            organization={nearestOrganization}
            error={error}
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
            <Anchor
              key="crisisconnector@gmail.com"
              href="mailto:crisisconnector@gmail.com"
            >{`crisisconnector@gmail.com`}</Anchor>,
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

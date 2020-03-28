import React from 'react';
import { css } from 'styled-components/macro';

import Button from 'components/Button';

// TODO: Implement me!
const DonationResults = ({ className }) => {
  // Fake data
  const organization = {
    name: 'Jackson County Memorial Hospital',
    street_address: '1200 East Pecan St',
    city: `Altus`,
    state: `OK`,
    zip_code: 73521,
    items_needed: ['n95s', 'surgical masks', `face shields`],
    instructions: 'Call 580-379-5000 and ask for Mary Jencks.',
  };

  const itemList = listWithAnd(organization?.items_needed);

  return (
    <div className={className}>
      <h2>{`Here's where to donate`}</h2>
      <div
        css={css`
          margin-top: 1em;
        `}
      >
        <p>{`We found a donation center near you that needs ${itemList}`}</p>

        <div
          css={css`
            margin-top: 1em;
          `}
        >
          <p>{organization?.name}</p>
          <p>{organization?.street_address}</p>
          <CityStateZip
            city={organization?.city}
            state={organization?.state}
            zip={organization?.zip_code}
          />
        </div>
        <div
          css={css`
            margin-top: 1em;
            font-size: 0.9em;
            color: #555; /* TODO: Change? */
          `}
        >
          <p>{organization?.instructions}</p>
        </div>

        <div
          css={css`
            display: flex;
            margin-top: 2em;
          `}
        >
          <Button primary>{'Schedule pickup'}</Button>
          <Button
            secondary
            css={css`
              margin-left: 1em;
            `}
          >{`I'll do it myself`}</Button>
        </div>
      </div>
    </div>
  );
};

const CityStateZip = ({ city, state, zip }) => {
  // TODO: Handle missing info
  const result = `${city}, ${state} ${zip}`;

  return <p>{result}</p>;
};

const listWithAnd = (items) =>
  items.reduce((list, item, i) => {
    const isLast = i === items.length - 1;

    if (isLast) return list + ', and ' + item;
    else return list + ', ' + item;
  });

export default DonationResults;

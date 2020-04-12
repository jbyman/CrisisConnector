import React from 'react';
import { css } from 'styled-components/macro';

import Button from 'components/Button';

const DonationResults = ({ className, onFinish, organization, error }) => {
  const parsedOrganization = {
    name: organization?.name ?? '',
    street_address: organization?.address?.split('\n')?.[0] ?? '',
    city: organization?.city ?? '',
    state: organization?.state ?? '',
    zip_code: organization?.address?.match(/^.*[0-9]{5}$/) ?? '',
    items_needed: organization?.needs?.split?.(', ') ?? [],
    instructions: organization?.instructions ?? '',
  };

  const itemList = listWithAnd(parsedOrganization?.items_needed);

  return (
    <div className={className}>
      {!error && (
        <>
          <h2
            css={css`
              &&& {
                @media screen and (max-width: 620px) {
                  font-size: 1.5rem;
                }
              }
            `}
          >
            {"Here's where to donate"}
          </h2>
          <div
            css={css`
              margin-top: 1em;
            `}
          >
            <p>{`We found a donation center near you that needs ${itemList}`}</p>

            <div
              css={css`
                font-size: 2rem;
                margin-top: 1em;

                @media screen and (max-width: 620px) {
                  font-size: 1.5rem;
                }
              `}
            >
              <p
                css={css`
                  color: #63abce;
                `}
              >
                {parsedOrganization?.name}
              </p>
              <p>{parsedOrganization?.street_address}</p>
              <CityStateZip
                city={parsedOrganization?.city}
                state={parsedOrganization?.state}
                zip={parsedOrganization?.zip_code}
              />
            </div>
            <div
              css={css`
                margin-top: 1em;
                color: #555; /* TODO: Change? */
              `}
            >
              <p>{parsedOrganization?.instructions}</p>
            </div>

            <div
              css={css`
                display: flex;
                flex-wrap: wrap;
                margin-top: 2em;
              `}
            >
              <Button
                css={css`
                  @media screen and (max-width: 620px) {
                    width: 100%;
                  }
                `}
                primary
                onClick={onFinish}
              >
                {'Schedule pickup'}
              </Button>
              <Button
                secondary
                css={css`
                  margin-left: 1em;

                  @media screen and (max-width: 620px) {
                    margin-top: 2rem;
                    margin-left: 0;
                    width: 100%;
                  }
                `}
                onClick={onFinish}
              >{`I'll do it myself`}</Button>
              {/* https://www.youtube.com/watch?v=EzWNBmjyv7Y */}
            </div>
          </div>
        </>
      )}
      {error && <h2>{error}</h2>}
    </div>
  );
};

const CityStateZip = ({ city, state, zip }) => {
  // TODO: Handle missing info
  const result = `${city}, ${state} ${zip}`;

  return <p>{result}</p>;
};

const listWithAnd = (items) =>
  items?.join(', ')?.replace(/, ((?:.(?!, ))+)$/, ' and $1');

export default DonationResults;

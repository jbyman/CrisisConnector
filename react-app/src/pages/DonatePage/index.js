import React, { useState } from 'react';
import { css } from 'styled-components/macro';

import Page from 'components/Page';
import Hero from 'components/Hero';
import Stepper from 'components/Stepper';

const DonatePage = ({ className }) => {
  const [step, setStep] = useState(1);

  console.log({ step });

  return (
    <Page className={className}>
      <Hero />

      {/* Just for testing */}
      {/* TODO: Remove below */}
      <div>
        <label
          for="step-select"
          css={css`
            font-size: 1.4rem;
          `}
        >
          {'Set step: '}
        </label>
        <select
          name="step-select"
          value={step}
          onChange={(e) => setStep(parseInt(e?.target?.value ?? step))}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </div>
      {/* TODO: Remove above */}

      <Stepper
        step={step}
        css={css`
          margin-top: 2rem;
        `}
      >
        {[
          <div key="foo">
            <pre
              css={css`
                white-space: pre-wrap;
                font-size: 1.5rem;
              `}
            >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`}</pre>
          </div>,
          <div key="bar">
            <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</p>
          </div>,
          <div key="baz">
            <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</p>
          </div>,
        ]}
      </Stepper>
    </Page>
  );
};

export default DonatePage;

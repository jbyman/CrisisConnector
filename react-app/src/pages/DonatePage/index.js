import React, { useState } from 'react';
import { css } from 'styled-components/macro';

import Page from 'components/Page';
import Hero from 'components/Hero';
import Stepper from 'components/Stepper';

const DonatePage = ({ className }) => {
  const [step, setStep] = useState(1);

  return (
    <Page className={className}>
      <Hero />

      {/* Just for testing */}
      {/* TODO: Remove below */}
      <div>
        <button
          disabled={step >= 3}
          onClick={(e) => (step < 3 ? setStep(step + 1) : null)}
        >
          {'step++'}
        </button>
      </div>

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
                padding: 0;
                margin: 0;
              `}
            >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`}</pre>
          </div>,
          <div key="bar">
            <pre
              css={css`
                white-space: pre-wrap;
                font-size: 1.5rem;
                padding: 0;
                margin: 0;
              `}
            >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`}</pre>
          </div>,
          <div key="baz">
            <pre
              css={css`
                white-space: pre-wrap;
                font-size: 1.5rem;
                padding: 0;
                margin: 0;
              `}
            >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`}</pre>
          </div>,
        ]}
      </Stepper>
      {/* TODO: Remove above */}
    </Page>
  );
};

export default DonatePage;

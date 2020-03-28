import React from 'react';
import { css } from 'styled-components/macro';

const Stepper = ({ className, children, step = 1 }) => {
  return (
    <div
      className={className}
      css={css`
        /* TODO: Remove */
        h2 {
          font-size: 1.8rem;
          padding: 0;
          margin: 0;
        }
        p {
          font-size: 1.5rem;
          padding: 0;
          margin: 0;
        }
      `}
    >
      {children.map((child, i) => (
        <Step
          stepNumber={i + 1}
          currentStep={step}
          isLast={i === children.length - 1}
        >
          {child}
        </Step>
      ))}
    </div>
  );
};

const Step = ({ children, stepNumber, currentStep, isLast }) => {
  return (
    <div
      css={css`
        display: flex;

        &:not(:last-child) {
          margin-bottom: 1rem;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;

          width: 2rem;
          min-height: 4rem;

          font-size: 1.5rem;
          font-weight: bold;
        `}
      >
        <span>{stepNumber}</span>

        {/* Vertical line (svg has a minimum height of 150px when scaling) */}
        <div
          css={css`
            display: ${isLast ? 'none' : 'flex'};

            width: 0.2rem;
            height: calc(100% - 2rem);

            margin: 0.5em auto 0;

            background-color: #ccc;
          `}
        />
      </div>
      <div
        css={css`
          margin-left: 2rem;
          width: 100%;
        `}
      >
        <div
          css={css`
            display: ${currentStep >= stepNumber ? 'flex' : 'none'};
          `}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Stepper;

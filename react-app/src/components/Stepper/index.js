import React, { useEffect, useState } from 'react';
import { css } from 'styled-components/macro';
import { useTransition, animated, useSpring } from 'react-spring';

const Stepper = ({ className, children, step = 1 }) => {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <Step
          stepNumber={i + 1}
          isLast={i === children.length - 1}
          key={i}
          currentStep={step}
        >
          {child}
        </Step>
      ))}
    </div>
  );
};

// See: https://www.react-spring.io/docs/hooks/use-transition
const Step = ({ children, stepNumber, currentStep, isLast }) => {
  const [fadeInTransitionItems, setTransitionItems] = useState([]);
  const [lineProps, setLineProps] = useSpring(() => ({ height: '0%' }));

  useEffect(() => {
    if (currentStep >= stepNumber) {
      setTransitionItems([<span key={stepNumber}>{children}</span>]);
      setLineProps((item) => ({
        height: '100%',
        maxHeight: 'calc(100% - 4rem)',
      }));
    } else {
      setTransitionItems([]);
      setLineProps({ height: '0%' });
    }
  }, [currentStep]);

  const fadeInTransition = useTransition(
    fadeInTransitionItems,
    (item) => item.key,
    {
      from: { transform: 'translate3d(0,-50%,0)', opacity: 0, height: 0 },
      enter: {
        transform: 'translate3d(0,0%,0)',
        opacity: 1,
        height: 'auto',
      },
      leave: { transform: 'translate3d(0,-50%,0)', opacity: 0, height: 0 },
    }
  );

  return (
    <div
      css={css`
        display: flex;

        margin-bottom: ${isLast ? '0' : '1rem'};
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
        <animated.div style={lineProps}>
          <div
            {...lineProps}
            css={css`
              display: ${isLast ? 'none' : 'flex'};

              width: 0.25rem;
              min-height: 2rem;
              height: 100%;

              margin: 0.5em auto 0;

              background-color: #ccc;
            `}
          />
        </animated.div>
      </div>
      <div
        css={css`
          margin-left: 2rem;
          width: 100%;
        `}
      >
        {fadeInTransition.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            {item}
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;

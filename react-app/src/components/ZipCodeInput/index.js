import React from 'react';

import TextField from 'components/TextField';

const ZipCodeInput = ({ className, name, value, onChange }) => {
  const handleChange = (e) => {
    const value = e?.target?.value ?? '';

    const isValid = value.toString().match(/^[0-9]*$/) && value.length <= 5;

    if (isValid) onChange(value);
  };

  return (
    <TextField
      className={className}
      name={name}
      type="text"
      css={`
        margin-left: 1rem;
        width: 8rem;
      `}
      onChange={handleChange}
      value={value}
    />
  );
};

export default ZipCodeInput;

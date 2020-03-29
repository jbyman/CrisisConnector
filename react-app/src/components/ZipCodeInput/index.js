import React from 'react';

import TextField from 'components/TextField';

const ZipCodeInput = ({ className, name, value, type, onChange }) => {
  const handleChange = (e) => {
    const value = e?.target?.value ?? '';

    const isValid = value.toString().match(/^[0-9]*$/) && value.length <= 5;

    if (isValid) onChange(value);
  };

  return (
    <TextField
      className={className}
      name={name}
      type={type}
      width={'8rem'}
      handleChange={handleChange}
      value={value}
    />
  );
};

export default ZipCodeInput;

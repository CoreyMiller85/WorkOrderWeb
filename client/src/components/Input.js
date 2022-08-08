import React from 'react';

export const Input = ({ title, onChange, value, name }) => {
  return (
    <div>
      <label htmlFor={name}>{title}</label>
      <input
        type='text'
        onChange={(e) => onChange(e)}
        value={value}
        placeholder={title}
        name={name}
      />
    </div>
  );
};

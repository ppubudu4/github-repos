import React from 'react';

const TextInput = ({ lable, value, onChange, placeholder, className }) => {
  const textInputClass = className ? `${className} field` : field;
  return (
    <div className={textInputClass}>
      <div className="control">
        <label className="label">{lable}</label>
        <input
          className="input is-primary"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default TextInput;

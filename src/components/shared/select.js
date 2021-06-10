import React from 'react';

const Select = ({ lable, value, onChange, options, className }) => {
  const textSelectClass = className ? `${className} field` : 'field';
  return (
    <div className={textSelectClass}>
      <div className="control">
        <label className="label">{lable}</label>
        <div className="select  is-primary">
          <select value={value} onChange={(e) => onChange(e.target.value)}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.lable}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Select;

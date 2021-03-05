import React from "react";

const InputField = ({ input, type, placeholder, name, value, onChange }) => {
  return (
    <input
      className={input}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;

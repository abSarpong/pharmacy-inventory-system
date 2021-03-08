import React from "react";

const Button = ({ label, buttonStyle, onClick }) => {
  return (
    <button className={`button ${buttonStyle}`} type="submit" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;

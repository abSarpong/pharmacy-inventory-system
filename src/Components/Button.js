import React from "react";

const Button = ({ label, buttonType, onClick }) => {
  return (
    <button className={`button ${buttonType}`} type="submit" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;

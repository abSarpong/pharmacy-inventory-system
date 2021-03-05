import React from "react";

const Button = ({ label, buttonType }) => {
  return (
    <button className={`button ${buttonType}`} type="submit">
      {label}
    </button>
  );
};

export default Button;

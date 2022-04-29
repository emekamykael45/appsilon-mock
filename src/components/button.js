import React from "react";

const Button = ({ className, text, loading, disabled, onClick, ...rest }) => (
  <button
    className={`btn ${className ? className : "btn_primary"}`}
    onClick={onClick}
    disabled={disabled}
    {...rest}
  >
    {text}
  </button>
);

export default Button;

import React from "react";

import Icon from "../assets/svg";

const Button = ({
  className,
  text,
  icon,
  loading,
  disabled,
  onClick,
  ...rest
}) => (
  <button
    className={`btn ${className ? className : "btn_primary"}`}
    onClick={onClick}
    disabled={disabled}
    {...rest}
  >
    {text}
    {icon && (
      <span className="right_icon">
        <Icon name={icon} />
      </span>
    )}
  </button>
);

export default Button;

import React, { PureComponent } from "react";
import cx from "classnames";
import PropTypes from "prop-types";


const Input = ({
  type = "text",
  autoComplete = "off",
  label,
  icon,
  required = false,
  error = "",
  className,
  ...props
}) => {
  return (
    <label className="d-flex flex-dir--col col-hp-start col-vp-center">
      {`${label}`}
      <div className="input-container d-flex flex-dir--row row-vp-center">
        {icon}
        <input
          className="feedback_input"
          type={type}
          autoComplete={autoComplete}
          required={required}
          {...props}
        />
      </div>
      {!!error && <span className="feedback_valid_error">{error}</span>}
    </label>
  );
};

export default Input;
import React from "react";

const TextArea = ({
  type = "text",
  autoComplete = "off",
  label,
  required = false,
  error = "",
  className,
  ...props
}) => {
  return (
    <label className="d-flex flex-dir--col col-hp-start col-vp-center">
      {`${label}`}
      <textarea
        className="feedback_textarea"
        autoComplete={autoComplete}
        required={required}
        {...props}
      />
      {!!error && <span className="feedback_valid_error">{error}</span>}
    </label>
  );
};

export default TextArea;
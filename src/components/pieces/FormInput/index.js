import React from "react";
import "./index.scss";

const FormInput = ({ input, label, ...rest }) => (
  <div className="group">
    <input className="form-input" {...input} {...rest} />
    {label ? (
      <label
        className={`${input.value.length ? "shrink" : ""} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;

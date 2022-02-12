import React from 'react';
import './form-input.styles.scss';

function FormInput({ label, error, ...otherProps }) {
  return (
    <div className="group">
      <input className={`${error ? 'error' : ''} form-input`} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
          htmlFor={otherProps.name}
        >
          {label}
        </label>
      ) : null}
      {error ? <div className="error-message">{error}</div> : null}
    </div>
  );
}

export default FormInput;

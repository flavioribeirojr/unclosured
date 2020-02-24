import React, { useState } from 'react';
import styles from './form-group.module.scss';

const DefautInputComponent = props => (
  <input
    {...props}
  />
);

function FormGroup({
  label,
  children,
  Input = DefautInputComponent,
  inputClassName = '',
  labelClassName = '',
  inverseLabelClassName = '',
  ...inputProps
}) {
  const [ inputHasValue, setInputHasValue ] = useState(false);
  const [ isInputFocused, setInputFocused ] = useState(false);

  return (
    <div className={styles.formGroup}>
      <Input
        {...inputProps}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        onChange={onChange}
        className={getInputClassName()}
      />
      <label
        className={getLabelClassName()}
      >
        { label }
      </label>
    </div>
  );

  function onChange(event) {
    setInputHasValue(event.target.value !== '');

    if (inputProps.onChange) {
      inputProps.onChange(event)
    }
  }

  function onInputFocus() {
    setInputFocused(true);
  }

  function onInputBlur() {
    setInputFocused(false);
  }

  function getInputClassName() {
    return `${styles.input} ${inputClassName}`;
  }

  function getLabelClassName() {
    return `${styles.label} ${labelClassName} ${(inputHasValue || isInputFocused) ? `${styles.labelFloat} ${inverseLabelClassName}` : ''}`;
  }
}

export default FormGroup;
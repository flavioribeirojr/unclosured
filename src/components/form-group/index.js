import React, { useState } from 'react';
import styles from './form-group.module.scss';

const DefautInputComponent = props => (
  <input
    {...props}
  />
);

function FormGroup({ label, children, Input = DefautInputComponent, ...inputProps }) {
  const [ inputHasValue, setInputHasValue ] = useState(false);

  function onChange(event) {
    setInputHasValue(event.target.value !== '');

    if (inputProps.onChange) {
      inputProps.onChange(event)
    }
  }

  return (
    <div className={styles.formGroup}>
      <Input
        {...inputProps}
        onChange={onChange}
        className={styles.input}
      />
      <label
        className={`${styles.label} ${inputHasValue ? styles.labelFloat : ''}`}
      >
        { label }
      </label>
    </div>
  )
}

export default FormGroup;
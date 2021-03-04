import React from "react";
import styles from "./Input.module.css";
import classNames from "classnames"
import PropTypes from "prop-types";

const Input = ({
  type,
  error,
  inputClassNames,
  errorMessage,
  label,
  ...props
}) => {
  return (
    <>
      <div className={styles.textField}>
        <input
          className={
            classNames(
              styles.input,
              inputClassNames,
              error && styles.inputError,
            )
          }
          type={type}
          {...props}
        />
        <label className={styles.label}>{label}</label>
        {error && <span className={styles.errorMessage}>{errorMessage}</span>}
      </div>
    </>
  );
};

Input.proprTypes = {
  type: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
};

export default Input;

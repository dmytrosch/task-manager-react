import React from "react";
import styles from "./Input.module.css";
import classNames from "classnames"

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

// Input.proprTypes = {
//   error: PropTypes.bool,
//
// };

// Input.defaultProps = {
//   error: false,
//   color: 'primary',
// };

export default Input;

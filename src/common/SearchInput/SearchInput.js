import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./SearchInput.module.css";

export default function SearchInput({
  customContainerStyles,
  customInputStyles,
  callback,
}) {
  return (
    <div className={classNames(styles.form, customContainerStyles)}>
      <button className={styles.submitBtn} type="button"></button>
      <input
        className={classNames(styles.input, customInputStyles)}
        type="text"
        onChange={(e) => callback(e.target.value)}
      />
    </div>
  );
}
SearchInput.proprTypes = {
  customContainerStyles: PropTypes.string,
  customInputStyles: PropTypes.string,
  callback: PropTypes.func,
};

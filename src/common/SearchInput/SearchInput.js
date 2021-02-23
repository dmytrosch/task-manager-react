import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./SearchInput.module.css";

export default function SearchInput({
  customContainerStyles,
  customInputStyles,
  callback,
}) {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText === "") return;
    callback(searchText);
    setSearchText("");
  };

  return (
    <form
      className={classNames(styles.form, customContainerStyles)}
      onSubmit={handleSubmit}
    >
      <button className={styles.submitBtn} type="submit"></button>
      <input
        className={classNames(styles.input, customInputStyles)}
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
}

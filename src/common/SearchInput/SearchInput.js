import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchInput.module.css";

import setSearchValue from "../../redux/search/searchActions";
import { search } from '../../redux/currentSprint/currentSprintSelectors';





export default function SearchInput({
  customContainerStyles,
  customInputStyles,
  callback,
  searchValue
}) {


  // console.log(search);


  return (
    <div
      className={classNames(styles.form, customContainerStyles)}
    // onSubmit={handleSubmit}
    >
      <button className={styles.submitBtn} type="button"></button>
      <input
        className={classNames(styles.input, customInputStyles)}
        type="text"
        // value={searchValue}
        onChange={(e) => callback(e.target.value)}
        
      />
    </div>
  );
}

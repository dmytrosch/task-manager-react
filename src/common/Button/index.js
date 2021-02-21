import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Button.module.css";

const Button = ({ color, shape, children, buttonCustomClass, ...props }) => {
  return (
    <button
      className={classNames(
        styles.button,
        styles[color],
        styles[shape],
        ...[buttonCustomClass]
      )}
      {...props}
    >
      {children}
    </button>
  );
};

Button.proprTypes = {
  color: PropTypes.string,
  shape: PropTypes.string,
};

Button.defaultProps = {
  color: "orange",
  shape: "square",
};

export default Button;

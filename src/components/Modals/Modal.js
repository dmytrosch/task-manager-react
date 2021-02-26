import React, { useEffect } from "react";
import classNames from "classnames";
import style from "./Modal.module.css";
import PropTypes from "prop-types";

export default function Modal({
  children,
  position,
  onClose,
  type,
  customModalWindowStyles,
  ...props
}) {
  const handleKeyboardCloseWindow = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleClick = (e) => {
    const backdrop = document.getElementById("modalBackdrop");
    if (e.target === backdrop) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboardCloseWindow);

    return () =>
      document.removeEventListener("keydown", handleKeyboardCloseWindow);
  });

  return (
    <div
      id="modalBackdrop"
      className={style.modalBackdrop}
      onClick={handleClick}
    >
      <div
        className={classNames(style[position], style[type], ...[customModalWindowStyles])}
      >
        <button type="button" onClick={onClose} className={style.closeBtn} />
        {children}
      </div>
    </div>
  );
}
Modal.proprTypes = {
  position: PropTypes.string,
};
/* right, left, center  */
Modal.defaultProps = {
  position: "right",
};

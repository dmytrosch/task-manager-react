import React from "react";
import EdiText from "react-editext";
import styles from "./EditableInput.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";
import CrossIcon from "./iconsForEditText/CrossIcon.svg";
import Checkmark from "./iconsForEditText/Checkmark.svg";
import Edit from "./iconsForEditText/Edit.svg";

export default function EditableInput({
  value,
  viewClassName,
  inputClassName,
  rows,
  button,
  styleInputNumber,
  type,
  disable,
  ...props
}) {
  return (
    <div className="container">
      {disable ? (
        <p className={styles[viewClassName]}>{value}</p>
      ) : (
        <EdiText
          viewProps={{
            className: styles[viewClassName],
          }}
          inputProps={{
            className: styles[inputClassName],
            disabled: disable,
            rows: rows,
          }}
          saveButtonContent={<Checkmark />}
          editButtonContent={<Edit />}
          cancelButtonContent={<CrossIcon />}
          saveButtonClassName={classNames(styles[button], styles.applyСancel)}
          cancelButtonClassName={classNames(styles[button], styles.applyСancel)}
          editButtonClassName={classNames(
            styles[button],
            styles[styleInputNumber]
          )}
          submitOnEnter
          submitOnUnfocus
          cancelOnEscape
          editOnViewClick={true}
          hideIcons={true}
          startEditingOnFocus
          value={value}
          {...props}
        />
      )}
    </div>
  );
}
EditableInput.proprTypes = {
  viewClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  shape: PropTypes.string,
  rows: PropTypes.number,
  button: PropTypes.string,
  styleInputNumber: PropTypes.string,
  validation: PropTypes.func,
  type: PropTypes.string,
  validationMessage: PropTypes.string,
};

EditableInput.defaultProps = {
  viewClassName: "sprintName",
  inputClassName: "sprintNameInput",
  button: "button",
  type: "textarea",
  validationMessage: "Будь ласка введіть назву до 50 символів.",
};

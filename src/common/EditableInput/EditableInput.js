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
  viewStyle,
  inputStyle,
  rows,
  button,
  styleInputNumber,
  type,
  validation,
  validationMessage,
  onSave,
  disable
}) {
  return (
    <div className="container">
      <EdiText
        type={type}
        viewProps={{
          className: styles[viewStyle],
        }}
        inputProps={{
          className: styles[inputStyle],
          disabled: false,
          rows: rows,
        }}
        disable={disable}
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
        cancelOnEscape
        editOnViewClick={true}
        submitOnUnfocus
        startEditingOnFocus
        value={value}
        hideIcons={true}
        onSave={onSave}
        validationMessage={validationMessage}
        validation={validation}
      />
    </div>
  );
}
EditableInput.proprTypes = {
  viewStyle: PropTypes.string,
  shape: PropTypes.string,
  rows: PropTypes.number,
  button: PropTypes.string,
  styleInputNumber: PropTypes.string,
  validation: PropTypes.func,
  type: PropTypes.string,
  validationMessage: PropTypes.string,
};

EditableInput.defaultProps = {
  viewStyle: "sprintName",
  inputStyle: "sprintNameInput",
  button: "button",
  type: "textarea",
  validationMessage: "Будь ласка введіть назву до 50 символів.",
};

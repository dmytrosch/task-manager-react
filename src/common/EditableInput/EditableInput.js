import React from "react";
import EdiText from "react-editext";
import styles from "./EditableInput.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";
import IconButton from "../IconButtons/IconButtons";

export default function EditableInput({ value, viewStyle, inputStyle, rows, button  }) {
  const onSave = (val) => {
    console.log("Edited Value -> ", val);
  };
  return (
    <div className="container">
      <EdiText
        type="textarea"
        viewProps={{
          className: styles[viewStyle],
        }}
        inputProps={{
          className: styles[inputStyle],
          disabled: false,
          rows: rows
        }}
        disable="disable"
        saveButtonContent={<IconButton iconName="checkmark" icon="checkmark" />}
        saveButtonClassName={classNames(styles[button], styles.applyСancel)}
        cancelButtonContent={
          <IconButton iconName="crossIcon" icon="crossIcon" />
        }
        cancelButtonClassName={classNames(styles[button], styles.applyСancel)}
        editButtonClassName={styles.button}
        editButtonContent={<IconButton iconName="pen" icon="pen" />}
        submitOnEnter
        cancelOnEscape
        editOnViewClick={true}
        submitOnUnfocus
        startEditingOnFocus
        value={value}
        hideIcons={true}
        onSave={onSave}
        validationMessage="Будь ласка введіть назву до 50 символів."
        validation={(val) => val.length <= 50}
      />
    </div>
  );
}
EditableInput.proprTypes = {
  viewStyle: PropTypes.string,
  shape: PropTypes.string,
  rows: PropTypes.number,
  button: PropTypes.string,
};

EditableInput.defaultProps = {
  viewStyle: "sprintName",
  inputStyle: "sprintNameInput",
  button: "button",
};

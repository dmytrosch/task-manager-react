import React from "react";
import EdiText from "react-editext";
import styles from "./EditableInput.module.css";
import classNames from "classnames";
import IconButton from "../IconButtons";

export default function EditableInput({ value }) {
  const onSave = (val) => {
    console.log("Edited Value -> ", val);
  };
  return (
    <div className="container">
      <EdiText
        type="textarea"
        viewProps={{
          className: styles.sprintName,
        }}
        inputProps={{
          className: styles.sprintNameInput,
          disabled: false,
        }}
        disable="disable"
        saveButtonContent={<IconButton iconName="checkmark" icon="checkmark" />}
        saveButtonClassName={classNames(styles.button, styles.applyСancel)}
        cancelButtonContent={
          <IconButton iconName="crossIcon" icon="crossIcon" />
        }
        cancelButtonClassName={classNames(styles.button, styles.applyСancel)}
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

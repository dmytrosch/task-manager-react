import React from "react";
import EdiText from "react-editext";
import styles from "./EditableInput.module.css";
import classNames from "classnames";
import IconButtons from "../IconButtons";


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
        saveButtonContent="+"
        saveButtonClassName={classNames(styles.button, styles.applyСancel)}
        cancelButtonContent="-"
        cancelButtonClassName={classNames(styles.button, styles.applyСancel)}
        editButtonClassName={styles.button}
        editButtonContent={<IconButtons iconName="pen" icon="pen" />}
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

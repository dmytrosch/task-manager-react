// import Button from "../../common/Button/index";
import IconButton from "../../../common/IconButtons/IconButtons.js";
import styles from "../sideBar.module.css";

export default function AddTaskBtn({ nameArrowBtn, addNewProject }) {
  return (
    <div onClick={addNewProject}>
      <IconButton
        iconButtonCustomClass={styles.button}
        iconName="plus"
        icon="plus"
      />
      <p className={styles.addButton}>Додати {nameArrowBtn}</p>
    </div>
  );
}

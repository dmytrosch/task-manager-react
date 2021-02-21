// import Button from "../../common/Button/index";
import IconButton from "../../common/IconButtons/IconButtons.js";
import styles from "../SideBar/sideBar.module.css";

export default function AddTaskBtn({ nameArrowBtn, addNewProject }) {
  return (
    <>
      <IconButton
        iconButtonCustomClass={styles.button}
        iconName="plus"
        icon="plus"
        onClick={addNewProject}
      />
      <p className={styles.addButton}>Добавити {nameArrowBtn}</p>
    </>
  );
}

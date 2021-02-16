import Button from "../../common/Button/index";
import styles from "../SideBar/sideBar.module.css";

export default function AddTaskBtn({ nameArrowBtn, addNewProject }) {
  return (
    <>
      <Button
        buttonCustomClass={styles.button}
        shape="circle"
        onClick={addNewProject}
      />
      <p className={styles.addButton}>Добавити {nameArrowBtn}</p>
    </>
  );
}

import Button from '../../common/Button/index'
import styles from '../SideBar/sideBar.module.css'

export default function AddTaskBtn({ nameArrowBtn }) {
  return (
    <>
      <Button buttonCustomClass={styles.button} shape="circle" />
      <p className={styles.addButton}>Добавити {nameArrowBtn}</p>
    </>
  )
}

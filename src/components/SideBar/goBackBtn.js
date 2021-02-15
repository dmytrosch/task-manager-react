import { NavLink } from 'react-router-dom'
import arrow from '../../assest/icons/ArrowBackInSideBar.svg'
import styles from '../SideBar/sideBar.module.css'
export default function GoBackBtn({ props }) {
  const { pathname, history, nameArrowBtn } = props
  return (
    <>
      {props && (
        <NavLink
          to="/"
          onClick={pathname !== '/' ? () => history.goBack() : null}
          className={styles.navContainer}
        >
          <img src={arrow} alt="arrowBack"></img>
          <p className={styles.arrowName}>Показати {nameArrowBtn}и</p>
        </NavLink>
      )}
    </>
  )
}

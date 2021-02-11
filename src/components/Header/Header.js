import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getUserName, isAuthentificated } from '../../redux/auth/authSelectors'
import { logout } from '../../redux/auth/authOperations'
import styles from '../Header/Header.module.css'
import { CSSTransition } from 'react-transition-group'
import mainLogo from '../../assest/icons/mainLogo.svg'

export default function Header(props) {
  const dispatch = useDispatch()
  const userName = useSelector(getUserName)
  const isAuth = useSelector(isAuthentificated)
  const onLogout = () => dispatch(logout())
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <NavLink to={isAuth ? '/' : '/login'}>
          <CSSTransition
            in={true}
            appear={true}
            classNames={{ ...styles }}
            timeout={1000}
            mountOnEnter
          >
            <img
              src={mainLogo}
              className={styles.logoImage}
              alt="mainLogo"
            ></img>
          </CSSTransition>
        </NavLink>
      </div>

      {isAuth && (
        <div className={styles.logoutContainer}>
          <p className={styles.username}>{userName}</p>
          <button className={styles.logoutBtn} type="button" onClick={onLogout}>
            <span className={styles.logoutIcon}></span>
            <span className={styles.logoutText}>Log out </span>
          </button>
        </div>
      )}
    </header>
  )
}

import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import {
  getUserNameSelector,
  isAuthentificatedSelector,
} from "../../redux/auth/authSelectors";
import { logout } from "../../redux/auth/authOperations";
import mainLogo from "../../assest/icons/mainLogo.svg";
import styles from "./header.module.css";
import Loader from "../Loaders/LoaderForComponents/LoaderForComponents";
import { isUserLoadingSelector } from "../../redux/loading/loadingSelector";

const Header = ({ className, ...props }) => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserNameSelector);
  const isAuth = useSelector(isAuthentificatedSelector);
  const loading = useSelector(isUserLoadingSelector)
  const onLogout = () => dispatch(logout());
  return (
    <header className={classNames(styles.header, className)}>
      <div className={styles.logoContainer}>
        <NavLink to={isAuth ? "/" : "/login"}>
          <CSSTransition
            in={true}
            appear={true}
            classNames={{ ...styles }}
            timeout={1000}
            mountOnEnter
          >
            <img src={mainLogo} className={styles.logoImage} alt="mainLogo" />
          </CSSTransition>
        </NavLink>
      </div>

      {isAuth && (
        
          <div className={styles.logoutContainer}>
            <Loader loading={loading}><p className={styles.username}>{userName}</p></Loader>
            <button
              className={styles.logoutBtn}
              type="button"
              onClick={onLogout}
            >
              <span className={styles.logoutIcon}></span>
              <span className={styles.logoutText}>Log out </span>
            </button>
          </div>
      )}
    </header>
  );
};

export default Header;

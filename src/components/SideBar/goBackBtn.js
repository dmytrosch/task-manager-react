import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import arrow from "../../assest/icons/ArrowBackInSideBar.svg";
import styles from "../SideBar/sideBar.module.css";
export default function GoBackBtn({ nameArrowBtn }) {
  const history = useHistory();

  return (
    <>
      <NavLink
        to="/"
        onClick={() => history.goBack(-1)}
        className={styles.navContainer}
      >
        <img src={arrow} alt="arrowBack"></img>
        <p className={styles.arrowName}>Показати {nameArrowBtn}и</p>
      </NavLink>
    </>
  );
}

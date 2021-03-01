import { NavLink } from "react-router-dom";
import arrow from "../../../assest/icons/ArrowBackInSideBar.svg";
import styles from "../sideBar.module.css";
export default function GoBackBtn({ nameArrowBtn, link }) {
  return (
    <>
      <NavLink to={link} className={styles.navContainer}>
        <img src={arrow} alt="arrowBack"></img>
        <p className={styles.arrowName}>Показати {nameArrowBtn}</p>
      </NavLink>
    </>
  );
}

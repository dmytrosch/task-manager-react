import React, { useState } from "react";
import styles from "./styles.module.css";
import ProejctCard from "../ProjectCard/ProjectCard";

export default function Dashboard() {
    const [modal, setModal] = useState(false);
   const  clickHandler = (e) => {
       e.preventDefault();
       console.log('click');
   }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
          <div className={styles.infoBox}>
          <h2 className={styles.title}>
              Проекти
          </h2>
          <div className={styles.box}>
          <button className={styles.button} onClick={(e)=>setModal(true)}></button>
          <p className={styles.text}>Створити проект</p>
          </div>
          </div>
          <ul className={styles.projectList}>
              <li className={styles.projectItem}>
                  <ProejctCard/>
              </li>
              <li className={styles.projectItem}>
                  <ProejctCard/>
              </li>
              <li className={styles.projectItem}>
                  <ProejctCard/>
              </li>
              { modal &&
              <li className={styles.projectItem}>
              <ProejctCard/>
          </li>
              }
              
          </ul>
      </div>
    </div>
  );
}

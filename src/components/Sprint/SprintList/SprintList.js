import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import styles from "./sprintList.module.css";
import animateItem from "../../../styles/animateItem.module.css";

import SprintItem from "../SprintItem/SprintItem";

export default function SprintList({ sprintIds, isOwner }) {
  return (
    <TransitionGroup component="ul" className={styles.list}>
      {sprintIds.map((id) => (
        <CSSTransition
          timeout={250}
          key={id}
          classNames={animateItem}
          unmountOnExit
        >
          <li className={styles.item}>
            <SprintItem id={id} isOwner={isOwner} />
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import styles from "./sprintList.module.css";
import animateItem from "../../../styles/animateItem.module.css";

import SprintItem from "../SprintItem/SprintItem";

export default function SprintList({ sprintIds }) {
  return sprintIds.length === 0 ? (
    <p className={styles.notSprints}>There are not sprints</p>
  ) : (
    <TransitionGroup component="ul" className={styles.list}>
      {sprintIds.map((sprint) => (
        <CSSTransition
          timeout={250}
          key={sprint.id}
          classNames={animateItem}
          unmountOnExit
        >
          <li className={styles.item} key={sprint.id}>
            <SprintItem id={sprint.id}
              isOwner={sprint.isOwner}

             />
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

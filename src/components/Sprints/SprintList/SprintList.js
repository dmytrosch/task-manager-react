import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import styles from "./sprintList.module.css";
import animateItem from "../../../styles/animateItem.module.css";

import SprintItem from "../SprintItem/SprintItem";

export default function SprintList({ sprintIds, isOwner, projectId }) {
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
            <SprintItem id={id} isOwner={isOwner} projectId={projectId} />
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
SprintList.proprTypes = {
  sprintIds: PropTypes.arrayOf(PropTypes.string),
  projectId: PropTypes.number,
  isOwner: PropTypes.bool,
};

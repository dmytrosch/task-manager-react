import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import styles from './sprintList.module.css'
import animateItem from './animateItem.module.css'

import SprintItem from '../SprintItem'

export default function SprintList({ sprintIds }) {
  return sprintIds.length === 0 ? (
    <p className={styles.notSprints}>There are not sprints</p>
  ) : (
    <TransitionGroup component="ul" className={styles.list}>
      {sprintIds.map((id) => (
        <CSSTransition
          timeout={250}
          key={id}
          classNames={animateItem}
          unmountOnExit
        >
          <li className={styles.item} key={id}>
            <SprintItem id={id} />
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
}

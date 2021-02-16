import React from 'react'
import styles from './Layout.module.css'
import Header from '../Header/Header'
import Sprint from '../../components/Sprint/Sprint'

export default function MainLayout(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerHeader}>
        <Header />
      </div>
      <Sprint />
      <div className={styles.container}>{props.children}</div>
    </div>
  )
}

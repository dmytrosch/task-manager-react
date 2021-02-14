import { NavLink } from 'react-router-dom'
import styles from '../SideBar/sideBar.module.css'
import classNames from 'classnames'

export default function ListItem({ props }) {
  const { obj, visibleTab, setVisibleTab } = props
  return (
    <div className={styles.tabsMenu}>
      <ul className={styles.tabsTitles}>
        {obj.map(({ id, name }) => (
          <li
            key={id}
            onClick={() => setVisibleTab(id)}
            onFocus={() => setVisibleTab(id)}
            className={
              visibleTab === id
                ? classNames(styles.title, styles.titleActive)
                : styles.title
            }
          >
            <NavLink to="/sprint" className={styles.navLink}>
              <p
                className={
                  visibleTab === id
                    ? classNames(styles.square, styles.squareActive)
                    : styles.square
                }
              ></p>
              <p className={styles.taskTitle}>
                {name.length > 30 ? name.slice(0, 30) + '...' : name}
              </p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

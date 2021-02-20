import React from "react";
import { NavLink } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "../SideBar/sideBar.module.css";
import transition from "./sideBarTransition.module.css";
import classNames from "classnames";
import { Scrollbars } from "rc-scrollbars";
export default function ListItem({ props }) {
  const { obj, visibleTab, setVisibleTab } = props;
  const [wobble, setWobble] = React.useState(0);
  return (
    <Scrollbars
      className={styles.scrollbars}
      autoHeight={true}
      autoHeightMin={430}
      autoHeightMax={540}
      autoHide={true}
    >
      <div className={styles.tabsMenu}>
        <TransitionGroup component="ul" className={styles.tabsTitles}>
          {obj.map(({ id, name, color }) => (
            <CSSTransition
              in={true}
              appear={true}
              classNames={transition}
              timeout={5000}
              mountOnEnter
              key={id}
              unmountOnExit={true}
            >
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
                <NavLink
                  to="/sprint"
                  onClick={() => setWobble(1)}
                  onAnimationEnd={() => setWobble(0)}
                  className={styles.navLink}
                >
                  <p
                    wobble={wobble}
                    style={{ backgroundColor: color }}
                    className={
                      visibleTab === id
                        ? classNames(
                            styles.square,
                            styles.squareActive,
                            transition.image
                          )
                        : styles.square
                    }
                  ></p>

                  <p className={styles.taskTitle}>
                    {name.length > 30 ? name.slice(0, 30) + "..." : name}
                  </p>
                </NavLink>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </Scrollbars>
  );
}

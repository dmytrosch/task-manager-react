import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import styles from "../sideBar.module.css";
import transition from "../sideBarTransition.module.css";
import SprintNavLink from "../SideBarElements/SprintNavLink";
import classNames from "classnames";
import { Scrollbars } from "rc-scrollbars";
import { allIdsSelector } from "../../../redux/sprints/sprintsSelectors";
import { useRouteMatch } from "react-router-dom";
export default function SprintsLink() {
  const projectMatch = useRouteMatch().params.projectId;
  const sprintsMatch = useRouteMatch().params.sprintId;
  const [visibleTab, setVisibleTab] = useState(sprintsMatch);
  const sprintIds = useSelector(allIdsSelector);
  return (
    <>
      {projectMatch && sprintsMatch && (
        <Scrollbars
          className={styles.scrollbars}
          autoHeight={true}
          autoHeightMin={430}
          autoHeightMax={540}
          autoHide={true}
        >
          <div className={styles.tabsMenu}>
            <TransitionGroup component="ul" className={styles.tabsTitles}>
              {sprintIds.map((id) => (
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
                    <SprintNavLink
                      sprintId={id}
                      visibleTab={visibleTab}
                      projectMatch={projectMatch}
                    />
                  </li>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
        </Scrollbars>
      )}
    </>
  );
}

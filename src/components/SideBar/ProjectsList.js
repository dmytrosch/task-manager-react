import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import styles from "../SideBar/sideBar.module.css";
import transition from "./sideBarTransition.module.css";
import classNames from "classnames";
import { Scrollbars } from "rc-scrollbars";
import ProjectNavLink from "./ProjectNavLink";
import { getAllIdsSelector } from "../../redux/projects/projectSelectors";
import { getProjectById } from "../../redux/projects/projectOperations";
import { useRouteMatch, useParams, useLocation } from "react-router-dom";
export default function ListItem() {
  const projectMatch = useRouteMatch().params.projectId;
  const sprintsMatch = useRouteMatch().params.sprintId;
  const [visibleTab, setVisibleTab] = useState(projectMatch);
  const projectsIds = useSelector(getAllIdsSelector);
  return (
    <>
      {projectMatch && !sprintsMatch && (
        <Scrollbars
          className={styles.scrollbars}
          autoHeight={true}
          autoHeightMin={430}
          autoHeightMax={540}
          autoHide={true}
        >
          <div className={styles.tabsMenu}>
            <TransitionGroup component="ul" className={styles.tabsTitles}>
              {projectsIds.map((id) => (
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
                    <ProjectNavLink projId={id} visibleTab={visibleTab} />
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

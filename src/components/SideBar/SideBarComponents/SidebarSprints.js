import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import styles from "../sideBar.module.css";
import transition from "../sideBarTransition.module.css";
import SprintNavLink from "../SideBarElements/SprintNavLink";
import classNames from "classnames";
import { Scrollbars } from "rc-scrollbars";
import { allIdsSelector } from "../../../redux/sprints/sprintsSelectors";
import { useRouteMatch } from "react-router-dom";
import { setModalCreateSprint } from "../../../redux/modal/modalAction";
import { getProjectById } from "../../../redux/projects/projectOperations";
import GoBackBtn from "../SideBarElements/GoBackBtn";
import AddBtn from "../SideBarElements/AddBtn";
import Loader from "../../Loaders/LoaderForComponents/LoaderForComponents";
import { useEffect } from "react";
import {
  isProjectsLoadingSelector,
  isSprintsLoadingSelector,
  isUserLoadingSelector,
} from "../../../redux/loading/loadingSelector";

export default function SidebarSprints() {
  const sprintId = useRouteMatch().params.sprintId;
  const projectId = useRouteMatch().params.projectId;
  const [visibleTab, setVisibleTab] = useState(sprintId);
  const sprintIds = useSelector(allIdsSelector);
  const projectLoading = useSelector(isProjectsLoadingSelector);
  const sprintsLoading = useSelector(isSprintsLoadingSelector);
  const loading = sprintsLoading || projectLoading;
  const dispatch = useDispatch();
  useEffect(() => {
    sprintIds.length === 0 && dispatch(getProjectById(projectId));
  }, []);
  const add = () => dispatch(setModalCreateSprint(projectId));
  return (
    <aside className={styles.aside}>
      <GoBackBtn
        nameArrowBtn="спринти"
        link={`/projects/${projectId}/sprints`}
      />
      <Loader loading={loading}>
        <Scrollbars
          className={styles.scrollbars}
          autoHeight={true}
          autoHeightMin={430}
          autoHeightMax={540}
          autoHide={true}
        >
          <div className={styles.tabsMenu}>
            <TransitionGroup component="ul" className={styles.tabsTitles}>
              {sprintIds &&
                sprintIds.map((id) => (
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
                        projectId={projectId}
                        sprintId={id}
                        visibleTab={visibleTab}
                      />
                    </li>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </div>
        </Scrollbars>
      </Loader>
      <AddBtn nameArrowBtn="спринт" addNewProject={add} />
    </aside>
  );
}

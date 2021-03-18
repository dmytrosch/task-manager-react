import React, { useState } from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import styles from "../sideBar.module.css";
import transition from "../sideBarTransition.module.css";
import classNames from "classnames";
import { Scrollbars } from "rc-scrollbars";
import ProjectNavLink from "../SideBarElements/ProjectNavLink";
import GoBackBtn from "../SideBarElements/GoBackBtn";
import AddBtn from "../SideBarElements/AddBtn";
import Loader from "../../Loaders/LoaderForComponents/LoaderForComponents";
import { getAllIdsSelector } from "../../../redux/projects/projectSelectors";
import { setModalCreateProject } from "../../../redux/modal/modalAction";
import {
  isProjectsLoadingSelector,
  isUserLoadingSelector,
} from "../../../redux/loading/loadingSelector";

export default function SidebarProjects() {
  const projectMatch = useRouteMatch().params.projectId;
  const [visibleTab, setVisibleTab] = useState(projectMatch);
  const projectsIds = useSelector(getAllIdsSelector);
  const userLoading = useSelector(isUserLoadingSelector);
  const projectLoading = useSelector(isProjectsLoadingSelector);
  const isLoading = userLoading || projectLoading;
  const dispatch = useDispatch();
  const add = () => dispatch(setModalCreateProject(true));
  return (
    <aside className={styles.aside}>
      <GoBackBtn nameArrowBtn="проєкти" link="/" />
      <Loader loading={isLoading}>
        <Scrollbars
          className={styles.scrollbars}
          autoHeight={true}
          autoHeightMin={430}
          autoHeightMax={540}
          autoHide={true}
        >
          <div className={styles.tabsMenu}>
            <TransitionGroup component="ul" className={styles.tabsTitles}>
              {projectsIds &&
                projectsIds.map((id) => (
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
      </Loader>
      <AddBtn nameArrowBtn="проєкт" addNewProject={add} />
    </aside>
  );
}

SidebarProjects.proprTypes = {
  projectMatch: PropTypes.string,
  projectsIds: PropTypes.object,
  userLoading: PropTypes.bool,
  projectLoading: PropTypes.bool,
};

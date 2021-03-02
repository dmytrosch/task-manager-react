import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loaders/LoaderForComponents/LoaderForComponents";
import SprintList from "./SprintList/SprintList";
import EditableInput from "../../common/EditableInput/EditableInput";
import {
  editProjectName,
  editProjectDespription,
  getProjectById,
} from "../../redux/projects/projectOperations";
import { getByIdSelector } from "../../redux/projects/projectSelectors";

import styles from "./Sprints.module.css";
import IconButton from "../../common/IconButtons/IconButtons.js";

import * as modalAction from "../../redux/modal/modalAction";
import { allIdsSelector } from "../../redux/sprints/sprintsSelectors";
import {
  isProjectsLoading,
  isSprintsLoading,
} from "../../redux/loading/loadingSelector";

export default function Sprint({ projectId }) {
  const dispatch = useDispatch();
  const sprintIds = useSelector(allIdsSelector);
  const currentProject = useSelector(getByIdSelector(projectId));
  const { name, isOwner, description } = currentProject;
  const projectsLoading = useSelector(isProjectsLoading);
  const sprintsLoading = useSelector(isSprintsLoading);
  const loading = projectsLoading || sprintsLoading;
  useEffect(() => {
    dispatch(getProjectById(projectId));
  }, [projectId]);
  const addParticipant = () =>
    dispatch(modalAction.setModalAddParticipant(projectId));
  const addSprint = () => dispatch(modalAction.setModalCreateSprint(projectId));
  const changeProjectName = (newName) => {
    if (name === newName) return;
    dispatch(editProjectName(projectId, newName));
  };
  const changeProjectDescription = (newDescription) => {
    if (description === newDescription) return;
    dispatch(editProjectDespription(projectId, newDescription));
  };
  return (
    <Loader loading={loading}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.infoBox}>
            <div>
              <h2 className={styles.title}>
                <EditableInput
                  disable={!isOwner}
                  value={name}
                  onSave={changeProjectName}
                  type="textarea"
                />
              </h2>
              {description && (
                <div className={styles.description}>
                  <EditableInput
                    value={description}
                    disable={!isOwner}
                    viewClassName="description"
                    type="textarea"
                    onSave={changeProjectDescription}
                  />
                </div>
              )}
            </div>
            <div className={styles.box} onClick={addSprint}>
              <IconButton
                iconButtonCustomClass={styles.button}
                iconName="plus"
                icon="plus"
              />
              <p className={styles.text}>Створити спринт</p>
            </div>
          </div>
          <p className={styles.addParticipant} onClick={addParticipant}>
            Додати людей
          </p>
          {sprintIds.length > 0 ? (
            <SprintList
              sprintIds={sprintIds}
              isOwner={isOwner}
              projectId={projectId}
            />
          ) : (
            !loading && (
              <p className={styles.notSprints}>
                У проєкта відсутні спринти.{" "}
                <span className={styles.addSprintText} onClick={addSprint}>
                  Створити спринт
                </span>
              </p>
            )
          )}
        </div>
      </div>
    </Loader>
  );
}

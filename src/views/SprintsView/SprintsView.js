import React, { useState } from "react";
// import { useState } from "react";

import MainLayout from "../../components/Layouts/MainLayout";
import Sprint from "../../components/Sprint/Sprint";

import ModalPortal from "../../common/ModalPortal/ModalPortal";
import Modal from "../../components/Modals/Modal";
import SprintCreator from "../../components/Modals/ModalComponents/SprintCreator";

export default function SprintView() {
  const [addSprintModal, setSprintModal] = useState(false);
  const toggleSprintModal = () => setSprintModal((prevState) => !prevState);

  const [editProjectModal, setProjectModal] = useState(false);
  const toggleProjectModal = () => setProjectModal((prevState) => !prevState);

  const [addParticipantModal, setParticipantModal] = useState(false);
  const toggleParticipantModal = () =>
    setParticipantModal((prevState) => !prevState);

  const [addNewProjectModal, setNewProjectModal] = useState(false);
  const toggleNewProjectModal = () =>
    setNewProjectModal((prevState) => !prevState);

  return (
    <MainLayout addNewProject={toggleNewProjectModal}>
      <Sprint
        addSprint={toggleSprintModal}
        editProject={toggleProjectModal}
        addParticipant={toggleParticipantModal}
      />
      <ModalPortal>
        {addSprintModal && (
          <Modal onClose={toggleSprintModal}>
            <SprintCreator onClose={toggleSprintModal} />
          </Modal>
        )}
        {editProjectModal && (
          <Modal onClose={toggleProjectModal}>
            <p>Edit project</p>
          </Modal>
        )}
        {addParticipantModal && (
          <Modal onClose={toggleParticipantModal}>
            <p>Add participant</p>
          </Modal>
        )}
        {addNewProjectModal && (
          <Modal onClose={toggleNewProjectModal}>
            <p>Add new project</p>
          </Modal>
        )}
      </ModalPortal>
    </MainLayout>
  );
}

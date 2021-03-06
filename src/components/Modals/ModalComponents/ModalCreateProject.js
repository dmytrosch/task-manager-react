import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { isModalCreateProjectSelector } from "../../../redux/modal/modalSelectors";
import { setModalCreateProject } from "../../../redux/modal/modalAction";

import ModalPortal from "../../../common/ModalPortal/ModalPortal";
import Modal from "../Modal";
import ProjectCreator from "../ModalElements/ProjectCreator/ProjectCreator";

export default function ModalCreateProject() {
  const dispatch = useDispatch();
  const isOpen = useSelector(isModalCreateProjectSelector);
  const closeModal = () => dispatch(setModalCreateProject(false));

  return isOpen ? (
    <ModalPortal>
      <Modal onClose={closeModal}>
        <ProjectCreator onClose={closeModal} />
      </Modal>
    </ModalPortal>
  ) : null;
}

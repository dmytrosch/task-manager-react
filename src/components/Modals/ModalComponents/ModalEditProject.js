import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { isModalEditProject } from "../../../redux/modal/modalSelectors";
import { setModalEditProject } from "../../../redux/modal/modalAction";

import ModalPortal from "../../../common/ModalPortal/ModalPortal";
import Modal from "../Modal";
// import EditProject from "../path/to/EditProject";

export default function ModalEditProject() {
  const dispatch = useDispatch();
  const isOpen = useSelector(isModalEditProject);
  const closeModal = () => dispatch(setModalEditProject(false));

  return isOpen ? (
    <ModalPortal>
      <Modal onClose={closeModal}>
        {/* <EditProject onClose={closeModal} /> */}
        <p>Edit Project</p>
      </Modal>
    </ModalPortal>
  ) : null;
}

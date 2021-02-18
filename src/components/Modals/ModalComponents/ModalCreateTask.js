import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { isOpenModalCreateTask } from "../../../redux/modal/modalSelector";
import { setModalCreateTask } from "../../../redux/modal/modalAction";

import ModalPortal from "../../../common/ModalPortal/ModalPortal";
import Modal from "../Modal";
import ProjectCreator from "../ModalComponents/ProjectCreator";

export default function ModalCreateTask() {
  const dispatch = useDispatch();
  const isOpen = useSelector(isOpenModalCreateTask);
  const closeModal = () => dispatch(setModalCreateTask(false));

  return isOpen ? (
    <ModalPortal>
      <Modal onClose={closeModal} position="modalWindowRight">
        <ProjectCreator onClose={closeModal} />
      </Modal>
    </ModalPortal>
  ) : null;
}

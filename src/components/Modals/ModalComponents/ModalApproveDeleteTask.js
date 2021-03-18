import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { isModalApproveDeleteTaskSelector } from "../../../redux/modal/modalSelectors";
import { setModalApproveDeleteTask } from "../../../redux/modal/modalAction";

import ModalPortal from "../../../common/ModalPortal/ModalPortal";
import Modal from "../Modal";
import ApproveDeleteTask from "../ModalElements/ApproveDeleteTask/ApproveDeleteTask";

export default function ModalApproveDeleteProject() {
  const dispatch = useDispatch();
  const isOpen = useSelector(isModalApproveDeleteTaskSelector);
  const closeModal = () => dispatch(setModalApproveDeleteTask(null));

  return isOpen ? (
    <ModalPortal>
      <Modal
        onClose={closeModal}
        position="centerSmall"
      >
        <ApproveDeleteTask onClose={closeModal} />
      </Modal>
    </ModalPortal>
  ) : null;
}

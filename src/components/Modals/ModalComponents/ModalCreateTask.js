import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { isModalCreateTask } from "../../../redux/modal/modalSelector";
import { setModalCreateTask } from "../../../redux/modal/modalAction";

import ModalPortal from "../../../common/ModalPortal/ModalPortal";
import Modal from "../Modal";
// import TaskCreator from "../path/to/TaskCreator";

export default function ModalCreateTask() {
  const dispatch = useDispatch();
  const isOpen = useSelector(isModalCreateTask);
  const closeModal = () => dispatch(setModalCreateTask(false));
  return isOpen ? (
    <ModalPortal>
      <Modal onClose={closeModal} >
        {/* <TaskCreator onClose={closeModal} /> */}
        <p>Task Creator</p>
      </Modal>
    </ModalPortal>
  ) : null;
}

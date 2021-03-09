import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { isModalCreateTaskSelector } from "../../../redux/modal/modalSelectors";
import { setModalCreateTask } from "../../../redux/modal/modalAction";

import ModalPortal from "../../../common/ModalPortal/ModalPortal";
import Modal from "../Modal";
import AddTask from "../ModalElements/AddTask/AddTask";

export default function ModalCreateTask({}) {
  const dispatch = useDispatch();
  const isOpen = useSelector(isModalCreateTaskSelector);
  const closeModal = () => dispatch(setModalCreateTask(false));

  return isOpen ? (
    <ModalPortal>
      <Modal onClose={closeModal}>
        <AddTask onClose={closeModal} />
      </Modal>
    </ModalPortal>
  ) : null;
}

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { isModalCreateSprint } from "../../../redux/modal/modalSelector";
import { setModalCreateSprint } from "../../../redux/modal/modalAction";

import ModalPortal from "../../../common/ModalPortal/ModalPortal";
import Modal from "../Modal";
import SprintCreator from "../SprintCreator/SprintCreator";

export default function ModalCreateSprint() {
  const dispatch = useDispatch();
  const isOpen = useSelector(isModalCreateSprint);
  const closeModal = () => dispatch(setModalCreateSprint(false));

  return isOpen ? (
    <ModalPortal>
      <Modal onClose={closeModal}>
        <SprintCreator onClose={closeModal} />
      </Modal>
    </ModalPortal>
  ) : null;
}

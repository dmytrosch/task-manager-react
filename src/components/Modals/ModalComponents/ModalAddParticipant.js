import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { isModalAddParticipantSelector } from "../../../redux/modal/modalSelectors";
import { setModalAddParticipant } from "../../../redux/modal/modalAction";

import ModalPortal from "../../../common/ModalPortal/ModalPortal";
import Modal from "../Modal";
import AddParticipant from "../ModalElements/AddParticipant/AddParticipant";

export default function ModalAddParticipant() {
  const dispatch = useDispatch();
  const isOpen = useSelector(isModalAddParticipantSelector);
  const closeModal = () => dispatch(setModalAddParticipant(false));

  return isOpen ? (
    <ModalPortal>
      <Modal onClose={closeModal}>
        <AddParticipant onClose={closeModal} />
      </Modal>
    </ModalPortal>
  ) : null;
}

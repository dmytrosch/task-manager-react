import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { isModalApproveDeleteSprintSelector } from "../../../redux/modal/modalSelectors";
import { setModalApproveDeleteSprint } from "../../../redux/modal/modalAction";

import ModalPortal from "../../../common/ModalPortal/ModalPortal";
import Modal from "../Modal";
import ApproveDeleteSprint from "../ModalElements/ApproveDeleteSprint/ApproveDeleteSprint";

export default function ModalApproveDeleteProject() {
  const dispatch = useDispatch();
  const isOpen = useSelector(isModalApproveDeleteSprintSelector);
  const closeModal = () => dispatch(setModalApproveDeleteSprint(null));

  return isOpen ? (
    <ModalPortal>
      <Modal
        onClose={closeModal}
        position="centerSmall"
      >
        <ApproveDeleteSprint onClose={closeModal} />
      </Modal>
    </ModalPortal>
  ) : null;
}

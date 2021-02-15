import React, { useState } from 'react'

import ModalPortal from '../../common/ModalPortal/ModalPortal'
import Modal from '../../components/Modals/Modal'
import SprintCreator from '../../components/Modals/ModalComponents/SprintCreator'
import MainLayout from '../../components/Layouts/MainLayout';

export default function SprintView() {
  const [showModal, setShowModal] = useState(false)
  const toggleModal = () => setShowModal((prevState) => !prevState)
  return (
    <MainLayout>
      <button onClick={toggleModal}>Click show modal</button>
      <ModalPortal>
        {showModal && (
          <Modal onClose={toggleModal}>
            <SprintCreator onClose={toggleModal} />
          </Modal>
        )}
      </ModalPortal>
    </MainLayout>
  )
}

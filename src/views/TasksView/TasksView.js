import React, {useState} from 'react'

import ModalPortal from '../../common/ModalPortal/ModalPortal'
import Modal from '../../components/Modals/Modal'
import ProjectCreator from '../../components/Modals/ModalComponents/ProjectCreator'

export default function TaskViews() {
  const [showModal, setShowModal] = useState(false)
  const toggleModal = () => setShowModal((prevState) => !prevState)
  return (
    <div>
      <button onClick={toggleModal}>Click show modal</button>
      <ModalPortal>
        {showModal && (
          <Modal onClose={toggleModal}>
            <ProjectCreator onClose={toggleModal} />
          </Modal>
        )}
      </ModalPortal>
    </div>
  )
}

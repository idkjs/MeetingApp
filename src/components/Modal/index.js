import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'

import './Modal.css'

const ModalComponent = ({ buttonLabel, className, children, modalTitle, buttonColor = 'link' }) => {
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <div>
      <Button color={buttonColor} onClick={toggle} className=''>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
      </Modal>
    </div>
  )
}

export default ModalComponent

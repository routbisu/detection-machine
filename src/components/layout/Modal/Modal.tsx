import React from 'react'
import { ModalContainer, ModalContent } from './styles'

type ModalProps = {
  height?: number | 'auto'
  width?: number | 'auto'
}

const Modal: React.FC<ModalProps> = ({ children, height = 300, width = 400 }) => {
  return (
    <ModalContainer>
      <ModalContent style={{ height, width }}>{children}</ModalContent>
    </ModalContainer>
  )
}

export default Modal

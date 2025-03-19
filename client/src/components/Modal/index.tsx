import React, { FC } from 'react';
import { ModalContainer, ModalContent } from './components/index';
import { createPortal } from 'react-dom';
export interface IModal {
  onClose(): void;
  children: any;
}
const Modal: FC<IModal> = ({ onClose, children }) => {
  return createPortal(
    <ModalContainer
      onClick={(e) => {
        onClose();
      }}
    >
      <ModalContent onClick={(event) => event.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalContainer>,
    document.body
  );
};

export default Modal;

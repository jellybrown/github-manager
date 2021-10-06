import React from 'react';
import {
  ButtonArea,
  CancelButton,
  Content,
  OkButton,
  ModalBox,
  ModalWrapper,
} from './index.style';

interface ModalProps {
  content: string;
  cancleText: string;
  okText: string;
  onClickOk: () => void;
  onClickCancel: () => void;
}

const Modal = ({
  content,
  cancleText,
  okText,
  onClickOk,
  onClickCancel,
}: ModalProps) => {
  return (
    <ModalWrapper>
      <ModalBox>
        <Content>{content}</Content>
        <ButtonArea>
          <CancelButton onClick={onClickCancel}>{cancleText}</CancelButton>
          <OkButton onClick={onClickOk}>{okText}</OkButton>
        </ButtonArea>
      </ModalBox>
    </ModalWrapper>
  );
};

export default Modal;

import React from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";

const ModalContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
`;
const ModalBody = styled.div`
  max-width: 500px;
  margin: 10% auto;
  background-color: white;
`;
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
`;
const ModalTitle = styled.h2``;

const ModalComponent = ({ title, children, openModal, closeModal }) => {
  if (openModal) {
    return createPortal(
      <ModalContainer onClick={closeModal}>
        <ModalBody onClick={(e) => e.stopPropagation()}>
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
            <button onClick={closeModal} type="button">
              X
            </button>
          </ModalHeader>
          {children}
        </ModalBody>
      </ModalContainer>,
      document.getElementById("root")
    );
  }
  return null;
};

export default ModalComponent;

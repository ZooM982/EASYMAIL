import { ModalProvider } from "components/ModalContext";
import React from "react";
import SendMail from "./SendMail";
import ComposeModal from "components/ComposeModal";

const ModalOpened = () => {
  return (
    <ModalProvider>
      <div className="p-4">
        <SendMail />
        <ComposeModal />
      </div>
    </ModalProvider>
  );
};

export default ModalOpened;

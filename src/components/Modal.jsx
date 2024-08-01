import React from "react";
import { useRef } from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

function Modal({ opened, onClosed, title, children }) {
  const modalRef = useRef(null);

  if (!opened) {
    return null;
  }

  document.addEventListener("click", (e) => {
    if (e.target.className === "modal-container") {
      onClosed();
    }
  });

  return createPortal(
    <div className="modal-container">
      <div className="modal-children" ref={modalRef}>
        <div className="modal-header">
          <span>{title ? title : "Modal Title"}</span>
          <div className="modal-close-icon" onClick={() => onClosed()}>
            <AiOutlineClose size={20} />
          </div>
        </div>
        <hr />
        <div>{children}</div>
      </div>
    </div>,
    document.getElementById("root")
  );
}

export default Modal;

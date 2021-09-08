import React from "react";
import { Button, Modal } from "react-bootstrap";

interface DefaultModalProps {
  show: boolean;
  handleHide(): void;
  handleAccept(): void;
  bodyText: string;
  acceptButtonVariant?: string;
  acceptButtonText?: string;
}

const DefaultModal = ({
  show,
  handleHide,
  handleAccept,
  bodyText,
  acceptButtonVariant,
  acceptButtonText,
}: DefaultModalProps) => {
  const handleCancel = handleHide;
  return (
    <Modal
      show={show}
      onHide={
        handleHide ||
        (() => {
          console.error("There is no hide function");
        })
      }
      animation={false}
    >
      <Modal.Body> {bodyText} </Modal.Body>
      <Modal.Footer>
        {handleCancel && (
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
        )}
        {handleAccept && (
          <Button
            variant={acceptButtonVariant || "primary"}
            onClick={handleAccept}
          >
            {acceptButtonText || "Accept"}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default DefaultModal;

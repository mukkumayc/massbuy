import React from "react";
import { Button, Modal } from "react-bootstrap";

const DefaultModal = ({
  show,
  handleHide,
  handleAccept,
  handleCancel,
  bodyText,
  acceptButtonVariant,
  acceptButtonText,
}) => {
  return (
    <Modal
      show={show}
      onHide={
        handleHide ||
        handleCancel ||
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

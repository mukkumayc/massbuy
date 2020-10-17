import React from "react";
import { Button, Modal } from "react-bootstrap";

const DefaultModal = ({
  show,
  handleAccept,
  handleCancel,
  bodyText,
  acceptButtonVariant,
  acceptButtonText,
}) => {
  return (
    <Modal show={show} onHide={handleCancel} animation={false}>
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

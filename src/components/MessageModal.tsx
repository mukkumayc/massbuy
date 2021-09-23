import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { hide, MessageModalProps } from "../slices/messageModalSlice";

const MessageModal = ({ show, header, message }: MessageModalProps) => {
  const dispatch = useDispatch();
  return (
    <Modal show={show} onHide={() => dispatch(hide())} animation={false}>
      <Modal.Header>{header}</Modal.Header>
      <Modal.Body> {message} </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => dispatch(hide())}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MessageModal;

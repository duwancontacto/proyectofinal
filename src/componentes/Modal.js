import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Example({children, title, show, setShow, disableSave, onSubmit}) {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="tituloModal">{title}</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cerrar
          </Button>
          {!disableSave && (
            <Button onClick={onSubmit} variant="dark">
              Guardar
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;

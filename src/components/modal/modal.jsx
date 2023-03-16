import { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

function CustomModal({ btnObj, modalBd }, args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button
        color={btnObj.color || "danger"}
        className={`${btnObj.class} my-2`}
        size="sm"
        onClick={toggle}
      >
        {btnObj.name}
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalBody>{modalBd}</ModalBody>
        <ModalFooter>
          <Button color="secondary" size="sm" outline onClick={toggle}>
            &#10008;
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CustomModal;

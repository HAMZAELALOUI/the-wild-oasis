import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setShowModal((show) => !showModal)}>
        Add New Cabin
      </Button>
      {showModal && (
        <Modal onClose={() => setShowModal((show) => !showModal)}>
          {" "}
          <CreateCabinForm  onCloseModal={() => setShowModal((show) => !showModal)}/>
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;

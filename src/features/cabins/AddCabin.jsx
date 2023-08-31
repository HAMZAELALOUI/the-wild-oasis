import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setShowModal((show) => !showModal)}>
//         Add New Cabin
//       </Button>
//       {showModal && (
//         <Modal onClose={() => setShowModal((show) => !showModal)}>
//           {" "}
//           <CreateCabinForm  onCloseModal={() => setShowModal((show) => !showModal)}/>
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;

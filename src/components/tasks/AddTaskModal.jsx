import Modal from "../ui/Modal";

const AddTaskModal = ({isOpen, setIsOpen}) => {
    return (
        <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum nemo soluta qui facere tenetur.</p>
            </Modal>
        </div>
    );
};

export default AddTaskModal;
import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {

    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(addTask(data))
        onCancel();
    }

    const onCancel = () => {
        reset();
        setIsOpen(false);
    }

    return (
        <div>
            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title="Programming Hero"
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="title">Title</label>
                        <input
                            className="w-full rounded-md"
                            type="text"
                            id="title"
                            {...register('name')}
                        />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="title" className="mb-2">
                            Description
                        </label>
                        <input
                            className="w-full rounded-md"
                            type="text"
                            id="description"
                            {...register('description')}
                        />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="title" className="mb-2">
                            Date
                        </label>
                        <input
                            className="w-full rounded-md"
                            type="date"
                            id="date"
                            {...register('date')}
                        />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="title" className="mb-2">
                            Assign To
                        </label>
                        <select
                            className="w-full rounded-md"
                            id="assignedTo"
                            {...register('assignedTo')}
                        >
                            <option value='Rahul'>Rahul</option>
                            <option value='Pk'>Pk</option>
                            <option value='Jack'>Jack</option>
                            <option value='Mighty'>Mighty</option>
                        </select>
                    </div>

                    <div className="flex flex-col mb-5">
                        <label htmlFor="title" className="mb-2">
                            Priority
                        </label>
                        <select
                            className="w-full rounded-md"
                            id="priority"
                            {...register('priority')}
                        >
                            <option value='high'>High</option>
                            <option value='medium'>Medium</option>
                            <option value='low'>Low</option>
                        </select>
                    </div>
                    <div className="flex gap-3 justify-end">
                        <button type="button"
                            onClick={() => onCancel()} className="btn btn-danger"
                        >
                            cancel
                        </button>
                        <button type="submit" className="btn btn-primary">submit</button>
                    </div>


                </form>
            </Modal>
        </div>
    );
};

export default AddTaskModal;
import Modal from '@/components/modal'; // Import the modal component
import Button from '@/components/button'; // Ensure Button is correctly imported
import { useFormik } from 'formik'; // Import Formik
import * as Yup from 'yup'; // Import Yup for validation

interface ModuleProps {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (values: { title: string; description: string }) => void;
    onEdit: (values: { id: number; title: string; description: string }) => void; // New prop for editing
    module?: { id: number; title: string; description: string } | null; // Optional module for editing
}

const Form = ({ isOpen, onClose, onCreate, onEdit, module }: ModuleProps) => {
    // Formik setup
    const formik = useFormik({
        initialValues: {
            title: module?.title || '', // Use existing module values or empty
            description: module?.description || '', // Use existing module values or empty
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Title is required'),
            description: Yup.string().required('Description is required'),
        }),
        onSubmit: (values) => {
            if (module && module.id) {
                // If module exists, edit it
                onEdit({ id: module.id, ...values });
            } else {
                // If no module, create a new one
                onCreate(values);
            }
            formik.resetForm(); // Reset form after submission
            onClose(); // Close modal
        },
    });

    return (
        <Modal show={isOpen} onClose={onClose}>
            <div className='p-6'>
                <h3 className='text-lg font-semibold'>{module ? 'Edit Module' : 'Create New Module'}</h3>
                <form onSubmit={formik.handleSubmit} className='mt-4'>
                    <div>
                        <label className='block text-sm font-medium'>Title</label>
                        <input
                            type='text'
                            name='title'
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder='Enter module title'
                            className={`mt-1 block w-full border ${
                                formik.touched.title && formik.errors.title ? 'border-red-500' : 'border-gray-300'
                            } rounded-md px-3 py-2`}
                        />
                        {formik.touched.title && formik.errors.title && <div className='text-red-500 text-sm'>{formik.errors.title}</div>}
                    </div>
                    <div className='mt-4'>
                        <label className='block text-sm font-medium'>Description</label>
                        <textarea
                            name='description'
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder='Enter module description'
                            className={`mt-1 block w-full border ${
                                formik.touched.description && formik.errors.description ? 'border-red-500' : 'border-gray-300'
                            } rounded-md px-3 py-2`}
                        />
                        {formik.touched.description && formik.errors.description && <div className='text-red-500 text-sm'>{formik.errors.description}</div>}
                    </div>
                    <div className='mt-4 flex justify-end gap-4'>
                        <Button onClick={onClose} variant='secondary'>
                            Cancel
                        </Button>
                        <Button type='submit' variant='primary'>
                            {module ? 'Update Module' : 'Create Module'}
                        </Button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default Form;

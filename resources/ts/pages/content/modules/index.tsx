import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@/components/card';
import AuthenticatedLayout from '@/layouts/authenticatedLayout.tsx';
import { fetchDataRequest } from '@/redux/content/module/actions';
import { RootState } from '@/redux/reducers';
import Table from './components/table';
import Button from '@/components/button.tsx';
import Form from '@/pages/content/modules/components/form.tsx';

const Index = () => {
    const { data, error, loading } = useSelector((state: RootState) => state.modules);
    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [moduleToEdit, setModuleToEdit] = useState<{ id: number; title: string; description: string } | null>(null);

    useEffect(() => {
        dispatch(fetchDataRequest(searchTerm, currentPage));
    }, [dispatch, searchTerm, currentPage]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); // Reset to the first page when searching
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleEdit = (module: { id: number; title: string; description: string }) => {
        setModuleToEdit(module); // Set the module to edit
        setIsModalOpen(true); // Open modal for editing
    };

    const handleDelete = (moduleId: number) => {
        console.log('Delete module with ID:', moduleId);
        // Implement delete logic here
    };

    const handleAdd = () => {
        setModuleToEdit(null); // Reset moduleToEdit when adding new
        setIsModalOpen(true); // Open modal for creating new module
    };

    const handleCreateModule = (values: { title: string; description: string }) => {
        console.log('Creating new module:', values);
        // Implement logic to create a new module
        setIsModalOpen(false); // Close modal after creation
    };

    const handleEditModule = (values: { id: number; title: string; description: string }) => {
        console.log('Editing module with ID:', values.id);
        // Implement logic to edit the module
        setIsModalOpen(false); // Close modal after editing
    };

    return (
        <AuthenticatedLayout>
            <Card>
                <Card.Body>
                    <div className='mb-4 flex justify-between items-center'>
                        <h2 className='text-lg font-semibold'>Modules</h2>
                        <div className='flex gap-4'>
                            <input
                                type='text'
                                placeholder='Search...'
                                value={searchTerm}
                                onChange={handleSearch}
                                className='border border-gray-300 px-4 py-2 rounded-md'
                            />
                            <Button onClick={handleAdd} variant={'primary'}>
                                Create
                            </Button>
                        </div>
                    </div>
                    {loading && (
                        <div className='flex justify-center items-center'>
                            <span>Loading...</span>
                        </div>
                    )}
                    {error && (
                        <div className='flex justify-center items-center text-red-500'>
                            <span>Error: {error}</span>
                        </div>
                    )}
                    {data && data.data && (
                        <Table
                            data={data.data}
                            pagination={data.pagination}
                            currentPage={currentPage}
                            handlePageChange={handlePageChange}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    )}
                </Card.Body>
            </Card>

            <Form
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onCreate={handleCreateModule}
                onEdit={handleEditModule}
                module={moduleToEdit} // Pass moduleToEdit (can be null or a module)
            />
        </AuthenticatedLayout>
    );
};

export default Index;

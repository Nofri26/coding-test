// Index.tsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@/components/card';
import AuthenticatedLayout from '@/layouts/authenticatedLayout.tsx';
import { fetchDataRequest } from '@/redux/content/module/actions';
import { RootState } from '@/redux/reducers';
import Table from './components/table'; // Import komponen ModuleTable

const Index = () => {
    const { data, error, loading } = useSelector((state: RootState) => state.modules);
    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(fetchDataRequest(searchTerm, currentPage));
    }, [dispatch, searchTerm, currentPage]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); // Reset ke halaman pertama saat melakukan pencarian
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <AuthenticatedLayout>
            <Card>
                <Card.Body>
                    <div className='mb-4 flex justify-between items-center'>
                        <h2 className='text-lg font-semibold'>Modules</h2>
                        <input
                            type='text'
                            placeholder='Search...'
                            value={searchTerm}
                            onChange={handleSearch}
                            className='border border-gray-300 px-4 py-2 rounded-md'
                        />
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
                    {data && data.data && <Table data={data.data} pagination={data.pagination} currentPage={currentPage} handlePageChange={handlePageChange} />}
                </Card.Body>
            </Card>
        </AuthenticatedLayout>
    );
};

export default Index;

import React, { useState } from 'react';

interface Module {
    id: number;
    title: string;
    description: string;
    created_by: number;
    creator: {
        name: string;
    };
}

interface Pagination {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

interface ModuleTableProps {
    data: Module[];
    pagination: Pagination;
    currentPage: number;
    handlePageChange: (page: number) => void;
    onEdit: (moduleId: number) => void;
    onDelete: (moduleId: number) => void;
    onAddCompetency: (moduleId: number) => void;
}

const Table: React.FC<ModuleTableProps> = ({ data, pagination, currentPage, handlePageChange, onEdit, onDelete, onAddCompetency }) => {
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);

    const toggleDropdown = (moduleId: number) => {
        setOpenDropdown(openDropdown === moduleId ? null : moduleId);
    };

    return (
        <div>
            <div className='overflow-x-auto'>
                <table className='table-auto w-full border-collapse border border-gray-200'>
                    <thead>
                        <tr>
                            <th className='border border-gray-300 px-4 py-2'>ID</th>
                            <th className='border border-gray-300 px-4 py-2'>Title</th>
                            <th className='border border-gray-300 px-4 py-2'>Description</th>
                            <th className='border border-gray-300 px-4 py-2'>Creator Name</th>
                            <th className='border border-gray-300 px-4 py-2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((module) => (
                            <tr key={module.id}>
                                <td className='border border-gray-300 px-4 py-2'>{module.id}</td>
                                <td className='border border-gray-300 px-4 py-2'>{module.title}</td>
                                <td className='border border-gray-300 px-4 py-2'>{module.description}</td>
                                <td className='border border-gray-300 px-4 py-2'>{module.creator.name}</td>
                                <td className='border border-gray-300 px-4 py-2'>
                                    <div className='relative'>
                                        <button onClick={() => toggleDropdown(module.id)} className='px-4 py-2 bg-gray-200 text-gray-800 rounded-md'>
                                            Actions
                                        </button>
                                        {openDropdown === module.id && (
                                            <div className='absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10'>
                                                <ul>
                                                    <li
                                                        onClick={() => {
                                                            onEdit(module.id);
                                                            setOpenDropdown(null);
                                                        }}
                                                        className='px-4 py-2 text-gray-800 cursor-pointer hover:bg-gray-100'>
                                                        Edit
                                                    </li>
                                                    <li
                                                        onClick={() => {
                                                            onDelete(module.id);
                                                            setOpenDropdown(null);
                                                        }}
                                                        className='px-4 py-2 text-red-500 cursor-pointer hover:bg-gray-100'>
                                                        Delete
                                                    </li>
                                                    <li
                                                        onClick={() => {
                                                            onAddCompetency(module.id);
                                                            setOpenDropdown(null);
                                                        }}
                                                        className='px-4 py-2 text-blue-500 cursor-pointer hover:bg-gray-100'>
                                                        Add Competency
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='mt-4 flex justify-center items-center space-x-2'>
                {[...Array(pagination.last_page)].map((_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 rounded-md ${currentPage === index + 1 ? 'bg-slate-700 text-white' : 'bg-gray-200 text-gray-800'}`}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Table;

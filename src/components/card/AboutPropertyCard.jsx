import React, { useState } from 'react';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';
import AboutPropertyModal from '../modal/AboutPropertyModal';

export default function AboutPropertyCard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [info, setInfo] = useState('');
    const [form, setForm] = useState({
        propertyDescription: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleAdd = (e) => {
        e.preventDefault();
        if (form.propertyDescription.trim() !== '') {
            setInfo(form.propertyDescription);
            setIsModalOpen(false);
            setForm({ propertyDescription: '' });
        }
    };

    const handleDelete = () => {
        setInfo('');
    };

    return (
        <div className="p-4">
            <div
                className={`border-2 rounded-xl p-4 transition relative cursor-pointer ${info ? 'border-green-500' : 'border-slate-200 hover:border-blue-500'
                    }`}
                onClick={() => !info && setIsModalOpen(true)}
            >
                {info ? (
                    <>
                        <h3 className="font-semibold text-gray-700 mb-2 border-b-2 border-b-slate-400">
                            About the property
                        </h3>
                        <div className="border border-gray-200 rounded-xl p-4 bg-slate-50 text-gray-700 whitespace-pre-wrap text-sm">
                            {info}
                        </div>

                        <button
                            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDelete();
                            }}
                            title="Delete About Property Info"
                        >
                            <FaTrashAlt />
                        </button>
                    </>
                ) : (
                    <div className="text-lg flex justify-between items-center text-gray-500">
                        <span>About the property (Optional)</span>
                        <FaPlus />
                    </div>
                )}
            </div>

            {isModalOpen && (
                <AboutPropertyModal
                    form={form}
                    onChange={handleChange}
                    onCancel={() => setIsModalOpen(false)}
                    onAdd={handleAdd}
                />
            )}
        </div>
    );
}

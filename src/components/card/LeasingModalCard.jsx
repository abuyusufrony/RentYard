// components/LeasingModalCard.jsx

import React, { useState } from 'react';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';
import LeasingModal from '../modal/LeasingModal';

export default function LeasingModalCard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [info, setInfo] = useState(null);
    const [form, setForm] = useState({
        propertyName: '',
        phoneNumber: '',
        email: '',
        sameAddress: true,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleAdd = (e) => {
        e.preventDefault();
        if (form.propertyName && form.phoneNumber && form.email) {
            setInfo(form);
            setIsModalOpen(false);
            setForm({
                propertyName: '',
                phoneNumber: '',
                email: '',
                sameAddress: true
            });
        }
    };

    const handleDelete = () => {
        setInfo(null);
    };

    return (
        <div className="p-4">
            {/* Card */}
            <div
                className={`border ${info ? 'border-green-500' : 'border-slate-200'} rounded-[20px] w-[628px] h-[66px] px-6 py-4 transition relative flex items-center gap-[32px] cursor-pointer`}
                onClick={() => !info && setIsModalOpen(true)}
            >
                {info ? (
                    <div className="flex justify-between items-center w-full relative">
                        <div className="text-sm text-gray-800 flex flex-wrap gap-x-4 gap-y-1 w-full">
                            <span><strong>Name:</strong> {info.propertyName}</span>
                            <span><strong>Phone:</strong> {info.phoneNumber}</span>
                            <span><strong>Email:</strong> {info.email}</span>
                        </div>

                        <button
                            className="absolute top-1 right-2 text-red-500 hover:text-red-700"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDelete();
                            }}
                            title="Delete Leasing Info"
                        >
                            <FaTrashAlt />
                        </button>
                    </div>
                ) : (
                    <div className="flex justify-between items-center w-full text-gray-600">
                        <span className="text-base font-medium">Leasing Info</span>
                        <FaPlus />
                    </div>
                )}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <LeasingModal
                    form={form}
                    onChange={handleChange}
                    onCancel={() => setIsModalOpen(false)}
                    onAdd={handleAdd}
                />
            )}
        </div>
    );
}

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
        e.preventDefault(); // to prevent page refresh on form submit

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
            <div
                className={`border-2 ${info ? 'border-green-500' : 'border-slate-200'} rounded-xl p-2 transition relative`}
                onClick={() => !info && setIsModalOpen(true)}
            >
                {info ? (
                    <div className="text-left space-y-1">
                        <h3 className="font-semibold text-gray-700 mb-2 border-b-2 border-b-slate-400">Leasing Info</h3>
                        <div className="border border-gray-200 rounded-xl p-4 bg-slate-50">
                            <p className="text-sm text-gray-800 flex flex-wrap gap-x-4 gap-y-2">
                                <span><strong>Name:</strong> {info.propertyName}</span>
                                <span><strong>Phone:</strong> {info.phoneNumber}</span>
                                <span><strong>Email:</strong> {info.email}</span>
                            </p>
                        </div>

                        <button
                            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
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
                    <div className="text-lg flex justify-between gap-2">
                        <span>Leasing Info</span>
                        <FaPlus />
                    </div>
                )}
            </div>

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

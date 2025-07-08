// components/ChargesModalCard.jsx

import React, { useState } from 'react';
import ChargesModal from '../modal/ChargesModal';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';

export default function ChargesModalCard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [info, setInfo] = useState(null);
    const [form, setForm] = useState({
        applicationFee: '',
        applicationFeeAppliesTo: '',
        adminFee: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleAdd = (e) => {
        e.preventDefault();
        if (form.applicationFee && form.adminFee) {
            setInfo(form);
            setIsModalOpen(false);
            setForm({ applicationFee: '', applicationFeeAppliesTo: '', adminFee: '' });
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
                        <h3 className="font-semibold text-gray-700 mb-2 border-b-2 border-b-slate-400">Charges</h3>
                        <div className="border border-gray-200 rounded-xl p-4 bg-slate-50 text-sm text-gray-800 space-y-2">
                            <p>
                                <strong>Application Fee:</strong> ${info.applicationFee} – {info.applicationFeeAppliesTo}
                            </p>
                            <p>
                                <strong>Admin Fee:</strong> ${info.adminFee}
                            </p>
                        </div>
                        <button
                            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDelete();
                            }}
                            title="Delete Charges Info"
                        >
                            <FaTrashAlt />
                        </button>
                    </div>
                ) : (
                    <div className="text-lg flex justify-between gap-2">
                        <span>Charges</span>
                        <FaPlus />
                    </div>
                )}
            </div>

            {isModalOpen && (
                <ChargesModal
                    form={form}
                    onChange={handleChange}
                    onCancel={() => setIsModalOpen(false)}
                    onAdd={handleAdd}
                />
            )}
        </div>
    );
}

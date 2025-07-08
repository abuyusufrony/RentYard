// components/RentReminderModalCard.jsx

import React, { useState } from 'react';
import RentReminderModal from '../modal/RentReminderModal';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';

export default function RentReminderModalCard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [info, setInfo] = useState(null);
    const [form, setForm] = useState({
        frequency: '',
        reminderDate: '',
        dueDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleAdd = (e) => {
        e.preventDefault();
        if (form.frequency && form.reminderDate && form.dueDate) {
            setInfo(form);
            setIsModalOpen(false);
            setForm({ frequency: '', reminderDate: '', dueDate: '' });
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
                        <h3 className="font-semibold text-gray-700 mb-2 border-b-2 border-b-slate-400">
                            Rent frequency & payment reminder (Required)
                        </h3>
                        <div className="border border-gray-200 rounded-xl p-4 bg-slate-50 text-sm text-gray-800 space-y-2">
                            <p><strong>Frequency:</strong> {info.frequency}</p>
                            <p><strong>Reminder Date:</strong> {info.reminderDate}</p>
                            <p><strong>Due Date:</strong> {info.dueDate}</p>
                        </div>
                        <button
                            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDelete();
                            }}
                            title="Delete Reminder Info"
                        >
                            <FaTrashAlt />
                        </button>
                    </div>
                ) : (
                    <div className="text-lg flex justify-between gap-2">
                        <span>Rent frequency & payment reminder (Required)</span>
                        <FaPlus />
                    </div>
                )}
            </div>

            {isModalOpen && (
                <RentReminderModal
                    form={form}
                    onChange={handleChange}
                    onCancel={() => setIsModalOpen(false)}
                    onAdd={handleAdd}
                />
            )}
        </div>
    );
}

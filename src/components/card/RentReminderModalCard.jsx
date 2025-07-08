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
            {/* Card */}
            <div
                className={`border ${info ? 'border-green-500' : 'border-slate-200'} rounded-[20px] w-[628px] h-[66px] px-6 py-4 transition relative flex items-center gap-[32px] cursor-pointer`}
                onClick={() => !info && setIsModalOpen(true)}
            >
                {info ? (
                    <div className="flex justify-between items-center w-full relative">
                        <div className="text-sm text-gray-800 flex flex-wrap gap-x-4 gap-y-1 w-full">
                            <span><strong>Frequency:</strong> {info.frequency}</span>
                            <span><strong>Reminder Date:</strong> {info.reminderDate}</span>
                            <span><strong>Due Date:</strong> {info.dueDate}</span>
                        </div>

                        <button
                            className="absolute top-1 right-2 text-red-500 hover:text-red-700"
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
                    <div className="flex justify-between items-center w-full text-gray-600">
                        <span className="text-base font-medium">
                            Rent frequency & payment reminder (Required)
                        </span>
                        <FaPlus />
                    </div>
                )}
            </div>

            {/* Modal */}
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

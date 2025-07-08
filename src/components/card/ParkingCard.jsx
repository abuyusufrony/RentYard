import React, { useState } from 'react';
import ParkingModal from '../modal/ParkingModal';
import { FaPlus, FaTrashAlt, FaEdit } from 'react-icons/fa';

export default function ParkingCard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [info, setInfo] = useState(null);
    const [form, setForm] = useState({
        time: '',
        overview: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleAdd = (e) => {
        e.preventDefault();
        if (form.time && form.overview.trim()) {
            setInfo(form);
            setIsModalOpen(false);
        }
    };

    const handleDelete = (e) => {
        e.stopPropagation();
        setInfo(null);
        setForm({ time: '', overview: '' });
    };

    const handleEdit = (e) => {
        e.stopPropagation();
        setForm(info);
        setIsModalOpen(true);
    };

    return (
        <div className="p-4">
            <div
                className={`
          w-[628px]
          ${info ? 'h-auto border-green-500' : 'h-[66px] border-slate-200 hover:border-blue-500'}
          rounded-[20px] border-2
          relative cursor-pointer
          transition
          flex items-center justify-between gap-[32px]
          px-6 py-4
        `}
                onClick={() => !info && setIsModalOpen(true)}
            >
                {info ? (
                    <>
                        <div className="flex-1 text-left text-gray-800 text-sm space-y-1">
                            <p><strong>Guest Parking Time:</strong> {info.time}</p>
                            <p><strong>Overview:</strong> {info.overview}</p>
                        </div>

                        <div className="absolute top-4 right-4 flex items-center gap-4">
                            <button
                                className="text-blue-500 hover:text-blue-700"
                                onClick={handleEdit}
                                title="Edit Parking"
                            >
                                <FaEdit />
                            </button>
                            <button
                                className="text-red-500 hover:text-red-700"
                                onClick={handleDelete}
                                title="Delete Parking"
                            >
                                <FaTrashAlt />
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="w-full flex justify-between items-center text-lg text-gray-700">
                        <span>Parking</span>
                        <FaPlus />
                    </div>
                )}
            </div>

            {isModalOpen && (
                <ParkingModal
                    form={form}
                    onChange={handleChange}
                    onCancel={() => setIsModalOpen(false)}
                    onAdd={handleAdd}
                />
            )}
        </div>
    );
}

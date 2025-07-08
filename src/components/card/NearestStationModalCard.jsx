import React, { useState } from 'react';
import NearestStationModal from '../modal/NearestStationModal';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

export default function NearestStationModalCard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form, setForm] = useState({
        type: '',
        distanceValue: '',
        distanceUnit: 'Mile',
        name: '',
    });
    const [info, setInfo] = useState(null);

    const openModal = (edit = false) => {
        if (edit && info) {
            setForm(info);
        } else {
            setForm({
                type: '',
                distanceValue: '',
                distanceUnit: 'Mile',
                name: '',
            });
        }
        setIsModalOpen(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleAdd = (e) => {
        e.preventDefault();
        if (form.type && form.distanceValue && form.name) {
            setInfo(form);
            setIsModalOpen(false);
        } else {
            alert('Please fill in all required fields');
        }
    };

    const handleDelete = (e) => {
        e.stopPropagation();
        setInfo(null);
        setForm({
            type: '',
            distanceValue: '',
            distanceUnit: 'Mile',
            name: '',
        });
    };

    return (
        <div className="p-4">
            <div
                className={`
          w-[628px]
          ${info ? 'h-auto border-green-500' : 'h-[66px] border-slate-200 hover:border-blue-500'}
          rounded-[20px]
          border-2
          relative
          cursor-pointer
          transition
          flex flex-col justify-center
          px-6 py-4
        `}
                onClick={() => !info && openModal(false)}
            >
                <div className="flex justify-between items-center mb-2 text-lg text-gray-700 font-semibold relative">
                    <span>Nearest stations (Optional but recommended)</span>

                    {info ? (
                        <div className="absolute top-4 right-6 flex items-center gap-4">
                            <FaEdit
                                className="hover:text-blue-600 cursor-pointer"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    openModal(true);
                                }}
                                title="Edit"
                                size={18}
                            />
                            <FaTrash
                                className="hover:text-red-600 cursor-pointer"
                                onClick={handleDelete}
                                title="Delete"
                                size={18}
                            />
                        </div>
                    ) : (
                        <FaPlus
                            className="text-gray-500 hover:text-blue-600 cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                openModal(false);
                            }}
                            title="Add nearest station"
                            size={18}
                        />
                    )}
                </div>

                {info ? (
                    <div className="text-sm text-gray-700">
                        <strong>Type:</strong> {info.type} | <strong>Distance:</strong> {info.distanceValue} {info.distanceUnit} |{' '}
                        <strong>Name:</strong> {info.name}
                    </div>
                ) : (
                    <div className="text-gray-500">Click the + icon or card to add nearest station</div>
                )}
            </div>

            {isModalOpen && (
                <NearestStationModal form={form} onChange={handleChange} onCancel={handleCancel} onAdd={handleAdd} />
            )}
        </div>
    );
}

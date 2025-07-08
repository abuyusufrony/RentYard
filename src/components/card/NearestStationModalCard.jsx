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
        <div>
            <div
                className={`border-2 ${info ? 'border-green-500' : 'border-slate-200'
                    } rounded-xl p-4 cursor-pointer`}
                onClick={() => !info && openModal(false)}
            >
                <div className="text-lg flex justify-between items-center text-gray-700 font-semibold mb-2">
                    <span>Nearest stations (Optional but recommended)</span>
                    {!info ? (
                        <FaPlus
                            className="text-gray-500 hover:text-blue-600 cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                openModal(false);
                            }}
                            title="Add nearest station"
                            size={18}
                        />
                    ) : (
                        <div className="flex space-x-4 text-gray-600">
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

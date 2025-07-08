import React, { useState } from 'react';
import NearestLandmarkModal from '../modal/NearestLandmarkModal';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

export default function NearestLandmarkModalCard() {
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
                className={`border rounded-lg p-3 cursor-pointer flex justify-between items-center ${info ? 'border-green-500' : 'border-gray-300 hover:border-blue-500'
                    } transition-colors duration-200 shadow-sm bg-white max-w-md`}
                onClick={() => !info && openModal(false)}
            >
                <span className="text-gray-700 font-semibold text-base">
                    Nearest landmark{' '}
                    <span className="text-gray-400 text-xs">(Optional but recommended)</span>
                </span>

                {!info ? (
                    <FaPlus
                        className="text-gray-400 hover:text-blue-600 cursor-pointer"
                        onClick={(e) => {
                            e.stopPropagation();
                            openModal(false);
                        }}
                        title="Add nearest landmark"
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

            {info && (
                <div className="max-w-md mt-2 px-4 py-2 bg-gray-50 rounded-md text-sm text-gray-700 shadow-inner">
                    <strong>Type:</strong> {info.type} | <strong>Distance:</strong> {info.distanceValue} {info.distanceUnit} |{' '}
                    <strong>Name:</strong> {info.name}
                </div>
            )}

            {isModalOpen && (
                <NearestLandmarkModal form={form} onChange={handleChange} onCancel={handleCancel} onAdd={handleAdd} />
            )}
        </div>
    );
}

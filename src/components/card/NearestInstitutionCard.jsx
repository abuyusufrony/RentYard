import React, { useState } from 'react';
import NearestInstitutionModal from '../modal/NearestInstitutionModal';
import { FaPlus, FaTrash } from 'react-icons/fa6';
import { FaEdit } from 'react-icons/fa';

export default function NearestInstitutionModalCard() {
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
                    rounded-[20px] border-2
                    relative
                    cursor-pointer
                    transition
                    flex items-center justify-between gap-[32px]
                    px-6 py-4
                `}
                onClick={() => !info && openModal(false)}
            >
                {info ? (
                    <>
                        <div className="flex-1 text-left text-gray-800 text-sm">
                            <p>
                                <strong>Type:</strong> {info.type} |{' '}
                                <strong>Distance:</strong> {info.distanceValue} {info.distanceUnit} |{' '}
                                <strong>Name:</strong> {info.name}
                            </p>
                        </div>

                        <div className="absolute top-4 right-4 flex items-center gap-4">
                            <button
                                className="text-blue-500 hover:text-blue-700"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    openModal(true);
                                }}
                                title="Edit nearest institution"
                            >
                                <FaEdit size={18} />
                            </button>
                            <button
                                className="text-red-500 hover:text-red-700"
                                onClick={handleDelete}
                                title="Delete nearest institution"
                            >
                                <FaTrash size={18} />
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="w-full flex justify-between items-center text-lg text-gray-700">
                        <span>Nearest educational institution (optional but recommended)</span>
                        <FaPlus
                            className="text-gray-500 hover:text-blue-600 cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                openModal(false);
                            }}
                            title="Add nearest educational institution"
                            size={18}
                        />
                    </div>
                )}
            </div>

            {isModalOpen && (
                <NearestInstitutionModal
                    form={form}
                    onChange={handleChange}
                    onCancel={handleCancel}
                    onAdd={handleAdd}
                />
            )}
        </div>
    );
}

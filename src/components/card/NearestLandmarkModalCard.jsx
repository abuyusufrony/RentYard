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
        <div className="p-4">
            <div
                className={`
          relative
          w-[628px]
          ${info ? 'h-auto border-green-500' : 'h-[66px] border-slate-200 hover:border-blue-500'}
          rounded-[20px]
          border-2
          cursor-pointer
          transition-colors duration-200
          flex items-center justify-between
          px-6 py-4
          bg-white
          shadow-sm
          `}
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
                    <div className="absolute top-4 right-6 flex items-center gap-6 text-gray-600">
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
                <div className="max-w-[628px] mt-2 px-6 py-3 bg-gray-50 rounded-[20px] text-sm text-gray-700 shadow-inner">
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

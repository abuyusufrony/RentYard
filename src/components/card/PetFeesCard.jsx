import React, { useState } from 'react';
import PetFeesModal from '../modal/PetFeesModal';
import { FaPlus, FaTrashAlt, FaEdit } from 'react-icons/fa';

export default function PetFeesCard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form, setForm] = useState({
        petType: '',
        maxWeight: '',
        oneTimeFee: '',
        securityDeposit: '',
        monthlyRent: '',
    });
    const [info, setInfo] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleAdd = (e) => {
        e.preventDefault();
        const { petType, maxWeight, oneTimeFee, securityDeposit, monthlyRent } = form;
        if (petType && maxWeight && oneTimeFee && securityDeposit && monthlyRent) {
            setInfo(form);
            setIsModalOpen(false);
        }
    };

    const handleDelete = () => {
        setInfo(null);
        setForm({
            petType: '',
            maxWeight: '',
            oneTimeFee: '',
            securityDeposit: '',
            monthlyRent: '',
        });
    };

    const handleEdit = (e) => {
        e.stopPropagation();
        setForm(info);
        setIsModalOpen(true);
    };

    return (
        <div className="p-4">
            <div
                className={`border-2 ${info ? 'border-green-500' : 'border-slate-200'} rounded-xl p-2 transition relative`}
                onClick={() => !info && setIsModalOpen(true)}
            >
                {info ? (
                    <div className="text-left">
                        <div className="flex justify-between items-center mb-2 border-b-2 border-slate-400 pb-1">
                            <h3 className="font-semibold text-gray-700">Pet fees</h3>
                            <div className="flex items-center gap-2">
                                <button
                                    className="text-blue-500 hover:text-blue-700"
                                    onClick={handleEdit}
                                >
                                    <FaEdit />
                                </button>
                                <button
                                    className="text-red-500 hover:text-red-700"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDelete();
                                    }}
                                >
                                    <FaTrashAlt />
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-800">
                            <p><strong>Pet Type:</strong> {info.petType}</p>
                            <p><strong>Max Weight:</strong> {info.maxWeight} lb</p>
                            <p><strong>One-Time Fee:</strong> ${info.oneTimeFee}</p>
                            <p><strong>Security Deposit:</strong> ${info.securityDeposit}</p>
                            <p><strong>Monthly Rent:</strong> ${info.monthlyRent}</p>
                        </div>
                    </div>
                ) : (
                    <div className="text-lg flex justify-between gap-2">
                        <span>Pet fees</span>
                        <FaPlus />
                    </div>
                )}
            </div>

            {isModalOpen && (
                <PetFeesModal
                    form={form}
                    onChange={handleChange}
                    onCancel={() => setIsModalOpen(false)}
                    onAdd={handleAdd}
                />
            )}
        </div>
    );
}

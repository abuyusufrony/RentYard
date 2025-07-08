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
                className={`
                    w-[628px] 
                    ${info ? 'h-auto border-green-500' : 'h-[66px] border-slate-200 hover:border-blue-500'} 
                    rounded-[20px] border-2 
                    px-6 py-4 
                    relative 
                    cursor-pointer 
                    transition
                    flex
                    items-center
                    justify-between
                    gap-[32px]
                `}
                onClick={() => !info && setIsModalOpen(true)}
            >
                {info ? (
                    <>
                        <div className="flex-1 text-left text-gray-800 text-sm flex flex-wrap gap-x-6 gap-y-2">
                            <p><strong>Pet Type:</strong> {info.petType}</p>
                            <p><strong>Max Weight:</strong> {info.maxWeight} lb</p>
                            <p><strong>One-Time Fee:</strong> ${info.oneTimeFee}</p>
                            <p><strong>Security Deposit:</strong> ${info.securityDeposit}</p>
                            <p><strong>Monthly Rent:</strong> ${info.monthlyRent}</p>
                        </div>

                        <div className="absolute top-4 right-4 flex items-center gap-4">
                            <button
                                className="text-blue-500 hover:text-blue-700"
                                onClick={handleEdit}
                                title="Edit Pet Fees"
                            >
                                <FaEdit />
                            </button>
                            <button
                                className="text-red-500 hover:text-red-700"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleDelete();
                                }}
                                title="Delete Pet Fees"
                            >
                                <FaTrashAlt />
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="w-full flex justify-between items-center text-lg text-gray-700">
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

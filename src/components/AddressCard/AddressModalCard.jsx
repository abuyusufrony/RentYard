import React, { useState } from 'react';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';
import AddressModal from '../Addresmodal/AddressModal';

export default function AddressModalCard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [address, setAddress] = useState(null);
    const [form, setForm] = useState({ country: '', street: '', apt: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAdd = () => {
        if (form.country && form.street) {
            setAddress({ ...form });
            setIsModalOpen(false);
            setForm({
                propertyName: '',
                totalUnits: '',
                website: '',
                country: '',
                street: '',
                apt: '',
                city: '',
                state: '',
                zip: ''
            });
        }
    };

    const handleDelete = () => {
        setAddress(null);
    };

    return (
        <div className="p-4">
            {/* Card */}
            <div
                className={`border ${address ? 'border-green-500' : 'border-slate-200'} rounded-[20px] w-[628px] h-[66px] px-6 py-4 transition relative flex items-center gap-[32px] cursor-pointer`}
                onClick={() => !address && setIsModalOpen(true)}
            >
                {address ? (
                    <div className="flex justify-between items-center w-full relative">
                        <div className="text-sm text-gray-800 flex flex-wrap gap-x-4 gap-y-1 w-full">
                            <span><strong>Name:</strong> {address.propertyName || '—'}</span>
                            <span><strong>Units:</strong> {address.totalUnits || '—'}</span>
                            <span><strong>Website:</strong> {address.website || '—'}</span>
                            <span><strong>Country:</strong> {address.country}</span>
                            <span><strong>Street:</strong> {address.street}</span>
                            <span><strong>Apt/Unit:</strong> {address.apt || '—'}</span>
                            <span><strong>City:</strong> {address.city || '—'}</span>
                            <span><strong>State:</strong> {address.state || '—'}</span>
                            <span><strong>ZIP:</strong> {address.zip || '—'}</span>
                        </div>

                        <button
                            className="absolute top-1 right-2 text-red-500 hover:text-red-700"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDelete();
                            }}
                            title="Delete Address"
                        >
                            <FaTrashAlt />
                        </button>
                    </div>
                ) : (
                    <div className="flex justify-between items-center w-full text-gray-600">
                        <span className="text-base font-medium">Add Property Address</span>
                        <FaPlus />
                    </div>
                )}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <AddressModal
                    form={form}
                    onChange={handleChange}
                    onCancel={() => setIsModalOpen(false)}
                    onAdd={handleAdd}
                />
            )}
        </div>
    );
}

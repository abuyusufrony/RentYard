import React, { useState } from 'react';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';
import AddressModal from '../Addresmodal/AddressModal'; // import the new modal

export default function AddressModalCard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [address, setAddress] = useState(null);
    const [form, setForm] = useState({ country: '', street: '', apt: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAdd = () => {
        if (form.country && form.street) {
            setAddress({ ...form }); // Save entire form
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
                className={`border-2 ${address ? 'border-green-500' : 'border-slate-200'} rounded-xl p-2 transition relative`}
                onClick={() => !address && setIsModalOpen(true)}
            >
                {address ? (
                    <div className="text-left space-y-1">
                        <h3 className="font-semibold text-gray-700 mb-2 border-b-2 border-b-slate-400">Property Details</h3>
                        <div className="border border-gray-200 rounded-xl p-4 bg-slate-50">
                            <p className="text-sm text-gray-800 flex flex-wrap gap-x-4 gap-y-2">
                                <span><strong>Name:</strong> {address.propertyName}</span>
                                <span><strong>Units:</strong> {address.totalUnits}</span>
                                <span><strong>Website:</strong> {address.website || '—'}</span>
                                <span><strong>Country:</strong> {address.country}</span>
                                <span><strong>Street:</strong> {address.street}</span>
                                <span><strong>Apt/Unit:</strong> {address.apt || '—'}</span>
                                <span><strong>City:</strong> {address.city}</span>
                                <span><strong>State:</strong> {address.state}</span>
                                <span><strong>ZIP:</strong> {address.zip}</span>
                            </p>
                        </div>

                        <button
                            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
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
                    <div className="text-lg flex justify-between gap-2">
                        <span>Add Property Address</span>
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

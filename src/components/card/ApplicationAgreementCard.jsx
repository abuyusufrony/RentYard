import React, { useState } from 'react';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';
import ApplicationAgreementModal from '../modal/ApplicationAgreementModal';

export default function ApplicationAgreementCard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [info, setInfo] = useState(null);

    const [form, setForm] = useState({
        pdfFile: null,
        acceptInternational: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === 'checkbox') {
            setForm((prev) => ({ ...prev, [name]: checked }));
        } else if (type === 'file') {
            setForm((prev) => ({ ...prev, pdfFile: files[0] }));
        }
    };

    const handleAdd = (e) => {
        e.preventDefault();
        setInfo(form);
        setIsModalOpen(false);
    };

    const handleDelete = () => {
        setInfo(null);
    };

    return (
        <div className="p-4">
            <div
                className={`border-2 ${info ? 'border-green-500' : 'border-slate-200'} rounded-xl p-4 transition relative`}
                onClick={() => !info && setIsModalOpen(true)}
            >
                {info ? (
                    <div className="space-y-2">
                        <h3 className="font-semibold text-gray-700 mb-2 border-b border-gray-300 pb-1">
                            Application Agreement <span className="text-sm text-gray-400">(Optional)</span>
                        </h3>
                        <div className="bg-slate-50 border border-gray-200 p-4 rounded-xl">
                            <p className="text-sm text-gray-800 flex flex-col gap-2">
                                {info.pdfFile && <span><strong>Uploaded:</strong> {info.pdfFile.name}</span>}
                                <span><strong>International Students:</strong> {info.acceptInternational ? 'Accepted' : 'Not Accepted'}</span>
                            </p>
                        </div>

                        <button
                            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDelete();
                            }}
                        >
                            <FaTrashAlt />
                        </button>
                    </div>
                ) : (
                    <div className="text-lg flex justify-between items-center text-gray-700">
                        <span>Application Agreement <span className="text-sm text-gray-400 ml-1">(Optional)</span></span>
                        <FaPlus />
                    </div>
                )}
            </div>

            {isModalOpen && (
                <ApplicationAgreementModal
                    form={form}
                    onChange={handleChange}
                    onCancel={() => setIsModalOpen(false)}
                    onAdd={handleAdd}
                />
            )}
        </div>
    );
}

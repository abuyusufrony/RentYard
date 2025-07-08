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
        const { name, type, checked, files } = e.target;
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
                className={`border ${info ? 'border-green-500' : 'border-slate-200'} rounded-[20px] w-[628px] h-[66px] px-6 py-4 transition relative flex items-center gap-[32px] cursor-pointer`}
                onClick={() => !info && setIsModalOpen(true)}
            >
                {info ? (
                    <div className="flex justify-between items-center w-full relative">
                        <div className="text-sm text-gray-800 flex flex-wrap gap-x-4 gap-y-1 w-full">
                            {info.pdfFile && (
                                <span><strong>Uploaded:</strong> {info.pdfFile.name}</span>
                            )}
                            <span><strong>International Students:</strong> {info.acceptInternational ? 'Accepted' : 'Not Accepted'}</span>
                        </div>

                        <button
                            className="absolute top-1 right-2 text-red-500 hover:text-red-700"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDelete();
                            }}
                            title="Delete Application Agreement Info"
                        >
                            <FaTrashAlt />
                        </button>
                    </div>
                ) : (
                    <div className="flex justify-between items-center w-full text-gray-700">
                        <span className="text-base font-medium">
                            Application Agreement <span className="text-sm text-gray-400 ml-1">(Optional)</span>
                        </span>
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

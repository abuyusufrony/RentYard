import React from 'react';

export default function ApplicationAgreementModal({ form, onChange, onCancel, onAdd }) {
    return (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-6 animate-fade-in">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">
                        Application Agreement <span className="text-sm text-gray-400">(Optional)</span>
                    </h2>
                    <button
                        type="button"
                        className="text-gray-400 hover:text-red-500 text-2xl font-bold"
                        onClick={onCancel}
                    >
                        &times;
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={onAdd}>
                    {/* File Upload */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Upload Agreement
                        </label>
                        <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg h-20 cursor-pointer hover:border-blue-400 transition">
                            <input
                                type="file"
                                name="pdfFile"
                                accept="application/pdf"
                                onChange={onChange}
                                className="hidden"
                            />
                            <div className="flex items-center space-x-2 text-gray-500 text-sm">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12"
                                    />
                                </svg>
                                <span>{form.pdfFile ? form.pdfFile.name : '(PDF only)'}</span>
                            </div>
                        </label>
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center mb-6">
                        <input
                            type="checkbox"
                            name="acceptInternational"
                            checked={form.acceptInternational}
                            onChange={onChange}
                            id="acceptInternational"
                            className="mr-2 accent-blue-600"
                        />
                        <label htmlFor="acceptInternational" className="text-sm text-gray-700">
                            Accept immigrant & international student application
                        </label>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="px-5 py-2 rounded border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

// modal/ChargesModal.jsx

import React from 'react';

export default function ChargesModal({ form, onChange, onCancel, onAdd }) {
    return (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl space-y-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Add Charges</h2>
                    <button
                        className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                        onClick={onCancel}
                    >
                        &times;
                    </button>
                </div>

                <form onSubmit={onAdd}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Application fee (one-time)<span className="text-red-500">*</span>
                            </label>
                            <div className="flex">
                                <input
                                    type="number"
                                    name="applicationFee"
                                    value={form.applicationFee || ''}
                                    onChange={onChange}
                                    className="w-1/2 border rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="100"
                                />
                                <select
                                    name="applicationFeeAppliesTo"
                                    value={form.applicationFeeAppliesTo || ''}
                                    onChange={onChange}
                                    className="w-1/2 border-t border-b border-r rounded-r px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                >
                                    <option value="">Select</option>
                                    <option>All 18+ applicant</option>
                                    <option>All applicants</option>
                                    <option>Primary applicant only</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Admin fee (one-time)<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                name="adminFee"
                                value={form.adminFee || ''}
                                onChange={onChange}
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="15"
                            />
                        </div>
                    </div>

                    <div className="flex items-center mb-6 text-sm text-gray-600">
                        <span className="mr-2">ⓘ</span>
                        Type 0 if charges not applicable
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 mr-2"
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

// modal/RentReminderModal.jsx

import React from 'react';

export default function RentReminderModal({ form, onChange, onCancel, onAdd }) {
    return (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Rent frequency & payment reminder</h2>
                    <button
                        onClick={onCancel}
                        className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                    >
                        &times;
                    </button>
                </div>
                <form onSubmit={onAdd}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Rent payment frequency<span className="text-red-500">*</span>
                            </label>
                            <select
                                name="frequency"
                                value={form.frequency || ''}
                                onChange={onChange}
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                <option value="">Select</option>
                                <option>Monthly</option>
                                <option>Quarterly</option>
                                <option>Yearly</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Reminder/Statement date<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="date"
                                name="reminderDate"
                                value={form.reminderDate || ''}
                                onChange={onChange}
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Rent due date<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="date"
                                name="dueDate"
                                value={form.dueDate || ''}
                                onChange={onChange}
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end">
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

import React from 'react';

export default function LeasingModal({ form, onChange, onCancel, onAdd }) {
    return (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl space-y-4">
                {/* Modal Header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Add Leasing Info</h2>
                    <button
                        className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                        onClick={onCancel}
                    >
                        &times;
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={onAdd}>
                    {/* Top Two Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Leasing manager name<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="propertyName"
                                value={form.propertyName || ''}
                                onChange={onChange}
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Alex Johan"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Leasing manager Phone number<span className="text-red-500">*</span>
                            </label>
                            <div className="flex">
                                <span className="inline-flex items-center px-2 border border-r-0 rounded-l bg-gray-100">
                                    <img
                                        src="https://flagcdn.com/bd.svg"
                                        alt="Bangladesh"
                                        className="w-5 h-5"
                                    />
                                </span>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    value={form.phoneNumber || ''}
                                    onChange={onChange}
                                    className="w-full border rounded-r px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="+880"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">
                            Leasing manager email<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={form.email || ''}
                            onChange={onChange}
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="leasing@rentyeard.com"
                        />
                    </div>

                    {/* Checkbox (optional logic) */}
                    <div className="flex items-center mb-6">
                        <input
                            type="checkbox"
                            id="address"
                            name="sameAddress"
                            checked={form.sameAddress || false}
                            onChange={(e) =>
                                onChange({ target: { name: 'sameAddress', value: e.target.checked } })
                            }
                            className="mr-2"
                        />
                        <label htmlFor="address" className="text-sm">
                            Address (same as property)
                        </label>
                    </div>

                    {/* Footer Buttons */}
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

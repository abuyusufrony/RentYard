import React from 'react';

export default function NearestLandmarkModal({ form, onChange, onCancel, onAdd }) {
    return (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Add landmark</h2>
                    <button
                        onClick={onCancel}
                        className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                        aria-label="Close modal"
                    >
                        &times;
                    </button>
                </div>
                <form onSubmit={onAdd}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Landmark type<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="type"
                                value={form.type}
                                onChange={onChange}
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Museum"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Distance from property<span className="text-red-500">*</span>
                            </label>
                            <div className="flex">
                                <input
                                    type="number"
                                    name="distanceValue"
                                    step="0.1"
                                    value={form.distanceValue}
                                    onChange={onChange}
                                    className="w-1/2 border rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="1.5"
                                    required
                                />
                                <select
                                    name="distanceUnit"
                                    value={form.distanceUnit}
                                    onChange={onChange}
                                    className="w-1/2 border-t border-b border-r rounded-r px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                >
                                    <option>Mile</option>
                                    <option>Kilometer</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-1">
                            Landmark name<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={onChange}
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter name"
                            required
                        />
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

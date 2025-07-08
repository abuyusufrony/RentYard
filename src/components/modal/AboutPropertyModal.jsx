import React from 'react';

export default function AboutPropertyModal({ form, onChange, onCancel, onAdd }) {
    return (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 animate-fade-in">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">
                        About the property <span className="text-sm text-gray-400">(Optional)</span>
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
                    {/* Textarea */}
                    <div className="mb-6">
                        <textarea
                            name="propertyDescription"
                            value={form.propertyDescription}
                            onChange={onChange}
                            className="w-full border rounded px-3 py-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none text-sm text-gray-700"
                            placeholder="Type message here"
                        />
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

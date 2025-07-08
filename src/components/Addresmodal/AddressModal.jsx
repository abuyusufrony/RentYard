import React from 'react';

export default function AddressModal({ form, onChange, onCancel, onAdd }) {
    return (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-5xl p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">Add Property Address</h2>
                    <button
                        className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                        onClick={onCancel}
                    >
                        &times;
                    </button>
                </div>

                {/* Form */}
                <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Property Name*</label>
                        <input
                            type="text"
                            name="propertyName"
                            value={form.propertyName}
                            onChange={onChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"

                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Total Apartment Units*</label>
                        <input
                            type="number"
                            name="totalUnits"
                            value={form.totalUnits}
                            onChange={onChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"

                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Property Website (optional)</label>
                        <input
                            type="url"
                            name="website"
                            value={form.website}
                            onChange={onChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"

                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Country/Region*</label>
                        <input
                            type="text"
                            name="country"
                            value={form.country}
                            onChange={onChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"

                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Street Address*</label>
                        <input
                            type="text"
                            name="street"
                            value={form.street}
                            onChange={onChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"

                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Apt, Suite, Unit</label>
                        <input
                            type="text"
                            name="apt"
                            value={form.apt}
                            onChange={onChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"

                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">City/Town*</label>
                        <input
                            type="text"
                            name="city"
                            value={form.city}
                            onChange={onChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"

                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">State/Territory*</label>
                        <input
                            type="text"
                            name="state"
                            value={form.state}
                            onChange={onChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"

                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Zip Code*</label>
                        <input
                            type="text"
                            name="zip"
                            value={form.zip}
                            onChange={onChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"

                        />
                    </div>
                </form>

                {/* Buttons */}
                <div className="flex justify-end mt-6">
                    <button
                        className="px-4 py-2 text-gray-600 hover:text-gray-800 mr-2"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onAdd}
                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

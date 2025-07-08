import React, { useState } from 'react';

export default function ParkingModal({ form, onChange, onCancel, onAdd }) {
    const maxChars = 300;

    return (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Parking</h2>
                    <button
                        onClick={onCancel}
                        className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                    >
                        &times;
                    </button>
                </div>
                <form onSubmit={onAdd}>
                    <div className="mb-4 flex items-center  bg-gray-100 p-2.5 rounded-2xl w-80" >
                        <div>
                            <label className="block text-sm  mb-1 mr-3.5">
                                Guest vehicle parking time
                            </label>
                        </div>
                        <select
                            name="time"
                            value={form.time}
                            onChange={onChange}
                            className="w-20 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="">Select</option>
                            <option>2H</option>
                            <option>4H</option>
                            <option>6H</option>
                            <option>12H</option>
                            <option>24H</option>
                        </select>
                    </div>
                    <div className="mb-6 relative">
                        <textarea
                            name="overview"
                            value={form.overview}
                            onChange={onChange}
                            maxLength={maxChars}
                            placeholder="Write parking overview"
                            className="w-full border rounded px-3 py-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                        />
                        <span className="absolute bottom-2 right-4 text-gray-400 text-xs">
                            {maxChars - (form.overview?.length || 0)}
                        </span>
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

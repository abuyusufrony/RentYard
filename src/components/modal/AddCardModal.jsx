import React from "react";



export default function AddCardModal({ form, onChange, onCancel, onSave }) {

    return (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Add new card</h2>
                    <button onClick={onCancel} className="text-gray-400 hover:text-gray-600 text-2xl font-bold">
                        &times;
                    </button>
                </div>
                <form onSubmit={onSave}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Name on card</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={onChange}
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Alex Jones"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Card number</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="number"
                                    value={form.number}
                                    onChange={onChange}
                                    className="w-full border rounded pr-10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="0000 0000 0000 0000"
                                    maxLength={19}
                                    required
                                />
                                <span className="absolute inset-y-0 right-3 flex items-center">
                                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                                        <rect width="24" height="16" rx="2" fill="#1976D2" />
                                        <rect x="2" y="6" width="20" height="2" fill="#fff" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <label className="block text-sm font-medium mb-1">Expire date</label>
                            <input
                                type="text"
                                name="expiry"
                                value={form.expiry}
                                onChange={onChange}
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="MM/YY"
                                maxLength={5}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">CVC</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="cvc"
                                    value={form.cvc}
                                    onChange={onChange}
                                    className="w-full border rounded pr-10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="123"
                                    maxLength={4}
                                    required
                                />
                                <span className="absolute inset-y-0 right-3 flex items-center">
                                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                                        <circle cx="10" cy="10" r="8" stroke="#1976D2" strokeWidth="2" />
                                        <text x="10" y="15" textAnchor="middle" fontSize="10" fill="#1976D2">CVC</text>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

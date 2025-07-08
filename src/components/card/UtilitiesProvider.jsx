import React, { useState } from "react";

export default function UtilitiesProvider() {
    const [modalOpen, setModalOpen] = useState(false);
    const [utilityType, setUtilityType] = useState("");
    const [providerName, setProviderName] = useState("");
    const [savedUtility, setSavedUtility] = useState(null);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!utilityType || !providerName) return;
        setSavedUtility({ utilityType, providerName });
        closeModal();
    };

    const handleDelete = (e) => {
        e.stopPropagation();
        setSavedUtility(null);
        setUtilityType("");
        setProviderName("");
    };

    const handleEdit = (e) => {
        e.stopPropagation();
        if (savedUtility) {
            setUtilityType(savedUtility.utilityType);
            setProviderName(savedUtility.providerName);
            openModal();
        }
    };

    return (
        <>
            {/* Card */}
            <div
                className={`relative flex items-center justify-between cursor-pointer w-[628px] ${savedUtility
                        ? "border-2 border-green-500 h-auto"
                        : "border-2 border-slate-200 hover:border-blue-500 h-[66px]"
                    } rounded-[20px] bg-white p-4 gap-[32px] transition-colors duration-200 shadow-sm`}
                onClick={() => !savedUtility && openModal()}
            >
                <div>
                    <div className="font-semibold text-gray-700 text-base">
                        Utilities provider
                    </div>
                    <div className="text-sm text-gray-400">(Optional but recommended)</div>
                </div>

                {savedUtility ? (
                    <>
                        <div className="text-gray-700 font-medium">
                            {savedUtility.utilityType} — {savedUtility.providerName}
                        </div>

                        {/* Edit & Delete buttons absolutely positioned */}
                        <div className="absolute top-4 right-6 flex gap-6 text-gray-600">
                            <button
                                onClick={handleEdit}
                                aria-label="Edit"
                                className="hover:text-blue-600"
                                type="button"
                            >
                                ✏️
                            </button>
                            <button
                                onClick={handleDelete}
                                aria-label="Delete"
                                className="hover:text-red-600"
                                type="button"
                            >
                                🗑️
                            </button>
                        </div>
                    </>
                ) : (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            openModal();
                        }}
                        className="text-blue-600 font-semibold hover:text-blue-800"
                        type="button"
                    >
                        Add
                    </button>
                )}
            </div>

            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">Utilities provider</h2>
                            <button
                                onClick={closeModal}
                                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                                aria-label="Close modal"
                                type="button"
                            >
                                &times;
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Utility type<span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        value={utilityType}
                                        onChange={(e) => setUtilityType(e.target.value)}
                                        required
                                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    >
                                        <option value="">Select</option>
                                        <option>Electricity</option>
                                        <option>Water</option>
                                        <option>Gas</option>
                                        <option>Internet</option>
                                        <option>Trash</option>
                                        <option>Sewer</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Provider company name<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={providerName}
                                        onChange={(e) => setProviderName(e.target.value)}
                                        required
                                        placeholder="Enter name"
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
            )}
        </>
    );
}

import React, { useState } from 'react';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';
import TagSelectModal from '../modal/TagSelectModal'; // adjust path as needed

export default function CommunityFeaturesCard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTags, setSelectedTags] = useState([]);

    const handleAddTags = (tags) => {
        setSelectedTags(tags);
        setIsModalOpen(false);
    };

    const handleDelete = () => {
        setSelectedTags([]);
    };

    return (
        <div className="p-4">
            <div
                className={`border-2 rounded-xl p-4 transition relative cursor-pointer ${selectedTags.length > 0
                        ? 'border-green-500'
                        : 'border-slate-200 hover:border-blue-500'
                    }`}
                onClick={() => selectedTags.length === 0 && setIsModalOpen(true)}
            >
                {selectedTags.length > 0 ? (
                    <>
                        <h3 className="font-semibold text-gray-700 mb-2 border-b-2 border-slate-400">
                            Community’s amenity/features
                            <span className="text-sm text-gray-400 ml-2">(Optional but recommended)</span>
                        </h3>
                        <div className="flex flex-wrap gap-2 text-sm mt-2">
                            {selectedTags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <button
                            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDelete();
                            }}
                            title="Delete Selected Features"
                        >
                            <FaTrashAlt />
                        </button>
                    </>
                ) : (
                    <div className="text-lg flex justify-between items-center text-gray-500">
                        <span>Community’s amenity/features (Optional but recommended)</span>
                        <FaPlus />
                    </div>
                )}
            </div>

            {isModalOpen && (
                <TagSelectModal
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleAddTags}
                />
            )}
        </div>
    );
}

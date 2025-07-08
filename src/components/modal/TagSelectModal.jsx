import React, { useState } from "react";

const allTags = [
    "Air conditioning",
    "Cable ready",
    "Ceiling fan",
    "High ceilings",
    "Private balcony",
    "Refrigerator",
    "Wooded views",
    "W/D hookup",
    "Hardwood Floor (home)",
    "Fireplace (home)",
    "First aid kit",
    "Carbon monoxide alarm",
    "Expanded patios (home)",
    "Free parking on premises",
    "Fire extinguisher",
];

const TagSelectModal = ({ onClose, onSubmit }) => {
    const [search, setSearch] = useState("");
    const [selectedTags, setSelectedTags] = useState([]);

    const toggleTag = (tag) => {
        setSelectedTags((prev) =>
            prev.includes(tag)
                ? prev.filter((t) => t !== tag)
                : [...prev, tag]
        );
    };

    const handleSubmit = () => {
        onSubmit(selectedTags); // send data to parent
        onClose(); // close modal
    };

    const filteredTags = allTags.filter((tag) =>
        tag.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Community's amenity/features
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 text-xl font-bold"
                    >
                        &times;
                    </button>
                </div>

                {/* Search */}
                <input
                    type="text"
                    placeholder="🔍 Search amenities"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
                />

                {/* Tags */}
                <div className="flex flex-wrap gap-2 max-h-64 overflow-y-auto">
                    {filteredTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => toggleTag(tag)}
                            className={`px-4 py-2 rounded-md border text-sm transition ${selectedTags.includes(tag)
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex justify-end mt-6">
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TagSelectModal;

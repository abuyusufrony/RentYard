import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';

export default function PropertyMediaForm() {
    const [featuredPhoto, setFeaturedPhoto] = useState(null);
    const [featuredPreview, setFeaturedPreview] = useState(null);

    const [morePhotos, setMorePhotos] = useState(Array(8).fill(null));
    const [morePreviews, setMorePreviews] = useState(Array(8).fill(null));

    const [videos, setVideos] = useState({
        property: null,
        virtualTour: null,
        aerial: null,
    });
    const [videoPreviews, setVideoPreviews] = useState({
        property: null,
        virtualTour: null,
        aerial: null,
    });

    const handleFeaturedPhoto = (e) => {
        const file = e.target.files[0];
        setFeaturedPhoto(file);
        setFeaturedPreview(URL.createObjectURL(file));
    };

    const handleMorePhotosChange = (index, file) => {
        const updatedFiles = [...morePhotos];
        const updatedPreviews = [...morePreviews];
        updatedFiles[index] = file;
        updatedPreviews[index] = URL.createObjectURL(file);
        setMorePhotos(updatedFiles);
        setMorePreviews(updatedPreviews);
    };

    const handleVideoChange = (key, file) => {
        setVideos((prev) => ({ ...prev, [key]: file }));
        setVideoPreviews((prev) => ({ ...prev, [key]: URL.createObjectURL(file) }));
    };

    const inputStyle = 'w-full h-full opacity-0 absolute cursor-pointer z-10';

    const uploadBox = 'relative border-2 border-dashed border-blue-400 rounded-[12px] flex items-center justify-center text-xs text-gray-500 hover:border-blue-600 overflow-hidden';

    return (
        <div className="space-y-8 p-6">
            {/* === Property Gallery Section === */}
            <div className="border-2 border-gray-200 rounded-lg shadow-sm p-4">
                <h2 className="text-lg font-semibold mb-3 border-b-2 border-gray-200 rounded-lg bg-white p-2">
                    Property gallery <span className="text-gray-500 text-sm">(It's not unit photo)*</span>
                </h2>

                {/* Responsive layout: stack on mobile, side-by-side on desktop */}
                <div className="flex flex-col lg:flex-row gap-5">
                    {/* === Featured Photo === */}
                    <div className="space-y-2">
                        <p className="text-sm text-red-500">Featured Photo*</p>
                        <div className={`${uploadBox} w-[217px] h-[165px] p-[40px]`}>
                            <input
                                type="file"
                                accept="image/jpeg,image/png"
                                onChange={handleFeaturedPhoto}
                                className={inputStyle}
                            />
                            {featuredPreview ? (
                                <img
                                    src={featuredPreview}
                                    alt="Preview"
                                    className="w-full h-full object-cover rounded-[12px]"
                                />
                            ) : (
                                <div className="flex flex-col items-center text-center gap-1 z-0">
                                    <FaUpload className="text-xl" />
                                    <span className="text-xs leading-tight">Upload cover photo<br />(.jpg, .png)</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* === More Photos === */}
                    <div className="flex flex-col space-y-2">
                        <p className="text-sm text-gray-600">More Photos (optional)</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[10px]">
                            {morePhotos.map((photo, index) => (
                                <div key={index} className={`${uploadBox} w-[101px] h-[76px] p-[30px]`}>
                                    <input
                                        type="file"
                                        accept="image/jpeg,image/png"
                                        onChange={(e) => handleMorePhotosChange(index, e.target.files[0])}
                                        className={inputStyle}
                                    />
                                    {morePreviews[index] ? (
                                        <img
                                            src={morePreviews[index]}
                                            alt={`More Preview ${index + 1}`}
                                            className="w-full h-full object-cover rounded-[12px]"
                                        />
                                    ) : (
                                        <FaUpload className="text-lg text-gray-500 z-0" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            {/* === Videos Section (from previous version) === */}
            <div className='border-2 border-gray-200 rounded-lg shadow-sm  p-2'>
                <h2 className="text-lg font-semibold mb-3 border-b-2  p-1.5 border-gray-200 rounded-lg">
                    Videos <span className="text-gray-500 text-sm">(optional)</span>
                </h2>
                <div className="flex gap-5">
                    {[
                        { label: 'Property Video', key: 'property' },
                        { label: 'Virtual Tour', key: 'virtualTour' },
                        { label: 'Aerial Video', key: 'aerial' },
                    ].map(({ label, key }) => (
                        <div key={key} className="flex flex-col w-[185px]">
                            <p className="text-sm mb-1">{label} (optional)</p>
                            <div className="h-[143px]">
                                <div className={uploadBox}>
                                    <input
                                        type="file"
                                        accept="video/mp4,video/quicktime"
                                        onChange={(e) => handleVideoChange(key, e.target.files[0])}
                                        className={inputStyle}
                                    />
                                    {videoPreviews[key] ? (
                                        <video
                                            src={videoPreviews[key]}
                                            controls
                                            className="w-full h-full object-cover rounded-[12px]"
                                        />
                                    ) : (
                                        <div className="flex flex-col items-center text-center gap-1 z-0">
                                            <FaUpload className="text-xl" />
                                            <span className="text-xs">Upload video<br />(MP4, MOV)</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

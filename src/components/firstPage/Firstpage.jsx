import React, { useState } from 'react';
import { CgHome } from 'react-icons/cg';
import { RiBuilding2Line } from 'react-icons/ri';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { IoKeyOutline } from 'react-icons/io5';
import { GoPerson } from 'react-icons/go';
import { FaPersonShelter } from 'react-icons/fa6';
import { FiUpload } from 'react-icons/fi';
import { Link } from 'react-router';

export default function PropertyForm() {
    const [selectedRole, setSelectedRole] = useState(null);
    const [selectedPropertyType, setSelectedPropertyType] = useState(null);

    const handleRoleSelect = (role) => setSelectedRole(role);
    const handlePropertyTypeSelect = (type) => setSelectedPropertyType(type);

    return (
        <div className="p-4 md:p-6 space-y-8 max-w-7xl mx-auto">

            {/* Property Types */}
            <div>
                <h2 className="text-xl font-bold mb-4 text-gray-800">Select Property Type</h2>
                <div className="flex flex-wrap gap-4 justify-between">
                    {[
                        { key: 'single', title: 'Single House Property', icon: <CgHome />, desc: 'Single unit for single family' },
                        { key: 'apartment', title: 'Apartments Complex', icon: <RiBuilding2Line />, desc: 'Multiple unit house for families' },
                        { key: 'condo', title: 'Condominiums', icon: <HiBuildingOffice2 />, desc: 'Multiple unit house for families' }
                    ].map(prop => (
                        <div
                            key={prop.key}
                            className={`card w-full sm:w-80 shadow-md cursor-pointer transition-all border-2 rounded-xl ${selectedPropertyType === prop.key ? 'border-sky-500 bg-sky-50' : 'border-gray-200'
                                }`}
                            onClick={() => handlePropertyTypeSelect(prop.key)}
                        >
                            <div className="card-body p-4">
                                <h3 className="card-title font-semibold text-lg flex items-center gap-2">
                                    {prop.icon} {prop.title}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">{prop.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Role Selection */}
            <div>
                <h2 className="text-xl font-bold mb-4 text-gray-800">Select Your Role</h2>
                <div className="flex flex-wrap gap-4 justify-between">
                    {[
                        { key: 'landlord', title: 'Landlord', icon: <IoKeyOutline />, desc: 'Owner of the property' },
                        { key: 'realtor', title: 'Realtor', icon: <GoPerson />, desc: 'Manage property on behalf of owner' },
                        { key: 'company', title: 'Property Management Company', icon: <FaPersonShelter />, desc: 'For management company' }
                    ].map(role => (
                        <div
                            key={role.key}
                            className={`card w-full sm:w-80 shadow-md cursor-pointer transition-all border-2 rounded-xl ${selectedRole === role.key ? 'border-sky-500 bg-sky-50' : 'border-gray-200'
                                }`}
                            onClick={() => handleRoleSelect(role.key)}
                        >
                            <div className="card-body p-4">
                                <h3 className="card-title font-semibold text-lg flex items-center gap-2">
                                    {role.icon} {role.title}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">{role.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Conditional Role-Based Sections */}
            {selectedRole === 'landlord' && (
                <div className="border-2 rounded-xl p-4">
                    <h2 className="text-lg font-semibold bg-slate-100 p-2 rounded-t">Proof of Ownership</h2>
                    <p className="mt-4 font-medium">Ownership Document <span className="text-red-500">*</span></p>
                    <label className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-sky-100 text-slate-700 rounded-lg cursor-pointer hover:bg-sky-200 transition">
                        <FiUpload className="text-xl" />
                        <span>PDF only</span>
                        <input
                            type="file"
                            accept="application/pdf"
                            className="hidden"
                            onChange={(e) => console.log(e.target.files[0])}
                        />
                    </label>
                </div>
            )}

            {selectedRole === 'realtor' && (
                <div className="border-2 rounded-xl p-4">
                    <h2 className="text-lg font-semibold bg-slate-100 p-2 rounded-t">Realtor Verification</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div>
                            <label className="block font-medium mb-1">License Number <span className="text-red-500">**</span></label>
                            <input className="w-full border border-gray-300 bg-sky-100 p-2 rounded" type="text" />
                        </div>
                        {[1, 2].map((_, i) => (
                            <div key={i}>
                                <label className="block font-medium mb-1">Upload Document</label>
                                <label className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 text-slate-700 rounded-lg cursor-pointer hover:bg-sky-200 transition">
                                    <FiUpload className="text-xl" />
                                    <span>PDF only</span>
                                    <input
                                        type="file"
                                        accept="application/pdf"
                                        className="hidden"
                                        onChange={(e) => console.log(e.target.files[0])}
                                    />
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {selectedRole === 'company' && (
                <form className="border rounded-xl p-4 bg-white shadow">
                    <h2 className="text-lg font-semibold mb-4 bg-slate-50 p-2 rounded">Company & Office Info</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        {[
                            { label: 'Company name*' },
                            { label: 'Company Identifier (EIN/TIN)*' },
                            { label: 'Your job title*' }
                        ].map(({ label }, i) => (
                            <div key={i}>
                                <label className="block text-sm font-medium text-gray-700">{label}</label>
                                <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" />
                            </div>
                        ))}

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Agreement with landlord/owner*</label>
                            <input
                                type="file"
                                accept=".pdf"
                                className="w-full border border-gray-300 rounded-md px-3 py-[0.52rem] mt-1 text-sm text-gray-600 file:mr-3 file:py-1 file:px-3 file:rounded file:border-0 file:bg-gray-100 file:text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Country/Region*</label>
                            <select className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 bg-white text-gray-700">
                                <option>Choose country</option>
                                <option>Bangladesh</option>
                                <option>USA</option>
                                <option>India</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Street address*</label>
                            <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Apt, suite, unit (optional)</label>
                            <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone number*</label>
                            <div className="flex items-center gap-2 mt-1">
                                <select className="border border-gray-300 rounded-md px-2 py-2 text-sm bg-white">
                                    <option value="+880">🇧🇩 +880</option>
                                    <option value="+1">🇺🇸 +1</option>
                                    <option value="+91">🇮🇳 +91</option>
                                </select>
                                <input type="text" className="flex-1 border border-gray-300 rounded-md px-3 py-2" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Contact email*</label>
                            <input type="email" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">City/Town*</label>
                            <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">State/Territory*</label>
                            <select className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 bg-white text-gray-700">
                                <option>Choose state</option>
                                <option>Texas</option>
                                <option>California</option>
                                <option>Florida</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Zip code*</label>
                            <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" />
                        </div>
                    </div>

                    <div className="flex items-center space-x-2 pt-4">
                        <input type="checkbox" id="terms" className="accent-blue-500 rounded" />
                        <label htmlFor="terms" className="text-sm text-gray-700">
                            Accept RentYard property adding terms & conditions
                        </label>
                    </div>
                </form>
            )}

            <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6">
                <button className="btn border border-gray-300 rounded-md px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 transition">Back</button>
                <button className="btn bg-blue-600 text-white rounded-md px-6 py-2 hover:bg-blue-700 transition"> <Link to={'/info'}>Get Started</Link> </button>
            </div>
        </div>
    );
}

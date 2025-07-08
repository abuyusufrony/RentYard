import React, { useState } from 'react';
import ParkingModal from '../modal/ParkingModal';
import { FaPlus, FaTrashAlt, FaEdit } from 'react-icons/fa';

export default function ParkingCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [info, setInfo] = useState(null);
  const [form, setForm] = useState({
    time: '',
    overview: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (form.time && form.overview.trim()) {
      setInfo(form);
      setIsModalOpen(false);
    }
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    setInfo(null);
    setForm({ time: '', overview: '' });
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    setForm(info);
    setIsModalOpen(true);
  };

  return (
    <div className="p-4">
      <div
        className={`border-2 ${info ? 'border-green-500' : 'border-slate-200'} rounded-xl p-2 transition relative`}
        onClick={() => !info && setIsModalOpen(true)}
      >
        {info ? (
          <div className="text-left">
            <div className="flex justify-between items-center mb-2 border-b-2 border-slate-400 pb-1">
              <h3 className="font-semibold text-gray-700">Parking</h3>
              <div className="flex items-center gap-2">
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={handleEdit}
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={handleDelete}
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
            <div className="text-sm text-gray-800 space-y-1">
              <p><strong>Guest Parking Time:</strong> {info.time}</p>
              <p><strong>Overview:</strong> {info.overview}</p>
            </div>
          </div>
        ) : (
          <div className="text-lg flex justify-between gap-2">
            <span>Parking</span>
            <FaPlus />
          </div>
        )}
      </div>

      {isModalOpen && (
        <ParkingModal
          form={form}
          onChange={handleChange}
          onCancel={() => setIsModalOpen(false)}
          onAdd={handleAdd}
        />
      )}
    </div>
  );
}

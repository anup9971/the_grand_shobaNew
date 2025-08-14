"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiX, FiCalendar, FiUser, FiTag } from "react-icons/fi";

export default function BookingModal({ open, onClose, roomId }) {
  if (!open) return null;
  let router = useRouter()
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white text-gray-900 rounded-xl w-full max-w-4xl relative overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          <FiX size={24} />
        </button>

        {/* Content */}
        <div className="p-6 space-y-6">
          <h2 className="text-2xl font-serif">Select Dates and Guests</h2>

          {/* Dates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Check-in</label>
              <div className="flex items-center border rounded px-3 py-2">
                <FiCalendar className="mr-2 text-gray-500" />
                <input
                  type="date"
                  
             
                  className="flex-1 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">Checkout</label>
              <div className="flex items-center border rounded px-3 py-2">
                <FiCalendar className="mr-2 text-gray-500" />
                <input
                  type="date"
                  
                  
                  className="flex-1 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Rooms & Guests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Rooms & Guests</label>
              <div className="flex items-center border rounded px-3 py-2">
                <FiUser className="mr-2 text-gray-500" />
                <select className="flex-1 outline-none">
                  <option>1 Room, 1 Guest</option>
                  <option>1 Room, 2 Guests</option>
                  <option>2 Rooms, 4 Guests</option>
                </select>
              </div>
              <label className="flex items-center mt-2 text-sm">
                <input type="checkbox" className="mr-2" /> Accessible
              </label>
            </div>

            <div>
              <label className="block text-sm mb-1">Special Rates</label>
              <div className="flex items-center border rounded px-3 py-2">
                <FiTag className="mr-2 text-gray-500" />
                <select className="flex-1 outline-none">
                  <option>Government/Military Business</option>
                  <option>Corporate</option>
                  <option>Member Discount</option>
                </select>
              </div>
              <label className="flex items-center mt-2 text-sm">
                <input type="checkbox" className="mr-2" /> Use Points
              </label>
            </div>
          </div>

          {/* Button */}
          <div className="pt-4">
            <button onClick={()=> router.push(`/room&suite/${roomId}`)} className="bg-yellow-300 hover:bg-yellow-400 px-6 py-3 w-full sm:w-auto font-bold rounded">
              CHECK ROOMS & RATES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

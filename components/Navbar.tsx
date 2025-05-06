// components/Navbar.tsx
'use client';

import { useState } from 'react';
import { Bell, User } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-white text-black flex justify-between items-center p-4 z-50 transition-all duration-300 border-b-2 border-black`}
    >
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <Image src="/assets/sdarlyLogo.svg" alt="Logo" width={120} height={40} />
      </div>

      {/* Icon Buttons Section */}
      <div className="flex items-center gap-4">
        {/* Notifications Button */}
        <button
          onClick={() => setShowNotifications(!showNotifications)}
          className="relative p-2 rounded-full hover:bg-blue-100 hover:text-blue-600"
        >
          <Bell size={24} />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            12
          </span>
        </button>
        {showNotifications && (
          <div className="absolute top-16 right-16 bg-white text-black p-4 rounded shadow-lg">
            <p>No new notifications</p>
          </div>
        )}

        {/*Dropdown Button */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="p-2 rounded-full hover:bg-blue-100 hover:text-blue-600"
          >
            <User size={24} />
          </button>
          {showDropdown && (
            <div className="absolute top-12 right-0 bg-white text-black p-4 rounded shadow-lg">
              <p className="font-bold">Moni Roy</p>
              <p className="text-sm text-gray-500">Admin</p>
              <hr className="my-2" />
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                Profile
              </button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

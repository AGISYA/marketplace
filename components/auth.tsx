"use client";

import { useState } from "react";
import { FaUser } from "react-icons/fa";
import Link from "next/link";

export default function Auth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowDropdown(false);
  };

  return (
    <div className="relative">
      {isLoggedIn ? (
        <button
          className="flex items-center gap-2"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <FaUser />
          <span className="hidden md:inline">My Account</span>
        </button>
      ) : (
        <button className="flex items-center gap-2" onClick={handleLogin}>
          <FaUser />
          <span className="hidden md:inline">Login</span>
        </button>
      )}

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <Link
            href="/profile"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Profile
          </Link>
          <Link
            href="/orders"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Orders
          </Link>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

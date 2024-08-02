/* eslint-disable max-len */
import React, { useState } from "react";

const NotificationBell = () => {
  const [hasNotifications, setHasNotifications] = useState(true);

  const handleBellClick = () => {
    setHasNotifications(false);
  };

  return (
    <div className="relative">
      <button onClick={handleBellClick} className="relative focus:outline-none">
        <svg
          className="w-[30px] h-[30px] md:w-8 md:h-8 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a7.003 7.003 0 00-5-6.708V4a1 1 0 10-2 0v.292A7.003 7.003 0 006 11v3.159c0 .417-.164.819-.452 1.113L4 17h11zm-5 2a3 3 0 006 0"
          />
        </svg>

        {hasNotifications && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-3 h-3 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2"></span>
        )}
      </button>
    </div>
  );
};

export default NotificationBell;

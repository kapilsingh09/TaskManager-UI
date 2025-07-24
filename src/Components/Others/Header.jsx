import React from 'react';

const Header = ({ onLogout, data }) => {
  return (
    <header className="bg-gradient-to-r from-[#1C1C1C] to-[#2F2F2F] shadow-md px-8 py-4 flex items-center justify-between">
      <div>
        <h2 className="text-white text-xl font-semibold">
          Welcome back,
          <span className="block text-green-400 text-2xl mt-1">{data?.name || 'User'}</span>
        </h2>
      </div>

      <button
        onClick={onLogout}
        className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 rounded-xl transition-all duration-200 shadow-sm"
      >
        Log out
      </button>
    </header>
  );
};

export default Header;

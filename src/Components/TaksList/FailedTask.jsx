import React from 'react';

const FailedTask = () => {
  return (
    <div className="flex-shrink-0 h-full w-[320px] p-5 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl shadow-lg text-white">
      
      <div className="flex justify-between items-center">
        <span className="bg-white text-black bg-opacity-20 text-xs font-medium px-3 py-1 rounded-full">
          Category
        </span>
        <span className="text-xs opacity-90">20 Feb 2022</span>
      </div>

      <h2 className="mt-6 text-xl font-bold leading-snug">
        Make a YouTube Video
      </h2>

      <p className="mt-2 text-sm text-white text-opacity-90">
        You missed the deadline. Review what went wrong and plan a new strategy to get back on track.
      </p>

      <div className="mt-4">
        <button className="w-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200 text-red-400 font-semibold text-sm py-2 px-4 rounded-md shadow-md">
          ❌ Task Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;

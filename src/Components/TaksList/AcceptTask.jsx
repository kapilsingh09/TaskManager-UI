import React from 'react';

const AcceptTask = ({task}) => {
  console.log(task);
  
  return (
    <div className="flex-shrink-0 h-full w-[320px] p-5 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl shadow-lg text-white">
      
      <div className="flex justify-between items-center">
        <span className="bg-white bg-opacity-20 text-black text-xs font-medium px-3 py-1 rounded-full">
          Category
        </span>
        <span className="text-xs opacity-90">20 Feb 2022</span>
      </div>

      <h2 className="mt-6 text-xl font-bold leading-snug">
        Make a YouTube Video
      </h2>

      <p className="mt-2 text-sm text-white text-opacity-90">
        Plan and record your YouTube video today. Don’t forget to edit and add captions before uploading.
      </p>

      <div className="flex justify-between gap-2 mt-5">
        <button className="w-1/2 bg-green-500 hover:bg-green-600 transition-colors duration-200 text-white text-sm font-semibold py-2 px-3 rounded-md shadow">
          ✅ Completed
        </button>
        <button className="w-1/2 bg-red-600 hover:bg-red-700 transition-colors duration-200 text-white text-sm font-semibold py-2 px-3 rounded-md shadow">
          ❌ Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;

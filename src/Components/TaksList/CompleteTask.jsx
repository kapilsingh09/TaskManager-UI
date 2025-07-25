import React from 'react';

const CompleteTask = ({task}) => {
  return (
    <div className="flex-shrink-0 h-full w-[320px] p-5 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-lg text-white">
      
      <div className="flex justify-between items-center">
        <span className="bg-white bg-opacity-20 text-black text-xs font-bold px-3 py-1 rounded-full">
          {task.category}
        </span>
        <span className="text-xs opacity-90">{task.task_date}</span>
      </div>

      <h2 className="mt-6 text-xl font-bold leading-snug">
      {task.task_title}
      </h2>

      <p className="mt-2 text-sm text-white text-opacity-90">
        {task.task_description}
      </p>

      <div className="mt-4">
        <button className="w-full bg-green-500 hover:bg-green-600 transition-colors duration-200 text-white text-sm font-medium py-2 px-4 rounded-md shadow-md">
          ✅ Mark as Completed
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;

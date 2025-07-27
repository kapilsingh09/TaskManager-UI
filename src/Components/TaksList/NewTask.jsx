import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const NewTask = ({ task }) => {
  const { updateUserData } = useContext(AuthContext);

  return (
    <div className="flex-shrink-0 h-full w-[320px] p-5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg text-white">
      
      <div className="flex justify-between items-center">
        <span className="bg-white bg-opacity-20 text-black font-bold text-xs px-3 py-1 rounded-full">
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

      <div className="mt-5">
        <button className="w-full bg-green-500 hover:bg-green-600 transition-colors duration-200 text-white font-semibold text-sm py-2 px-4 rounded-md shadow">
          ✅ Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;

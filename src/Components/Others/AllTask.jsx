import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

// Dynamically assign a background color based on task status
const getColorClass = (task) => {
  if (task.completed) return 'bg-green-400';
  if (task.failed) return 'bg-red-400';
  if (task.active) return 'bg-blue-400';
  if (task.new_task) return 'bg-yellow-400';
  return 'bg-gray-400'; // fallback
};

const AllTask = () => {
  const authData = useContext(AuthContext);
  const empdata = authData.employees || [];

  return (
    <div className="bg-[#1C1C1C] p-6 mt-6 rounded-xl shadow-inner ">
      <h2 className="text-2xl font-semibold mb-6 text-white">All Tasks</h2>

      {/* Header Row */}
      <div className="grid grid-cols-5 gap-4 text-white border-b border-gray-600 pb-3 mb-6 ">
        <h3 className="font-semibold">Employee Name</h3>
        <h3 className="font-semibold text-center"> New</h3>
        <h3 className="font-semibold text-center"> Active</h3>
        <h3 className="font-semibold text-center"> Completed</h3>
        <h3 className="font-semibold text-center"> Failed</h3>
      </div>

      {/* Stats + Task Cards */}
      <div className='h-[60vh] overflow-auto hide-scroll'>
      {empdata.length === 0 ? (
        <p className="text-gray-400">No employees or tasks found.</p>
      ) : (
        empdata.map((emp) => (
          <div key={emp.id} className="mb-8">
            {/* Task Cards */}

            <div className="space-y-3 ">
              {emp.tasks.map((task, index) => (
                <div
                  key={`${emp.id}-${index}`}
                  className={`${getColorClass(
                    task
                  )} flex justify-between items-center py-3 px-6 rounded-lg text-black shadow-md `}
                >
                  <p className="font-medium">{emp.name}</p>
                  <p className="font-semibold">{task.task_title}</p>
                  <p className="text-sm italic">{task.task_description}</p>
                  <span className="text-sm font-medium bg-white/30 px-3 py-1 rounded-full">
                    {task.completed
                      ? 'Completed'
                      : task.failed
                      ? 'Failed'
                      : task.active
                      ? 'In Progress'
                      : task.new_task
                      ? 'New'
                      : 'Unknown'}
                  </span>
                </div>
              ))}
            </div>
            </div>
        ))
      )}
      </div>
    </div>
  );
};

export default AllTask;

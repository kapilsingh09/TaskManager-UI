// src/components/AllTask.js
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const AllTask = () => {
  const { employees } = useContext(AuthContext);
  const employeeList = employees || [];

  return (
    <div className="bg-[#1C1C1C] p-6 mt-6 rounded-xl shadow-inner">
      <h2 className="text-2xl font-semibold mb-6 text-white">All Tasks</h2>

      {/* Header Row */}
      <div className="grid grid-cols-5 gap-4 text-white border-b border-gray-600 pb-3 mb-6">
        <h3 className="font-semibold">Employee Name</h3>
        <h3 className="font-semibold text-center">New</h3>
        <h3 className="font-semibold text-center">Active</h3>
        <h3 className="font-semibold text-center">Completed</h3>
        <h3 className="font-semibold text-center">Failed</h3>
      </div>

      {/* Task Summary Rows */}
      <div className="h-[60vh] overflow-auto hide-scroll">
        {employeeList.length === 0 ? (
          <p className="text-gray-400">No employees or tasks found.</p>
        ) : (
          employeeList.map((emp) => (
            <div
              key={emp.id}
              className="grid grid-cols-5 gap-4 text-white items-center py-3 px-4 rounded-lg bg-[#2a2a2a] shadow-md mb-3"
            >
              <p className="font-medium">{emp.name}</p>
              <p className="text-center">{emp.task_stats?.new_task || 0}</p>
              <p className="text-center">{emp.task_stats?.active || 0}</p>
              <p className="text-center">{emp.task_stats?.completed || 0}</p>
              <p className="text-center">{emp.task_stats?.failed || 0}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllTask;

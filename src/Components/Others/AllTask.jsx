// src/components/AllTask.js
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const AllTask = () => {
  const { employees } = useContext(AuthContext);
  const employeeList = employees || [];
  const [expandedEmployee, setExpandedEmployee] = useState(null);
  // console.log(employees);
  // console.log(employeeList);
  

  return (
    <div className="bg-[#1C1C1C] p-6 rounded-xl shadow-inner">
      <h2 className="text-2xl font-semibold mb-6 text-white">All Tasks</h2>
      
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 text-center">
          <h3 className="text-blue-400 font-semibold">Total New Tasks</h3>
          <p className="text-2xl font-bold text-blue-300">
            {employeeList.reduce((sum, emp) => sum + (emp.task_stats?.new_task || 0), 0)}
          </p>
        </div>
        <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4 text-center">
          <h3 className="text-yellow-400 font-semibold">Total Active Tasks</h3>
          <p className="text-2xl font-bold text-yellow-300">
            {employeeList.reduce((sum, emp) => sum + (emp.task_stats?.active || 0), 0)}
          </p>
        </div>
        <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center">
          <h3 className="text-green-400 font-semibold">Total Completed</h3>
          <p className="text-2xl font-bold text-green-300">
            {employeeList.reduce((sum, emp) => sum + (emp.task_stats?.completed || 0), 0)}
          </p>
        </div>
        <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-center">
          <h3 className="text-red-400 font-semibold">Total Failed</h3>
          <p className="text-2xl font-bold text-red-300">
            {employeeList.reduce((sum, emp) => sum + (emp.task_stats?.failed || 0), 0)}
          </p>
        </div>
      </div>

      {/* Header Row */}
      <div className="grid grid-cols-6 gap-4 text-white border-b border-gray-600 pb-3 mb-6">
        <h3 className="font-semibold">Employee Name</h3>
        <h3 className="font-semibold text-center">New</h3>
        <h3 className="font-semibold text-center">Active</h3>
        <h3 className="font-semibold text-center">Completed</h3>
        <h3 className="font-semibold text-center">Failed</h3>
        <h3 className="font-semibold text-center">Details</h3>
      </div>

      {/* Task Summary Rows */}
      <div className="h-[60vh] overflow-auto hide-scroll">
        {employeeList.length === 0 ? (
          <p className="text-gray-400">No employees or tasks found.</p>
        ) : (
          employeeList.map((emp) => (
            <div key={emp.id} className="mb-3">
              {/* Employee Summary Row */}
              <div
                className="grid grid-cols-6 gap-4 text-white items-center py-3 px-4 rounded-lg bg-[#2a2a2a] shadow-md cursor-pointer hover:bg-[#333] transition-colors"
                onClick={() => setExpandedEmployee(expandedEmployee === emp.id ? null : emp.id)}
              >
                <p className="font-medium">{emp.name}</p>
                <p className="text-center">{emp.task_stats?.new_task || 0}</p>
                <p className="text-center">{emp.task_stats?.active || 0}</p>
                <p className="text-center">{emp.task_stats?.completed || 0}</p>
                <p className="text-center">{emp.task_stats?.failed || 0}</p>
                <p className="text-center">
                  <span className="text-blue-400">
                    {expandedEmployee === emp.id ? '▼' : '>'}
                  </span>
                </p>
              </div>
              
              {/* Expanded Task Details */}
              {expandedEmployee === emp.id && emp.tasks && emp.tasks.length > 0 && (
                <div className="mt-2 ml-4 bg-[#1a1a1a] rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-3">Tasks for {emp.name}</h4>
                  <div className="space-y-3">
                    {emp.tasks.map((task, index) => (
                      <div key={index} className="bg-[#2a2a2a] rounded-lg p-3 border-l-4" style={{
                        borderLeftColor: 
                          task.new_task ? '#3b82f6' : 
                          task.active ? '#f59e0b' : 
                          task.completed ? '#10b981' : 
                          task.failed ? '#ef4444' : '#6b7280'
                      }}>
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-semibold text-white">{task.task_title}</h5>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            task.new_task ? 'bg-blue-500 text-white' :
                            task.active ? 'bg-yellow-500 text-black' :
                            task.completed ? 'bg-green-500 text-white' :
                            task.failed ? 'bg-red-500 text-white' : 'bg-gray-500 text-white'
                          }`}>
                            {task.new_task ? 'New' :
                             task.active ? 'Active' :
                             task.completed ? 'Completed' :
                             task.failed ? 'Failed' : 'Unknown'}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm mb-2">{task.task_description}</p>
                        <div className="flex justify-between items-center text-xs text-gray-400">
                          <span>Category: {task.category}</span>
                          <span>Due: {task.task_date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllTask;

import React from 'react';

const TaskNumber = ({ data }) => {
  const stats = data?.task_stats || {};
  

  const taskCards = [
    {
      count: stats.new_task || 0,
      label: 'New Tasks',
      color: 'bg-red-400'
    },
    {
      count: stats.active || 0,
      label: 'In Progress',
      color: 'bg-blue-400'
    },
    {
      count: stats.completed || 0,
      label: 'Completed',
      color: 'bg-green-400'
    },
    {
      count: stats.failed || 0,
      label: 'Failed',
      color: 'bg-yellow-400'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-4">
      {taskCards.map((task, index) => (
        <div
          key={index}
          className={`rounded-2xl p-6 text-white shadow-md transition-transform transform hover:scale-105 ${task.color}`}
        >
          <h2 className="text-4xl font-bold mb-2">{task.count}</h2>
          <h3 className="text-lg font-medium">{task.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default TaskNumber;

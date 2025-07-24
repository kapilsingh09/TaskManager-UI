import React from 'react';

// Dummy tasks array for UI demo (replace with actual task data later)
const tasks = [
  { id: 1, name: "Meena", title: "Make a UI design", status: "New", color: "bg-red-400" },
  { id: 2, name: "Rahul", title: "API Integration", status: "In Progress", color: "bg-blue-400" },
  { id: 3, name: "Pooja", title: "Bug Fixing", status: "Completed", color: "bg-green-400" },
  { id: 4, name: "Amit", title: "Write Docs", status: "Pending", color: "bg-yellow-400" },
  { id: 5, name: "Meena", title: "Make a UI design", status: "New", color: "bg-red-400" },
  { id: 6, name: "Rahul", title: "API Integration", status: "Completed", color: "bg-green-400" },
];

const AllTask = () => {
  return (
    <div className="bg-[#1C1C1C] p-6 mt-6 rounded-xl shadow-inner h-96 overflow-y-auto">
      <h2 className="text-2xl font-semibold mb-4 text-white">All Tasks</h2>

      {tasks.map((task) => (
        <div
          key={task.id}
          className={`${task.color} flex justify-between items-center py-3 px-6 mb-4 rounded-lg text-black shadow-md`}
        >
          <h3 className="font-semibold">{task.name}</h3>
          <p>{task.title}</p>
          <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
            {task.status}
          </span>
        </div>
      ))}
    </div>
  );
};

export default AllTask;

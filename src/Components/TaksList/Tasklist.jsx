import React from 'react';

// Dummy task list — replace with real props or context later
const tasks = [
  {
    id: 1,
    priority: "High",
    date: "20 Feb 2024",
    title: "Make a YouTube video",
    description: "Record and edit a UI/UX design tutorial video for frontend learners.",
    color: "bg-red-400"
  },
  {
    id: 2,
    priority: "Medium",
    date: "21 Feb 2024",
    title: "Write blog post",
    description: "Explain how to structure reusable React components.",
    color: "bg-green-400"
  },
  {
    id: 3,
    priority: "Low",
    date: "22 Feb 2024",
    title: "Team Meeting",
    description: "Catch up with product and design teams on weekly progress.",
    color: "bg-yellow-400"
  },
  {
    id: 4,
    priority: "Urgent",
    date: "23 Feb 2024",
    title: "Fix dashboard bugs",
    description: "Resolve task card scroll and filter issues.",
    color: "bg-blue-400"
  },
  {
    id: 5,
    priority: "Normal",
    date: "24 Feb 2024",
    title: "Client Feedback",
    description: "Review client feedback and adjust UI design accordingly.",
    color: "bg-pink-400"
  },
];

const Tasklist = () => {
  return (
    <div
      id="tasklist"
      className="h-[44vh] overflow-x-auto flex items-center gap-6 flex-nowrap mt-10 px-4 py-5 rounded-xl w-full scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-zinc-800"
    >
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`p-5 flex-shrink-0 h-full w-[280px] ${task.color} rounded-xl shadow-md text-white transition hover:scale-105 duration-300`}
        >
          <div className="flex justify-between items-center text-lg font-semibold">
            <span className="bg-black/30 px-3 py-1 rounded-lg">{task.priority}</span>
            <span className="text-sm">{task.date}</span>
          </div>

          <h2 className="mt-4 text-xl font-bold">{task.title}</h2>
          <p className="text-sm mt-3 opacity-90">{task.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Tasklist;

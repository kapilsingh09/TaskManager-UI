import React from 'react';

const tasks = [
  {
    priority: 'High',
    date: '20 Feb 2024',
    title: 'Make a YouTube Video',
    description: 'Plan, record, and upload a new video about web development best practices.',
    color: 'bg-red-400',
  },
  {
    priority: 'Medium',
    date: '21 Feb 2024',
    title: 'Design a Landing Page',
    description: 'Sketch and prototype a landing page for the new product launch.',
    color: 'bg-blue-400',
  },
  {
    priority: 'Low',
    date: '22 Feb 2024',
    title: 'Fix Minor Bugs',
    description: 'Review reported UI bugs and apply fixes in the dashboard components.',
    color: 'bg-green-400',
  },
  {
    priority: 'High',
    date: '23 Feb 2024',
    title: 'Client Meeting Prep',
    description: 'Prepare the pitch deck and practice the presentation for the client meeting.',
    color: 'bg-yellow-400',
  },
  {
    priority: 'Low',
    date: '24 Feb 2024',
    title: 'Read Documentation',
    description: 'Catch up on the new React 19 features and explore experimental APIs.',
    color: 'bg-pink-400',
  },
  {
    priority: 'Medium',
    date: '25 Feb 2024',
    title: 'Team Review',
    description: 'Host a sprint review and plan for the upcoming tasks and improvements.',
    color: 'bg-purple-400',
  },
];

const Tasklist = () => {
  return (
    <div
      id="tasklist"
      className="h-[44vh] overflow-x-auto flex items-start gap-5 flex-nowrap mt-10 py-5 px-4 rounded-xl w-full"
    >
      {tasks.map((task, index) => (
        <div
          key={index}
          className={`flex-shrink-0 w-[300px] h-full rounded-2xl p-5 shadow-xl text-white transition-all duration-300 hover:scale-[1.02] ${task.color}`}
        >
          <div className="flex justify-between items-center text-lg font-semibold">
            <span className="bg-black/20 px-3 py-1 rounded-full text-sm">
              {task.priority}
            </span>
            <span className="text-sm opacity-80">{task.date}</span>
          </div>
          <h2 className="mt-5 text-xl font-bold tracking-tight">{task.title}</h2>
          <p className="text-sm mt-4 leading-relaxed opacity-90">
            {task.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Tasklist;

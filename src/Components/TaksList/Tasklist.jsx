import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const Tasklist = ({ data }) => {
  // console.log(data);
  
  const handleTaskUpdate = () => {
    // Force a re-render by updating the component
    // This will be handled by the context update
  };
  
  return (
    <div
      id="tasklist"
      className="h-[44vh] overflow-x-auto flex items-start gap-6 flex-nowrap mt-10 px-4 py-5 rounded-xl w-full scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-zinc-800"
    >
      {data.tasks.map((item, index) => {
        if (item.active) {
          return <AcceptTask key={item.id || index} task={item} onTaskUpdate={handleTaskUpdate} />;
        }
        if (item.completed) {
          return <CompleteTask key={item.id || index} task={item} onTaskUpdate={handleTaskUpdate} />;
        }
        if (item.new_task) {
          return <NewTask key={item.id || index} task={item} onTaskUpdate={handleTaskUpdate} />;
        }
        if (item.failed) {
          return <FailedTask key={item.id || index} task={item} onTaskUpdate={handleTaskUpdate} />;
        }
        return null;
      })}
    </div>
  );
};

export default Tasklist;

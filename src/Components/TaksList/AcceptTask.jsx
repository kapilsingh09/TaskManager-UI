import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const AcceptTask = ({ task, onTaskUpdate }) => {
  // Get data from authentication context
  const authData = useContext(AuthContext);
  const employees = authData?.employees || [];
  const admin = authData?.admin || [];
  const updateUserData = authData?.updateUserData;

  // Function to update task status (completed, failed, etc.)
  const updateTaskStatus = (newStatus) => {
    // Go through all employees to find the one with this task
    const updatedEmployees = employees.map(employee => {
      // Check if employee has tasks
      if (employee.tasks && Array.isArray(employee.tasks)) {
        // Update the specific task by matching title, description, and date
        const updatedTasks = employee.tasks.map(currentTask => {
          // Check if this is the task we want to update
          const isTargetTask = 
            currentTask.task_title === task.task_title && 
            currentTask.task_description === task.task_description && 
            currentTask.task_date === task.task_date;

          if (isTargetTask) {
            // Update task status based on the new status
            return {
              ...currentTask,
              new_task: newStatus === 'new',
              active: newStatus === 'active',
              completed: newStatus === 'completed',
              failed: newStatus === 'failed'
            };
          }
          return currentTask;
        });
        
        // Recalculate task statistics after update
        const taskStats = {
          new_task: updatedTasks.filter(t => t.new_task).length,
          active: updatedTasks.filter(t => t.active).length,
          completed: updatedTasks.filter(t => t.completed).length,
          failed: updatedTasks.filter(t => t.failed).length
        };
        
        return {
          ...employee,
          tasks: updatedTasks,
          task_stats: taskStats
        };
      }
      return employee;
    });

    const updatedUserData = { employees: updatedEmployees, admin };
    updateUserData(updatedUserData);
    if (onTaskUpdate) {
      onTaskUpdate();
    }
  };

  const handleCompleteTask = () => {
    updateTaskStatus('completed');
    // console.log(' completed :', task.task_title);
  };

  const handleFailTask = () => {
    updateTaskStatus('failed');
    // console.log( failed:', task.task_title);
  };
  
  return (
    <div className="w-80 h-full p-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl shadow-lg text-white flex-shrink-0">
      
      {/* Header section with category badge and date */}
      <div className="flex justify-between items-center mb-6">
        <span className="bg-white bg-opacity-25 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
          {task.category}
        </span>
        <span className="text-xs text-amber-100 font-medium">
          {task.task_date}
        </span>
      </div>

      {/* Task title */}
      <h2 className="text-xl font-bold leading-tight mb-3 text-white">
        {task.task_title}
      </h2>

      {/* Task description */}
      <p className="text-sm text-amber-50 leading-relaxed mb-6 opacity-95">
        {task.task_description}
      </p>

      {/* Action buttons section */}
      <div className="flex gap-3 mt-auto">
        <button 
          onClick={handleCompleteTask}
          className="flex-1 bg-green-600 hover:bg-green-700 active:bg-green-800 transition-all duration-200 text-white text-sm font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
        >
          <span className="mr-2">✅</span>
          Complete
        </button>
        
        <button 
          onClick={handleFailTask}
          className="flex-1 bg-red-600 hover:bg-red-700 active:bg-red-800 transition-all duration-200 text-white text-sm font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
        >
          {/* <span className="mr-2"></span> */}
          Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
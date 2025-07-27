import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const CompleteTask = ({ task, onTaskUpdate }) => {
  // Get data from authentication context
  const authData = useContext(AuthContext);
  const employees = authData?.employees || [];
  const admin = authData?.admin || [];
  const updateUserData = authData?.updateUserData;

  // Function to reactivate a completed task
  const handleReactivateTask = () => {
    // Go through all employees to find the one with this task
    const updatedEmployees = employees.map(employee => {
      // Check if employee has tasks
      if (employee.tasks && Array.isArray(employee.tasks)) {
        // Update the specific task by matching title, description, and date
        const updatedTasks = employee.tasks.map(currentTask => {
          // Check if this is the task we want to reactivate
          const isTargetTask = 
            currentTask.task_title === task.task_title &&
            currentTask.task_description === task.task_description &&
            currentTask.task_date === task.task_date;

          if (isTargetTask) {
            // Reset task status to active
            return {
              ...currentTask,
              new_task: false,
              active: true,
              completed: false,
              failed: false
            };
          }
          return currentTask;
        });

        // Recalculate task statistics
        const taskStats = {
          new_task: updatedTasks.filter(t => t.new_task).length,
          active: updatedTasks.filter(t => t.active).length,
          completed: updatedTasks.filter(t => t.completed).length,
          failed: updatedTasks.filter(t => t.failed).length
        };

        // Return updated employee with new tasks and stats
        return {
          ...employee,
          tasks: updatedTasks,
          task_stats: taskStats
        };
      }
      return employee;
    });

    // Save updated data to local storage
    const updatedUserData = { employees: updatedEmployees, admin };
    updateUserData(updatedUserData);

    // Notify parent component about the update
    if (onTaskUpdate) {
      onTaskUpdate();
    }

    console.log('Task successfully reactivated:', task.task_title);
  };

  return (
    <div className="w-80 h-full p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl shadow-lg text-white flex-shrink-0">
      {/* Header section with category and date */}
      <div className="flex justify-between items-center mb-6">
        <span className="bg-white bg-opacity-20 text-emerald-900 text-xs font-semibold px-3 py-1 rounded-full">
          {task.category}
        </span>
        <span className="text-xs text-emerald-100 font-medium">
          {task.task_date}
        </span>
      </div>

      {/* Task title */}
      <h2 className="text-xl font-bold leading-tight mb-3 text-white">
        {task.task_title}
      </h2>

      {/* Task description */}
      <p className="text-sm text-emerald-50 leading-relaxed mb-6 opacity-95">
        {task.task_description}
      </p>

      {/* Action button */}
      <div className="mt-auto">
        <button
          onClick={handleReactivateTask}
          className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 text-white text-sm font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          <span className="mr-2"></span>
          Retry Task
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
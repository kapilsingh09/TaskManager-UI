import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const NewTask = ({ task, onTaskUpdate }) => {
  // Get data from authentication context
  const authData = useContext(AuthContext);
  const employees = authData?.employees || [];
  const admin = authData?.admin || [];
  const updateUserData = authData?.updateUserData;

  // Function to accept a new task and move it to active status
  const handleAcceptTask = () => {
    // Go through all employees to find the one with this task
    const updatedEmployees = employees.map(employee => {
      //employee has tasks
      if (employee.tasks && Array.isArray(employee.tasks)) {
        // Update task by matching title, description, and date
        const updatedTasks = employee.tasks.map(currentTask => {
          // this is the task we want to accept
          const isTargetTask = 
            currentTask.task_title === task.task_title && 
            currentTask.task_description === task.task_description && 
            currentTask.task_date === task.task_date;

          if (isTargetTask) {
        
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
        
k
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

    // Save updated data 
    const updatedUserData = { employees: updatedEmployees, admin };
    updateUserData(updatedUserData);
    
 
    if (onTaskUpdate) {
      onTaskUpdate();
    }
    
    // console.log('Task accepted and moved to active:', task.task_title);
  };

  return (
    <div className="w-80 h-full p-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg text-white flex-shrink-0">
      
      <div className="flex justify-between items-center mb-6">
        <span className="bg-white bg-opacity-25 text-blue-900 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
          {task.category}
        </span>
        <span className="text-xs text-blue-100 font-medium">
          {task.task_date}
        </span>
      </div>

      <h2 className="text-xl font-bold leading-tight mb-3 text-white">
        {task.task_title}
      </h2>

      <p className="text-sm text-blue-50 leading-relaxed mb-6 opacity-95">
        {task.task_description}
      </p>

      <div className="mt-auto">
        <button 
          onClick={handleAcceptTask}
          className="w-full bg-green-600 hover:bg-green-700 active:bg-green-800 transition-all duration-200 text-white text-sm font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
        >
          <span className="mr-2">✅</span>
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
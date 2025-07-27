import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const FailedTask = ({task, onTaskUpdate}) => {
  const authData = useContext(AuthContext);
  const employees = authData?.employees || [];
  const admin = authData?.admin || [];
  const updateUserData = authData?.updateUserData;

  const handleRetryTask = () => {
    // Find the employee who has this task
    const updatedEmployees = employees.map(emp => {
      if (emp.tasks && Array.isArray(emp.tasks)) {
        const updatedTasks = emp.tasks.map(t => {
          if (t.task_title === task.task_title && 
              t.task_description === task.task_description && 
              t.task_date === task.task_date) {
            return {
              ...t,
              new_task: false,
              active: true,
              completed: false,
              failed: false
            };
          }
          return t;
        });
        
        // Update task stats
        const newTaskCount = updatedTasks.filter(t => t.new_task).length;
        const activeTaskCount = updatedTasks.filter(t => t.active).length;
        const completedTaskCount = updatedTasks.filter(t => t.completed).length;
        const failedTaskCount = updatedTasks.filter(t => t.failed).length;
        
        return {
          ...emp,
          tasks: updatedTasks,
          task_stats: {
            new_task: newTaskCount,
            active: activeTaskCount,
            completed: completedTaskCount,
            failed: failedTaskCount
          }
        };
      }
      return emp;
    });

    // Update localStorage
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    
    // Update context
    const updatedUserData = { employees: updatedEmployees, admin };
    updateUserData(updatedUserData);
    
    // Notify parent component
    if (onTaskUpdate) {
      onTaskUpdate();
    }
    
    console.log('Task retried:', task.task_title);
  };
  
  return (
    <div className="flex-shrink-0 h-full w-[320px] p-5 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl shadow-lg text-white">
      
      <div className="flex justify-between items-center">
        <span className="bg-white text-black bg-opacity-20 text-xs font-medium px-3 py-1 rounded-full">
          {task.category}
        </span>
        <span className="text-xs opacity-90">{task.task_date}</span>
      </div>

      <h2 className="mt-6 text-xl font-bold leading-snug">
        {task.task_title}
      </h2>

      <p className="mt-2 text-sm text-white text-opacity-90">
      {task.task_description}
      </p>

      <div className="mt-4">
        <button 
          onClick={() => handleRetryTask()}
          className="w-full bg-orange-500 hover:bg-orange-600 transition-colors duration-200 text-white font-semibold text-sm py-2 px-4 rounded-md shadow-md"
        >
          🔄 Retry Task
        </button>
      </div>
    </div>
  );
};

export default FailedTask;

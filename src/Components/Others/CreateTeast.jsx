import { useState, useEffect, useContext, useDebugValue } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { getLocalStorage } from "../../Utils/LocalStorage";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [category, setCategory] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [newTask, setNewTask] = useState({});
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Get context data
  const authData = useContext(AuthContext);
  const employees = authData?.employees || [];
  const admin = authData?.admin || [];
  const updateUserData = authData?.updateUserData;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!assignedTo) {
      setMessage('Please select an employee to assign the task to.');
      setIsSuccess(false);
      return;
    }

    // Create new task object
    const task = {
      task_title: taskTitle,
      task_description: taskDescription,
      task_date: taskDate,
      category,
      assignedTo,
      active: false,
      new_task: true,
      completed: false,
      failed: false,
    };

    setNewTask(task);

    // Get current employees from context or localStorage fallback
    const currentEmployees = employees || JSON.parse(localStorage.getItem("employees")) || [];

    // Update the assigned employee's tasks and stats
    const updatedEmployees = currentEmployees.map((emp) => {
      if (emp.name === assignedTo) {
        console.log('Found employee:', emp.name, 'Current tasks:', emp.tasks);
        
        // Parse task_stats if it's a string
        if (typeof emp.task_stats === 'string') {
          try {
            emp.task_stats = JSON.parse(emp.task_stats);
          } catch {
            emp.task_stats = { new_task: 0, active: 0, completed: 0, failed: 0 };
          }
        }

        // Initialize tasks array if not present
        if (!Array.isArray(emp.tasks)) {
          emp.tasks = [];
        }

        emp.tasks.push(task);
        emp.task_stats.new_task = (emp.task_stats.new_task || 0) + 1;
        
        console.log('Updated employee:', emp.name, 'New tasks count:', emp.task_stats.new_task, 'Total tasks:', emp.tasks.length);
      }
      return emp;
    });

    // Save updated employees to localStorage
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));

    // Update context state to trigger UI updates everywhere
    const updatedUserData = { employees: updatedEmployees, admin };
    updateUserData(updatedUserData);
    
    console.log("Task created successfully for:", assignedTo);
    
    // Show success message
    setMessage(`Task "${taskTitle}" created successfully for ${assignedTo}!`);
    setIsSuccess(true);
    
    // Reset form fields
    setTaskTitle('');
    setTaskDescription('');
    setAssignedTo('');
    setCategory('');
    setTaskDate('');
    
    // Clear message after 3 seconds
    setTimeout(() => {
      setMessage('');
      setIsSuccess(false);
    }, 3000);
  };

  useEffect(() => {
    if (Object.keys(newTask).length > 0) {
      console.log("New Task Created:", newTask);
    }
  }, [newTask]);

  return (
    <div className="p-10 bg-zinc-900 min-h-screen text-white">
      <h2 className="text-3xl font-semibold mb-6 text-center">Create New Task</h2>
      
      {message && (
        <div className={`mb-6 p-4 rounded-lg text-center ${
          isSuccess 
            ? 'bg-green-900/30 border border-green-500/30 text-green-400' 
            : 'bg-red-900/30 border border-red-500/30 text-red-400'
        }`}>
          {message}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap bg-[#1C1C1C] p-8 rounded-xl shadow-lg gap-10"
      >
        {/* Left Section */}
        <div className="flex-1 space-y-6">
          <div>
            <label className="block text-sm mb-2 font-medium">Task Title</label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder="Design UI"
              className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2 font-medium">Assign To</label>
            <select
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700 focus:outline-none"
              required
            >
              <option value="">Select Employee</option>
              {employees?.map((emp) => (
                <option key={emp.id} value={emp.name}>
                  {emp.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm mb-2 font-medium">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="Development, Design, etc."
              className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2 font-medium">Deadline</label>
            <input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700 focus:outline-none"
              required
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 space-y-6">
          <div>
            <label className="block text-sm mb-2 font-medium">Description</label>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              rows="8"
              placeholder="Task details..."
              className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700 focus:outline-none resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-md font-semibold shadow-lg w-full"
          >
            ➕ Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;

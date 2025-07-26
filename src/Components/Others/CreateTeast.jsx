import { useState, useEffect, useContext, useDebugValue } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [category, setCategory] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [newTask, setNewTask] = useState({});
  
  // Get both state and setter from AuthContext
  const [userdata, setUserdata] = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new task object
    const task = {
      task_title: taskTitle,
      task_description: taskDescription,
      taskDate,
      category,
      assignedTo,
      active: false,
      new_task: true,
      completed: false,
      failed: false,
    };

    setNewTask(task);

    // Get current employees from localStorage or from context fallback
    const employees = JSON.parse(localStorage.getItem("employees")) || userdata.employees || [];

    // Update the assigned employee's tasks and stats
    const updatedEmployees = employees.map((emp) => {
      if (emp.name === assignedTo) {
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
      }
      return emp;
    });

    // Save updated employees to localStorage
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));

    // Update context state to trigger UI updates everywhere
    setUserdata({ employees: updatedEmployees });
    console.log(userdata);
    

    // Reset form fields
    // setTaskTitle('');
    // setTaskDescription('');
    // setAssignedTo('');
    // setCategory('');
    // setTaskDate('');
  };

  useEffect(() => {
    if (Object.keys(newTask).length > 0) {
      console.log("New Task Created:", newTask);
    }
  }, [newTask]);

  return (
    <div className="p-10 bg-zinc-900 min-h-screen text-white">
      <h2 className="text-3xl font-semibold mb-6 text-center">Create New Task</h2>

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
            <input
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              type="text"
              placeholder="e.g. Neha"
              className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700 focus:outline-none"
              required
            />
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

import React from 'react';

const CreateTask = () => {
  // const [first, setfirst] = useState(second)
  const [task_title, setTask_title] = useState('')
  const [task_description, setTask_description] = useState('')
  const [assignto, setAssignto] = useState('')
  const [category, setCategory] = useState('')
  const [task_date, setTask_date] = useState('')

  const [Task, SetTask] = useState([])
  const submitHandler = (e) =>{
    e.prevetDefault()
    console.log("task created");
    setAssignto('')
    setCategory('')
    setTask_date('')
    setTask_description('')
    setTask_title('')

    SetTask()
    
  }
  return (
    <div className="p-10 bg-zinc-900 min-h-screen text-white">
      <h2 className="text-3xl font-semibold mb-6 text-center">Create New Task</h2>
      
      <form
      onClick={(e)=>{
        submitHandler(e)
      }}
      className="flex flex-wrap bg-[#1C1C1C] p-8 rounded-xl shadow-lg gap-10">
        {/* Left Side */}
        <div className="flex-1 space-y-6">
          <div>
            <label className="block text-sm mb-2 font-medium">Task Title</label>
            <input
            value={task_title}
            onChange={(e)=>{setTask_title(e.target.value)}}
              type="text"
              placeholder="Make a UI design"
              className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 font-medium">Assign To</label>
            <input
              value={assignto}
              onChange={(e)=>{setAssignto(e.target.value)}}
              type="text"
              placeholder="Employee name"
              className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 font-medium">Category</label>
            <input
            value={category}
            onChange={(e)=>{setCategory(e.target.value)}}
              type="text"
              placeholder="Design, Development, etc."
              className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 font-medium">Deadline</label>
            <input
              type="date"
              value={task_date}
              onChange={(e)=>{setTask_date(e.target.value)}}
              className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 space-y-6">
          <div>
            <label className="block text-sm mb-2 font-medium">Description</label>
            <textarea
            value={task_description}
            onChange={(e)=>{setTask_description(e.target.value)}}
              rows="8"
              placeholder="Write task details..."
              className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-md text-white font-semibold shadow-lg w-full"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;

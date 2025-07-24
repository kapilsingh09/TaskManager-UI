const employees = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    password: "123",
    task_stats: {
      active: 1,
      completed: 1,
      failed: 0,
      new_task: 1,
    },
    tasks: [
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        task_title: "Prepare weekly report",
        task_description: "Compile and submit the weekly sales report.",
        task_date: "2025-06-19",
        category: "Reporting"
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        task_title: "Update client database",
        task_description: "Ensure client records are up to date.",
        task_date: "2025-06-15",
        category: "Data Management"
      }
    ]
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya.verma@example.com",
    password: "123",
    task_stats: {
      active: 1,
      completed: 0,
      failed: 0,
      new_task: 1,
    },
    tasks: [
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        task_title: "Review contract terms",
        task_description: "Analyze vendor contracts and highlight key terms.",
        task_date: "2025-06-20",
        category: "Legal"
      }
    ]
  }
];

const admin = [
  {
    id: 100,
    name: "Amit Kapoor",
    email: "amit.kapoor@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employees, admin };
};

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
  },
  {
    id: 3,
    name: "Neha Joshi",
    email: "neha.joshi@example.com",
    password: "123",
    task_stats: {
      active: 0,
      completed: 1,
      failed: 1,
      new_task: 0,
    },
    tasks: [
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        task_title: "Design landing page",
        task_description: "Create mockups and finalize the homepage layout.",
        task_date: "2025-06-10",
        category: "Design"
      },
      {
        active: false,
        new_task: false,
        completed: false,
        failed: true,
        task_title: "Submit brand guidelines",
        task_description: "Missed the deadline for brand guideline submission.",
        task_date: "2025-06-05",
        category: "Branding"
      }
    ]
  },
  {
    id: 4,
    name: "Ravi Mehta",
    email: "ravi.mehta@example.com",
    password: "123",
    task_stats: {
      active: 2,
      completed: 0,
      failed: 0,
      new_task: 2,
    },
    tasks: [
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        task_title: "Optimize database queries",
        task_description: "Improve performance for user analytics data.",
        task_date: "2025-06-21",
        category: "Development"
      },
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        task_title: "Implement JWT auth",
        task_description: "Add secure authentication for the API.",
        task_date: "2025-06-22",
        category: "Development"
      }
    ]
  },
  {
    id: 5,
    name: "Simran Kaur",
    email: "simran.kaur@example.com",
    password: "123",
    task_stats: {
      active: 1,
      completed: 0,
      failed: 1,
      new_task: 1,
    },
    tasks: [
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        task_title: "Create social media calendar",
        task_description: "Plan content posts for July.",
        task_date: "2025-06-23",
        category: "Marketing"
      },
      {
        active: false,
        new_task: false,
        completed: false,
        failed: true,
        task_title: "Launch email campaign",
        task_description: "Missed launch deadline for the Q2 campaign.",
        task_date: "2025-06-12",
        category: "Marketing"
      }
    ]
  },
  {
    id: 6,
    name: "Anil Gupta",
    email: "anil.gupta@example.com",
    password: "123",
    task_stats: {
      active: 0,
      completed: 2,
      failed: 0,
      new_task: 0,
    },
    tasks: [
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        task_title: "Process payroll",
        task_description: "Ensure timely salary processing for all employees.",
        task_date: "2025-06-18",
        category: "Finance"
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        task_title: "Review expense reports",
        task_description: "Validate all claims for May 2025.",
        task_date: "2025-06-16",
        category: "Finance"
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

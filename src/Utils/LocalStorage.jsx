const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        task_title: "Prepare weekly report",
        task_description: "Compile and submit the weekly sales report.",
        task_date: "2025-06-19",
        category: "Reporting",
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        task_title: "Update client database",
        task_description: "Ensure client records are up to date.",
        task_date: "2025-06-15",
        category: "Data Management",
      },
      {
        active: false,
        new_task: false,
        completed: false,
        failed: true,
        task_title: "Conduct product training",
        task_description: "Host a training session on the new product line.",
        task_date: "2025-06-10",
        category: "Training",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        task_title: "Review contract terms",
        task_description: "Analyze vendor contracts and highlight key terms.",
        task_date: "2025-06-20",
        category: "Legal",
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        task_title: "Organize team meeting",
        task_description: "Set agenda and schedule a team sync.",
        task_date: "2025-06-17",
        category: "Coordination",
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        task_title: "Send project updates",
        task_description: "Email weekly updates to all stakeholders.",
        task_date: "2025-06-18",
        category: "Communication",
      },
      {
        active: false,
        new_task: false,
        completed: false,
        failed: true,
        task_title: "Fix login issues",
        task_description: "Resolve login issues reported by users.",
        task_date: "2025-06-14",
        category: "Technical",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        task_title: "QA website release",
        task_description: "Run QA on the latest site update.",
        task_date: "2025-06-20",
        category: "Quality Assurance",
      },
      {
        active: false,
        new_task: false,
        completed: false,
        failed: true,
        task_title: "Write documentation",
        task_description: "Document API endpoints for dev handoff.",
        task_date: "2025-06-16",
        category: "Documentation",
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        task_title: "Monitor system logs",
        task_description: "Check logs for anomalies or errors.",
        task_date: "2025-06-15",
        category: "Maintenance",
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        task_title: "Update team wiki",
        task_description: "Revise outdated team pages and links.",
        task_date: "2025-06-13",
        category: "Knowledge Base",
      },
      {
        active: false,
        new_task: false,
        completed: false,
        failed: true,
        task_title: "Optimize database queries",
        task_description: "Improve performance of critical queries.",
        task_date: "2025-06-12",
        category: "Performance",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        task_title: "Onboard new interns",
        task_description: "Guide interns through the onboarding process.",
        task_date: "2025-06-20",
        category: "HR",
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        task_title: "Schedule interviews",
        task_description: "Set up interviews with shortlisted candidates.",
        task_date: "2025-06-18",
        category: "Recruitment",
      },
      {
        active: false,
        new_task: false,
        completed: false,
        failed: true,
        task_title: "Conduct satisfaction survey",
        task_description: "Launch and collect responses from survey.",
        task_date: "2025-06-16",
        category: "Employee Engagement",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        task_title: "Design marketing material",
        task_description: "Create banners and flyers for product launch.",
        task_date: "2025-06-20",
        category: "Marketing",
      },
      {
        active: false,
        new_task: false,
        completed: false,
        failed: true,
        task_title: "Finalize campaign content",
        task_description: "Prepare content for upcoming ad campaigns.",
        task_date: "2025-06-17",
        category: "Content Creation",
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        task_title: "Analyze engagement metrics",
        task_description: "Review and interpret campaign analytics.",
        task_date: "2025-06-18",
        category: "Analytics",
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        task_title: "Update product pages",
        task_description: "Refresh content and pricing details.",
        task_date: "2025-06-14",
        category: "E-commerce",
      },
    ],
  },
];

const admin = [
  {
    id: 100,
    email: "admin1@example.com",
    password: "123",
  },
];

// 🔐 Save to localStorage
export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

// 📥 Get from localStorage (as usable JavaScript objects)
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees") || "[]");
  const admin = JSON.parse(localStorage.getItem("admin") || "[]");

  return { employees, admin };
};

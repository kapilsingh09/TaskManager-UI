import React, { useContext, useState } from 'react';
import Login from './Components/Auth/Login';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import EmployDashboard from './Components/Dashboard/EmployDashboard';
import { AuthContext } from './Context/AuthProvider';

const App = () => {
  const authData = useContext(AuthContext); // ✅ get from context
  const [user, setUser] = useState(null);

  if (!authData) {
    return <div className="text-white p-4">Loading user data...</div>;
  }

  const { admin, employees } = authData;

  // console.log("👨‍💼 Admin Data:", admin);
  // console.log("🧑‍💻 Employees Data:", employees);

  const handleLogin = (email, password) => {
    const adminUser = admin.find((person) => {
      return person.email === email && person.password === password;
    });

    const employeeUser = employees.find((person) => {
      return person.email === email && person.password === password;
    });

    if (adminUser) {
      setUser('admin');
    } else if (employeeUser) {
      setUser('employee');
    } else {
      console.log(" Invalid credentials");
      alert("Invalid email or password");
    }
  };

  return (
    <div className='h-[100vh] w-full bg-zinc-900 text-white'>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard />
      ) : (
        <EmployDashboard />
      )}
    </div>
  );
};

export default App;

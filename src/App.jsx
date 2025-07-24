import React, { useContext, useState } from 'react';
import Login from './Components/Auth/Login';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import EmployDashboard from './Components/Dashboard/EmployDashboard';
import { AuthContext } from './Context/AuthProvider';

const App = () => {
  const authData = useContext(AuthContext); 
  const [user, setUser] = useState(null);

 

  const { admin, employees } = authData;

  // console.log(" Admin Data:", admin);
  // console.log(" Employees Data:", employees);

  const handleLogin = (email, password) => {
    const adminUser = admin.find((a) => a.email === email && a.password === password);
    const employeeUser = employees.find((e) => e.email === email && e.password === password);

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

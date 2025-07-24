import React, { useContext, useEffect, useState } from 'react';
import Login from './Components/Auth/Login';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import EmployDashboard from './Components/Dashboard/EmployDashboard';
import { AuthContext } from './Context/AuthProvider';
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage';

const App = () => {
  const authData = useContext(AuthContext);
  const [userRole, setUserRole] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    setLocalStorage(); // populate if not already
    if (authData) {
      const stored = localStorage.getItem("loggedInUser");
      if (stored) {
        const parsed = JSON.parse(stored);
        const { employees, admin } = getLocalStorage();

        const userData =
          parsed.role === 'admin'
            ? admin.find((a) => a.email === parsed.email)
            : employees.find((e) => e.email === parsed.email);

        setUserRole(parsed.role);
        setLoggedInUser(userData);
      }
    }
  }, [authData]);

  const { admin, employees } = authData || {};

  const handleLogin = (email, password) => {
    if (!admin || !employees) return;

    const adminUser = admin.find(
      (person) => person.email === email && person.password === password
    );

    const employeeUser = employees.find(
      (person) => person.email === email && person.password === password
    );

    if (adminUser) {
      setUserRole('admin');
      setLoggedInUser(adminUser);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: 'admin', email: adminUser.email })
      );
      setError('');
    } else if (employeeUser) {
      setUserRole('employee');
      setLoggedInUser(employeeUser);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: 'employee', email: employeeUser.email })
      );
      setError('');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  const clearError = () => setError('');

  const logOutHandler = () => {
    setUserRole(null);
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUser");
  };
  console.log(loggedInUser);
  
  if (!authData) {
    return <div className="text-white p-4">Loading user data...</div>;
  }

  return (
    <div className="h-full w-full bg-zinc-900 text-white">
      {!userRole ? (
        <Login handleLogin={handleLogin} error={error} clearError={clearError} />
      ) : userRole === 'admin' ? (
        <AdminDashboard data={loggedInUser} onLogout={logOutHandler} />
      ) : (
        <EmployDashboard data={loggedInUser} onLogout={logOutHandler} />
      )}
    </div>
  );
};

export default App;

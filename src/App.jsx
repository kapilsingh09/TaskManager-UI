import React, { useContext } from 'react'
import Login from './Components/Auth/Login'
import { useState } from 'react'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import EmployDashboard from './Components/Dashboard/EmployDashboard'
import { AuthContext } from './Context/AuthProvider'
const App = () => {
  const [user, setuser] = useState(null);

  const handleLogin = (email,password) =>{
    if(email =='admin@me.com' && password == '123'){
      // console.log("admin");. 
      setuser('admin')
      // console.log(user);
      
    }else if(email == 'user@me.com' && password == '123' ){
      // console.log("THis is user");
      setuser("employee")
      // console.log(user);/
      
    }else{
      console.log("invalid user");
    }
  }
  const data = useContext(AuthContext)
  console.log(data);
  
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
  )
}

export default App

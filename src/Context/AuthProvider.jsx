import React, { createContext ,useEffect,useState } from 'react'
// import {getLocalStorage} from '../Utils/LocalStorage'
import { getLocalStorage, setLocalStorage } from '../Utils/LocalStorage';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userdata, setUserdata] = useState(null);

  useEffect(() => {
    const {employees,admin}  = getLocalStorage();
    
    // If localStorage is empty, populate it with initial data
    if (!employees || !admin) {
      setLocalStorage();
      const freshData = getLocalStorage();
      setUserdata(freshData);
    } else {
      setUserdata({employees,admin});
    }
    
    // console.log(employees);
    // console.log(admin);
    
    
  }, [])
  
  // Function to update user data
  const updateUserData = (newData) => {
    setUserdata(newData);
  };
  
  // const data = getLocalStorage();
  // console.log(data);
  
  return (
    <div>
      <AuthContext.Provider value={userdata ? { ...userdata, updateUserData } : { updateUserData }}>
      {children}

      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
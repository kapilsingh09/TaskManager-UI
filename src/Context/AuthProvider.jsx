import React, { createContext ,useEffect,useState } from 'react'
// import {getLocalStorage} from '../Utils/LocalStorage'
import { getLocalStorage } from '../Utils/LocalStorage';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userdata, setUserdata] = useState(null);

  useEffect(() => {
    const {employees,admin}  = getLocalStorage();
    setUserdata({employees,admin})
    // console.log(employees);
    // console.log(admin);
    
    
  }, [])
  
  // const data = getLocalStorage();
  // console.log(data);
  
  return (
    <div>
      <AuthContext.Provider value={userdata}>
      {children}

      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider

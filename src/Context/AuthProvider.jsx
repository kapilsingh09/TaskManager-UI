import React, { createContext ,useEffect,useState } from 'react'
import {getLocalStorage} from '../Utils/LocalStorage'
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userdata, setUserdata] = useState(null);

  useEffect(() => {
    const {employee,admin}  = getLocalStorage();
    setUserdata({employee,admin})

  }, [])
  
  const data = getLocalStorage();
  // console.log(data);
  
  return (
    <div>
      <AuthContext.Provider value={'userdata'}>
      {children}

      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider

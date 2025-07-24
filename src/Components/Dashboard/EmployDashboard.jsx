import React from 'react'
// import Header from './Components/Others/Header'
import Header from '../Others/Header'
import TaksNumber from '../Others/TaksNumber'
import Tasklist from '../TaksList/Tasklist'

const EnpollyeDashboard = ({onLogout,data}) => {
  // console.log(loggedInUser.role);
  console.log(data);
  
  
  return (
    <div className='pl-20 pr-20 bg-[#1C1C1C] p-10'>
      <Header onLogout={onLogout} data={data} />
      {/* <h1>{loggedInUser}</h1> */}
      <TaksNumber data={data} />

      <Tasklist />
    </div>
  )
}

export default EnpollyeDashboard

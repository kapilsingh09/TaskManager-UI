import React from 'react'
// import Header from './Components/Others/Header'
import Header from '../Others/Header'
import TaksNumber from '../Others/TaksNumber'
import Tasklist from '../TaksList/Tasklist'

const EnpollyeDashboard = ({onLogout,data}) => {
  // console.log('Employee Dashboard Data:', data);
  // console.log('Employee Tasks:', data?.tasks);
  
  
  return (
    <div className='pl-20 pr-20 bg-[#1C1C1C] min-h-screen p-10'>
      <Header onLogout={onLogout} data={data} />

      {/* <h1>{loggedInUser}</h1> */}
      <TaksNumber data={data} />

      <Tasklist data={data} />
    </div>
  )
}

export default EnpollyeDashboard

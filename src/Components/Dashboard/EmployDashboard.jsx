import React from 'react'
// import Header from './Components/Others/Header'
import Header from '../Others/Header'
import TaksNumber from '../Others/TaksNumber'
import Tasklist from '../Others/Tasklist'

const EnpollyeDashboard = () => {
  return (
    <div className='pl-20 pr-20 bg-[#1C1C1C] p-10'>
      <Header />
      
      <TaksNumber />

      <Tasklist />
    </div>
  )
}

export default EnpollyeDashboard

import React from 'react'
import Header from '../Others/Header'
import CreateTeast from '../Others/CreateTeast'
import AllTask from '../Others/AllTask'

const AdminDashboard = () => {
  return (
    <div className='h-full  w-full p-10 '>
      <Header />
        <CreateTeast />
     <AllTask />
    </div>
  )
}

export default AdminDashboard

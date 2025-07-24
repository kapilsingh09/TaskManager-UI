import React from 'react'
import Header from '../Others/Header'
import CreateTeast from '../Others/CreateTeast'
import AllTask from '../Others/AllTask'

const AdminDashboard = ({onLogout,data}) => {
  console.log(data);
  
  return (
    <div className='h-full  w-full p-10 '>
      <Header onLogout={onLogout} data={data} />
        <CreateTeast />
     <AllTask />
    </div>
  )
}

export default AdminDashboard

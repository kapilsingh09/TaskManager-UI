import React from 'react'

const Header = () => {
  return (
    <div className='flex  bg-[#1C1C1C] pl-20 pr-20 items-center justify-between text-white '>
      <h1 className='text-2xl font-medium '>Hello <br /> Harshu</h1>
      <button className='rounded bg-red-500 p-3 px-8 '>Log out</button>
    </div>
  )
}

export default Header

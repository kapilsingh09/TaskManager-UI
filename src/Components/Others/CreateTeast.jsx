import React from 'react'

const CreateTeast = () => {
  return (
    <div>
       <div>
        <form className='flex flex-wrap items-center w-full bg-zinc-900   justify-between'>
      <div className='1/2 p-9'>

            <div className='p-4'>
           <h3>Task title</h3>
           <input className='border-1  outline-none px-10 rounded' type="text" placeholder='Make a UI desgin' />
           </div>

           <div  className='p-4'>
           <h3>Asgin to</h3>
           <input className='border-1  outline-none px-10 rounded' type="text" placeholder='empolye name' />
           </div>
           <div  className='p-4'>
           <h3>Category</h3>
           <input  className='border-1  outline-none px-10 rounded' type="text" placeholder='Desgin dev etc' />
           </div>
            <div  className='p-4 mt-3'>
            <h3>Date</h3>
           <input className='border-1 outline-none px-10 rounded' type="date" />
            </div>
      </div>
        
            <div className='1/2 flex flex-col pr-20'>
           <h3>Description</h3>
            <textarea className='border-2 w-[500px]  border-white ' name="" id="" cols='30' rows='10'></textarea>
            <button className='bg-green-400 px-10 p-3 mt-3 rounded-xl'> create task</button>
           </div>

       

        </form>
      </div>
    </div>
  )
}

export default CreateTeast

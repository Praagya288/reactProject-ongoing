import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className=' overflow-x-auto h-[50%] flex items-center justify-start py-5 w-full 
     gap-5 flex-nowrap  mt-10 '>

        <div className=' flex-shrink-0 h-full w-[300px] bg-red-400 p-5 rounded-xl ' >
            <div className='flex justify-between items-center ' >
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded ' >High</h3>
                <h4 className='text-sm' >20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold' >Make a youtube video</h2>
            <p className='mt-2 text-sm' >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, beatae!
            </p>
        </div>
        <div className=' flex-shrink-0 h-full w-[300px] bg-blue-400 p-5 rounded-xl ' >
            <div className='flex justify-between items-center ' >
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded ' >High</h3>
                <h4 className='text-sm' >20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold' >Make a youtube video</h2>
            <p className='mt-2 text-sm' >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, beatae!
            </p>
        </div>
        <div className=' flex-shrink-0 h-full w-[300px] bg-green-400 p-5 rounded-xl ' >
            <div className='flex justify-between items-center ' >
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded ' >High</h3>
                <h4 className='text-sm' >20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold' >Make a youtube video</h2>
            <p className='mt-2 text-sm' >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, beatae!
            </p>
        </div>
        <div className=' flex-shrink-0 h-full w-[300px] bg-yellow-400 p-5 rounded-xl ' >
            <div className='flex justify-between items-center ' >
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded ' >High</h3>
                <h4 className='text-sm' >20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold' >Make a youtube video</h2>
            <p className='mt-2 text-sm' >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, beatae!
            </p>
        </div>

        

    </div>
  )
}

export default TaskList
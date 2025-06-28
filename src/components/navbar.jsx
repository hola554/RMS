import React from 'react'

export const Navbar = () => {
  return (
    <nav className='flex items-center justify-between bg-red-300 mx-2 my-3 px-4 h-[80px] rounded-md'>
      {/* User name */}
      <span className='text-lg flex-[1]'>
        Welcome back, Prof. <strong>Ogirima</strong>
      </span>
      {/* Search Input */}
      <div className="flex-[1]">
        <input 
          className='w-full p-2 rounded-md outline-none placeholder:text-sm'
          type="Search" 
          placeholder='Search'
        />
      </div>
      <div className="flex-[1] flex items-center justify-end">
        {/* status */}
        <span>online</span>
      </div>
    </nav>
  )
}

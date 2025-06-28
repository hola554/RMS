import React from 'react'
import { NotificationIcon } from './icons/NotificationIcon'
import { SearchIcon } from './icons/SearchIcon'

export const Navbar = () => {
  return (
    <nav className='flex items-center justify-between bg-white mx-2 my-3 px-4 h-[80px] rounded-md'>
      {/* User name */}
      <span className='text-lg flex-[1]'>
        Welcome back, Prof. <strong>Ogirima</strong>
      </span>
      {/* Search Input */}
      <div className="flex-[1] relative">
        <span className='absolute top-2 left-2'>
          <SearchIcon />
        </span>
        <input 
          className='w-full p-2 pl-10 bg-gray-100 rounded-md outline-none placeholder:text-sm'
          type="Search" 
          placeholder='Search'
        />
      </div>
      <div className="flex-[1] flex gap-4 items-center justify-end">
        {/* status */}
        <span className='text-green-700 capitalize'>online</span>
        <NotificationIcon />
        <img src="/64.jpg" alt="" />
      </div>
    </nav>
  )
}

import React from 'react'
import { 
    SearchIcon,
    BellIcon,
    HeartIcon,
    LoginIcon 
} from '@heroicons/react/outline'

function Header() {
  return (
    <nav className='flex flex-col sm:flex-row justify-between items-center h-auto bg-[#13192b]' >
        <div className=''>
            <img className="h-16 object-contain" src={require("../Assets/main.png")} alt="#" />
        </div>
        <div className='border border-gray-500 p-2 w-4/5 sm:w-3/5 rounded-lg flex'>
            <SearchIcon className='w-6 text-gray-500 ml-2 mr-2 shadow' />
            <input className="bg-transparent w-full focus:outline-none text-white" placeholder='Search...' type="text" />
        </div>
        <div className='flex w-1/5 justify-around mt-5'>
            <div className="flex flex-col group items-center cursor-pointer">
            <BellIcon className='w-7 group-hover:animate-bounce text-gray-500 ml-2 mr-2 group-hover:text-yellow-400'/>
            <small className='opacity-0 group-hover:opacity-100 tracking-widest text-white'>NOTIFICATION</small>
            </div>
            <div className="flex flex-col group items-center cursor-pointer">
            <HeartIcon className='w-7 group-hover:animate-bounce text-gray-500 ml-2 mr-2 group-hover:text-yellow-400'/>
            <small className='opacity-0 group-hover:opacity-100 tracking-widest text-white'>NOTIFICATION</small>
            </div>
            <div className="flex flex-col group items-center cursor-pointer">
            <LoginIcon className='w-7 group-hover:animate-bounce text-gray-500 ml-2 mr-2 group-hover:text-yellow-400'/>
            <small className='opacity-0 group-hover:opacity-100 tracking-widest text-white'>NOTIFICATION</small>
            </div>
        </div>
    </nav>
  )
}

export default Header
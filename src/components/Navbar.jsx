import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className='flex justify-evenly items-center py-3 shadow mb-8'>
            <h3 className='font-bold text-2xl'>Project1</h3>
            <div>
                <input type="search" name="" id="" placeholder='Search here...' className='outline-none border-2 px-3 py-1 rounded-md w-96' />
                <button className='bg-gray-800 text-white py-1 px-3 ml-2 rounded-md border-2'>Search</button>
            </div>
            <ul className='font-semibold flex gap-5'>
                <li>Home</li>
                <li>Cart</li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar
import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className='flex justify-evenly items-center'>
            <h3 className='text-2xl'>Project1</h3>
            <div>
                <input type="search" name="" id="" placeholder='Search here...' className='outline-none border-2 px-3 py-1' />
            </div>
            <ul>
                <li>Home</li>
                <li>Cart</li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar
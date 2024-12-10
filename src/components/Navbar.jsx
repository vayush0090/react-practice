import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Navbar = ({setProducts}) => {
  const [searchValue,setSearchValue] = useState('')

  const searchProduct = async ()=>{
    const response = await fetch(`https://dummyjson.com/products/search?q=${searchValue}`)
    const data = await response.json()
    // console.log(data.products);
    
    setProducts(data.products)
    
  }
  return (
    <>
        <nav className='flex justify-evenly items-center py-3 shadow mb-8'>
            <h3 className='font-bold text-2xl'>Project1</h3>
            <div>
                <input onChange={(e)=>{setSearchValue(e.target.value)}} type="search" name="" id="" placeholder='Search here...' className='outline-none border-2 px-3 py-1 rounded-md w-96' />
                <button onClick={searchProduct} className='bg-gray-800 text-white py-1 px-3 ml-2 rounded-md border-2'>Search</button>
            </div>
            <ul className='font-semibold flex gap-5'>
                <Link to='/'>Home</Link>
                <Link to='/cart'>Cart</Link>
            </ul>
        </nav>
    </>
  )
}

export default Navbar
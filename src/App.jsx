import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { useState } from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Cart from './pages/Cart'
import ProductContext from './context/ProductContext'

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart,setCart] = useState([])

  const addToCart = (product)=>{
    setCart([...cart,product])
    console.log(cart);
    alert("item add successfully")
    
  }

  const removeFromCart = (product)=>{
    const newCart = cart.filter((item)=> item.id !== product.id)
    setCart(newCart)
    alert("item removed from cart")
  }



  return (
    <>
    <ProductContext.Provider value={{products,setProducts,cart,addToCart,removeFromCart}}>
      <Router>
      <Navbar  />
        <Routes>
          <Route path='/' element={<Home  />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
      </ProductContext.Provider>
      
      
    </>
  )
}

export default App
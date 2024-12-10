import React, { useState } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
// import { useState } from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Cart from './pages/Cart'

const App = () => {
  const [products, setProducts] = useState([]);

  return (
    <>
      <Router>
      <Navbar setProducts={setProducts} />
        <Routes>
          <Route path='/' element={<Home products={products} setProducts={setProducts} />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
      
      
    </>
  )
}

export default App
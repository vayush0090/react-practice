import React,{useContext} from 'react'
import ProductContext from '../context/ProductContext'

const Cart = () => {
  const {cart,removeFromCart} = useContext(ProductContext)
  return (
    <>
      <div className="grid grid-cols-3 justify-center items-center gap-10 w-[70vw] m-auto mb-7 ">
        {cart.length == "" ? <h1>cart is empty</h1>:
          cart.map((product,id)=>{
            return(
              <div key={id} className="w-[250px] bg-gray-300 shadow-xl hover:shadow-blue-500 hover:shadow-lg transition-all ease-linear rounded-md  ml-2 overflow-hidden">
              <img
                src={product.images[0]}
                alt="img"
                className="bg-gray-200 hover:scale-110 overflow-hidden rounded-md transition-all ease-in duration-500 rounded-bl-none rounded-br-none w-full h-[300px] hover:cursor-grab"
              />
              <div className="p-2">
                <h2 className="font-bold mt-4">{product.title}</h2>
                <p className="text-xs">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <p className="font-semibold py-2">{product.price}</p>
                  <button onClick={()=>removeFromCart(product)}  className="bg-green-500  px-3 rounded ">remove from cart</button>
                </div>
              </div>
            </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Cart
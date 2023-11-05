import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartContext'
import './Cart.css'

const Cart = () => {
  let total=0;
  const { cart, setCart } = useContext(CartContext)
  const [products, setProducts] = useState([])

  useEffect(() => {
    if (!cart.items) {
      return;
    }
    fetch('/api/products/cartitems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ids: Object.keys(cart.items) })
    }).then(res => res.json())
      .then(products => {
        setProducts(products)
      })
  }, [cart])

  const getQty = (productId) => {
    return cart.items[productId]
  }

  const increment = (productId) => {
    const oldQty = cart.items[productId]
    const _cart = { ...cart }
    _cart.items[productId] = oldQty + 1;
    _cart.totalItems += 1
    setCart(_cart)
  }

  const decrement = (productId)=>{
    const oldQty= cart.items[productId]
    if(oldQty>=2){ 
      const _cart = {...cart}
    _cart.items[productId]= oldQty-1;
    _cart.totalItems-=1 ;

    setCart(_cart)
    }
  }
  
  const getSum=(productId, price)=>{
    const sum  = price * getQty(productId)
     total += sum
    return sum;
  }

  const handleDelete = (productId)=>{
    const _cart = {...cart}
    const qty = _cart.items[productId];
    delete _cart.items[productId];
    _cart.totalItems -= qty;
    setCart(_cart)
    const updatedList = products.filter((product)=>product._id!==productId)
    setProducts(updatedList)
    }

  return (

    products.length? 
    <div>

      {
        products.map(product => {
          return (
            <ul>
              <li key={product._id}>
                <div className='flex1'>
                  <div className='flex2'>
                    <img className='pizzaimg' src={product.src}></img>
                    <span className='name'>{product.name}</span>
                  </div>
                  <div className='flex3'>
                    <button onClick={()=>{increment(product._id)}} className='increbtn'>+</button>
                    <span className='quantity'>{getQty(product._id)}</span>
                    <button onClick={()=>{decrement(product._id)}} className='decrebtn'>-</button>
                  </div>
                  <span className='price'>₹{getSum(product._id,product.price)}</span>
                  <button className='removebtn' onClick={()=>{handleDelete(product._id)}}>Remove</button>
                </div>
              </li>
            </ul>
          )
        })
      }


      <hr></hr>

      <div className='total'>
        <h2>Grand Total : ₹{total}</h2>

        <button onClick={()=>{ alert('Order Placed')}}>Checkout</button>
      </div>
    </div>
    :
    <div style={{marginLeft:"100px", display:"flex", marginTop:"50px"}}>
    <img src='/images/emptycart.png' alt='emptycart' style={{width:"550px" , margin:"auto"}}></img>
    </div>
  )
}

export default Cart


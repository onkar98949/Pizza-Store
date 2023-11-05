import React from 'react'
import { Link } from 'react-router-dom'
import  './Navigation.css'
import { CartContext } from '../CartContext'
import { useContext } from 'react'

const Navigation = (props) => {
  const {cart} = useContext(CartContext)
 
  return (
    <>
        <div className='navContainer'>
           <Link to='/' className='logo'>
               <img src='/images/pizzalogo.jpg' alt='logo '></img>
           </Link> 

           <ul>
              <li><Link to='/'  className='link'>Home</Link></li>
              <li><Link to='/products' className='link'>Products</Link></li>
              <li>
                <Link to='/cart' className='cartlink'>
                    <div className='cartdiv'>
                        <i class="ri-shopping-cart-fill"></i>
                        <span>{cart.totalItems?(<>{cart.totalItems}</>):(<>0</>)}</span>
                    </div>
                </Link>
              </li>
           </ul>
        </div>
    </>
  )
}

export default Navigation
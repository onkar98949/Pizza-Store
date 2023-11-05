// import React from 'react'
// import data from './data'
// import './Product.css'

// const Products = ({increment}) => {
  
//   return (
//     <div>
//       <h1>Products</h1>
//       <div className='griddiv'>
        
//            { data.map((item,index) => (
//             <>
//               <div className='imgdiv'>
//               <img src={item.src} alt='pizza1'></img>
//               <h2>{item.Name}</h2>
//               <div className='innerdiv'>
//                 <span>{item.price}</span>
//                 <button onClick={increment}>Add</button>
//               </div>
//               </div>
//             </>
//             ))}

//       </div>
//     </div>
//   )
// }

// export default Products  ;




import React, { useEffect, useState, useContext } from 'react'
import './Products.css'
import Product from './Product'
import { CartContext } from '../CartContext'

const Products = () => {

  const[products,setProducts]= useState([]) 
  useEffect(()=>{
    fetch('/api/products')
    .then(response => { return response.json()})
    .then(Products => {
      setProducts(Products)
      
    })
},[])
  
  return (
    <div>
      <h1>Products</h1>
      <div className='griddiv'>
        
           { products.map((item,index) => (
            <>
               <Product key={item._id} item={item}/>
            </>
            ))}

      </div>
    </div>
  )
}

export default Products  ;
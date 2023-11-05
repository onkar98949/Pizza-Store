// import React, { useEffect, useState } from 'react'
// import './SingleProduct.css'
// import { useParams } from 'react-router-dom'

// const SingleProduct = () => {
//   const [product, setProduct] = useState({})
//   const params = useParams();

//   useEffect(()=>{
//     fetch(`/api/product/${params._id}`)
//     .then(res => res.json())
//     .then(product =>{

//       setProduct(product)
//       console.log(product)
//     })
//     .catch(err=>{
//       console.log(err)
//     })


//   },[params._id])

//   return (
//     <div className='bigdiv'>
//       <button className='backbtn'>Back</button>
//       <div className='flexdiv'>
//           <img src={product[0].src} alt='pizza'></img>
//           <div>
//             <h2>Name: {product[0].name}</h2>
//             <h2>Price: {product[0].price} </h2>
//             <p><span>Details</span> : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates inventore,
//               eaque voluptatem labore laudantium exercitationem officiis illo quae quisquam. Ullam!
//             </p>

//             <button>Add To Cart</button>
//           </div>

//       </div>
//     </div>
//   )
// }

// export default SingleProduct



import React, { useEffect, useState } from 'react'
import './SingleProduct.css'
import { useParams , useNavigate } from 'react-router-dom'

const SingleProduct = () => {
  const [product, setProduct] = useState([])
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/product/${params._id}`)
      .then(res => res.json())
      .then(product => {

        setProduct(product)
      })
      .catch(err => {
        console.log(err)
      })


  }, [])

  return (
    <div className='bigdiv'>
      <button className='backbtn' onClick={()=>{navigate(-1)}}>Back</button>

      {product.map((item, index) => (
        <>
          <div className='flexdiv' key={index}>
            <img src={item.src} alt='pizza'></img>
            <div>
              <h2>Name: {item.name}</h2>
              <h2>Price: ₹{item.price} </h2>
              <p><span>Details</span> : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates inventore,
                eaque voluptatem labore laudantium exercitationem officiis illo quae quisquam. Ullam!
              </p>

              <button>Add To Cart</button>
            </div>

          </div>
        </>
      ))}
    </div>
  )
}

export default SingleProduct
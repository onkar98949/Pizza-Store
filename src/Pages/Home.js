import React from 'react'
import './Home.css'
import Products from '../components/Products'
const Home = () => {

    return (

        <>
           
            <div className='Banner'>
                <div className='bigtext'>
                    <h2>Feeling Hungry ?</h2>
                    <h1>Order Yours Now!</h1>
                    <button>Order Now</button>
                </div>
                <div className='bigimage'>
                    <img src='/images/pizzalarge.jpg' alt='pizza'></img>
                </div>
            </div>
            <Products/>
        </>
    )
}

export default Home
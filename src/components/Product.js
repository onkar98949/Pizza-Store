import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../CartContext'


const Product = (props) => {
    const { cart , setCart } = useContext(CartContext)
    const [btntext, setBtntext] = useState('Add')
    
    const Changetext = (e)=>{
        e.preventDefault();
        setBtntext('Added')
    }

    const btnclick=(e)=>{
        // e.preventDefault();
        addToCart(e,props.item);
        Changetext(e);
    }

    setTimeout(() => {
        setBtntext('Add')
    }, 1000);

    const addToCart  = ((event , product )=>{
        event.preventDefault();
        let _cart = {...cart};

        if(!_cart.items){
            _cart.items={}
        }
        

        if(_cart.items[product._id]){
            _cart.items[product._id] += 1;
        }else{
            _cart.items[product._id]=1;
        }

        if(!_cart.totalItems){
            _cart.totalItems=0;
        }
        _cart.totalItems+=1;
        setCart(_cart)

        // const cart ={
        //    items:{
        //     '653759a32692a38f7ae6eb39':2,
        //     '653759a32692a38f7ae6eb34':3
        //    },
        //    totalItems:5
        // }
    })
    return (
        <div className='imgdiv'>
            <Link to={`products/${props.item._id}`} style={{ textDecoration: "none", color: "black" }} >
                <img src={props.item.src} alt='pizza1'></img>
                <h2>{props.item.name}</h2>
                <div className='innerdiv'>
                    <span>₹{props.item.price}</span>
                    <button onClick={btnclick}>{btntext}</button>
                </div>

            </Link>
        </div>
    )
}

export default Product
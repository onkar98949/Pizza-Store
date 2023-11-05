import React, { useState , useEffect } from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart'
import Productpage from './Pages/Productpage';
import Navigation from './components/Navigation';
import SingleProduct from './components/SingleProduct';
import { CartContext } from './CartContext'
function App() {

  const [cart , setCart] = useState({});
  
  useEffect(()=>{
    const cart=  window.localStorage.getItem('cart')
    setCart(JSON.parse(cart))
  },[])

  useEffect(()=>{
    window.localStorage.setItem('cart',JSON.stringify(cart))
  },[cart])
  return (
    <>
        <Router>
        <CartContext.Provider value={{cart,setCart}}>
          <Navigation />
           <Routes> 
                <Route path="/" Component={Home} exact></Route>
                <Route path='/products' exact Component={Productpage}></Route>
                <Route path='/products/:_id' exact Component={SingleProduct}></Route>
                <Route path='/cart' Component={Cart}></Route>
           </Routes>
           </CartContext.Provider>
        </Router>
    </>
  );
}

export default App;

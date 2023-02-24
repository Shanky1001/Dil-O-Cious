
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../Components/Components Styles/Cart.css';

import CartCard from './Cards Components/CartCard';

const Cart = () => {
  const cart = useSelector(state => state.cart.cart)

  return (
    <div id="cartContainer">
      <h1> Items in your cart - ({cart.length}) </h1>
      <div id="cartListContainer">
        {cart.length === 0 ? <div className="emptyCartContainer">
          <img src=' https://book.smartercarrentals.com/images/cart.png' alt='Empty Cart' />
          <Link to="/menu" className="continueShopping"><button>Continue Shopping <i className="fa-solid fa-bag-shopping"></i></button></Link>
        </div>
          : <CartCard />}
      </div>
    </div>
  )
}

export default Cart

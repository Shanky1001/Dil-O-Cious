import React from 'react'
import { useNavigate } from 'react-router-dom';
import { CartState } from '../App';
import './Components Styles/Checkout.css'
import checkout from '../Assests/checkout.gif'

const Checkout = () => {
  const { state: { cart }, dispatch,userName, total } = CartState();
  const navigate = useNavigate();
  const reset = () => {
    dispatch({
      type: "clearCart"
    })
    navigate('/menu');
  }

  return (
    <div id="checkout">
      <img src={checkout} alt='success' />
      <h1> {`${userName} Thank you For your order!`} </h1>
      <h3> {`You have ordered ${cart.length} items worth price ₹${total}`} </h3>
      <button onClick={reset}> Continue Shopping <i class="fa-solid fa-bag-shopping"></i></button>
    </div>
  )
}

export default Checkout
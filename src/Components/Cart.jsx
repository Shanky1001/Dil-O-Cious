import React,{useContext} from 'react'
import { user } from '../App';
const Cart = () => {

var {cart,setCart,cartSize, setCartSize, discount, setDiscount, totalPrice, setTotalPrice} = useContext(user);

  return (
    <div>Cart</div>
  )
}

export default Cart
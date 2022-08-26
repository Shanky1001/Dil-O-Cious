import React,{useContext} from 'react';
import './Components Styles/Menu.css';
import { user } from '../App';

const Menu = () => {
var {cart,setCart,cartSize, setCartSize, discount, setDiscount, totalPrice, setTotalPrice} = useContext(user);

  return (
    <div id="menuContainer">

    </div>
  )
}

export default Menu
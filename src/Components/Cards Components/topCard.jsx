import React, { useContext, useEffect } from 'react';
import '../../App.css';
import './topCard.css'
import { user } from '../../App';

const TopCard = ({ val }) => {
  var { cart, setCart, cartSize, setCartSize, discount, setDiscount, totalPrice, setTotalPrice } = useContext(user);

  return (
    <div className="topCardContainer" id={val.idMeal}>
      <img src={val.strMealThumb} alt={val.strMeal} />
      <h1><span className='type'>{val.strCategory.toLowerCase() === "beef" || val.strCategory.toLowerCase() === 'chicken' || val.strCategory.toLowerCase() === "goat" || val.strCategory.toLowerCase() === 'lamb' || val.strCategory.toLowerCase() === 'pork' || val.strCategory.toLowerCase() === 'seafood' ? <img src='https://www.nabeeats.com/assets/images/non-veg.png' alt='Non Veg' /> : <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsT4e0RN6IsWAPDRX2etbSZ0vEHSj9dwZ6mxLylkpApzXblEDfu6uzg0Xd6sIK5xwhvok&usqp=CAU' alt='Veg' />}</span><span>{val.strMeal}</span></h1>
      <h4><p style={{ display: "inline" }}>Price: ₹ {val.price} </p><span>{val.price + 50}</span> </h4>
      <div>{cart.includes(val) ? <button className='delete' onClick={() => setCart(cart.filter((c) => c.id !== val.id))}> <i class="fa-solid fa-circle-minus"></i> </button> : <button className='add' onClick={(e) => setCart([...cart, val])}><i class="fa-solid fa-cart-plus"></i></button>}
      <button className='viewDetails'><i class="fa-solid fa-eye"></i></button></div>
    </div>

  )
}

export default TopCard
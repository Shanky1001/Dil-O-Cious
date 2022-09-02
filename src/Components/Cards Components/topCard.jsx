import React from 'react';
import '../../App.css';
import './topCard.css'
import { CartState } from '../../App';
import Tippy from '@tippyjs/react';

const TopCard = ({ val }) => {

  const { state: { cart }, dispatch, setOpenSnack } = CartState();

  return (
    <div className="topCardContainer" id={val.idMeal}>
      <img src={val.strMealThumb} alt={val.strMeal} />
      <h1><span>{val.strMeal}</span></h1>

      <h4><span className='type'>{val.strCategory.toLowerCase() === "beef" || val.strCategory.toLowerCase() === 'chicken' || val.strCategory.toLowerCase() === "goat" || val.strCategory.toLowerCase() === 'lamb' || val.strCategory.toLowerCase() === 'pork' || val.strCategory.toLowerCase() === 'seafood' ? <img src='https://www.nabeeats.com/assets/images/non-veg.png' alt='Non Veg' /> : <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsT4e0RN6IsWAPDRX2etbSZ0vEHSj9dwZ6mxLylkpApzXblEDfu6uzg0Xd6sIK5xwhvok&usqp=CAU' alt='Veg' />}</span><p style={{ display: "inline" }}>Price: ₹ {val.price} </p><span> {val.price + 50}</span> </h4>
      <div>{cart.some((p) => p.idMeal === val.idMeal) ? <Tippy content='Remove'>
        <button className='delete' onClick={() => {
          dispatch({
            type: "removeFromCart", payload: val
          })
          setOpenSnack({ open: true, html: `${val.strMeal} is removed from cart`, severity: "success", time: "800" })
        }}> <i className="fa-solid fa-circle-minus"></i> </button>
      </Tippy> : <Tippy content='Add to cart'>
        <button className='add' onClick={() => {
          dispatch({
            type: "addToCart", payload: val
          })
          setOpenSnack({ open: true, html: `${val.strMeal} is added to cart`, severity: "success", time: "800" })
        }}><i className="fa-solid fa-cart-plus"></i></button>
      </Tippy>}
      <button className='addToWishlist'><Tippy content='Wishlist'><i class="fa-solid fa-heart"></i></Tippy></button>
        <button className='viewDetails'><Tippy content='view details'><i className="fa-solid fa-eye"></i></Tippy></button></div>
    </div>

  )
}

export default TopCard
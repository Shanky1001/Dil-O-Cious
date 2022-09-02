import React, { useEffect, useState } from 'react';
import { CartState } from '../../App';
import '../Components Styles/Cart.css';
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css';
import { useNavigate } from 'react-router-dom';


const CartCard = () => {

     const navigate = useNavigate();

     // Importing state from context
     const { state: { cart }, dispatch, open, setOpen, logged, setOpenSnack, total, setTotal } = CartState();


     useEffect(() => {
          var sum = cart.reduce((acc, val) => acc + (val.price * val.qty), 0);
          setTotal(sum);
     }, [cart])

     const checkout = () => {

          if (logged === false) {
               setOpenSnack({ open: true, html: `You are not logged in! Please login first.`, severity: 'error' })
          } else {
               navigate('/checkout');
          }
     }

     return (
          <div id="cartCardContainer">
               <div id="cartList">

                    {/* Mapping to print the items in carts */}
                    {cart.length !== 0 && cart.map((val, index) => {
                         return <div key={index} className="cartProductContainer">
                              <div className='cartProductDetails'>
                                   <img src={val.strMealThumb} alt={val.strMeal} />
                                   <h3> {val.strMeal}</h3>
                              </div>
                              <div className='cartProductPrice'>
                                   <p> Price: ₹ {val.price}</p>
                                   <p>Item Price: ₹ {val.price * val.qty}</p>
                              </div>
                              <div className="cartProductQuantity">
                                   <div className='quantity'>
                                        <i className="fa-solid fa-circle-plus" onClick={() => {
                                             dispatch({
                                                  type: "increaseQTY", payload: {
                                                       idMeal: val.idMeal,
                                                       qty: val.qty + 1
                                                  }
                                             })
                                        }} /> {val.qty} <i className="fa-solid fa-circle-minus" onClick={() => {
                                             dispatch({
                                                  type: "decreaseQTY", payload: {
                                                       idMeal: val.idMeal,
                                                       qty: val.qty - 1
                                                  }
                                             })
                                        }} />
                                   </div>
                                   <div className='deleteItem'>
                                        <Tippy content='delete from cart' placement="left">
                                             <i class="fa-solid fa-trash-can" onClick={() => { setOpen({ open: true, html: "Are your to delete this product from cart ?", type: "trash", value: val }) }}></i>
                                        </Tippy>
                                   </div>
                              </div>
                         </div>
                    })}
               </div>

               {/* For Total Sum and Checkout */}

               <div id="total">
                    <div> <button className='clear' onClick={() => {
                         setOpen({ ...open, open: true, html: "Are your to empty your cart ?", type: "empty" })
                    }}> Empty Cart </button></div>
                    <div>
                         <h1>Total: ₹{total}</h1>
                         <button className='checkout' onClick={checkout}> Checkout </button>
                    </div>
               </div>

          </div>
     )
}

export default CartCard;


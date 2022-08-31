import React, { useEffect, useState } from 'react';
import { CartState } from '../../App';
import '../Components Styles/Cart.css';

const CartCard = () => {
     const { state: { cart }, dispatch } = CartState();

     var [total, setTotal] = useState(0);

     useEffect(() => {
          var sum = cart.reduce((acc, val) => acc + (val.price * val.qty), 0);
          setTotal(sum);
     }, [cart])

     return (
          <div id="cartCardContainer">
               <div id="cartList">
                    <div>
                         <span>#</span>
                         <span>item</span>
                         <span>Quantity</span>
                         <span>Price</span>
                         <span>Item Price</span>
                    </div>
                    {cart.length !== 0 && cart.map((val, index) => {
                         return <div key={index}>
                              <span>{index + 1}</span>
                              <span><img src={val.strMealThumb} alt={val.strMeal} /><div>{val.strMeal}</div></span>
                              <span> <div> <i className="fa-solid fa-circle-plus" onClick={() => {
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
                              }} /></div> <p onClick={() => {
                                   dispatch({
                                        type: "removeFromCart", payload: val
                                   })
                              }}> Remove
                                   </p></span>
                              <span>{val.price}</span>
                              <span>{val.price * val.qty}</span>
                         </div>
                    })}
               </div>

               <div id="total">
                    <div></div>
                    <div>
                         <h1>Total : {total}</h1>
                         <button> Checkout </button>
                    </div>
               </div>

          </div>
     )
}

export default CartCard
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
                    {cart.length !== 0 && cart.map((val, index) => {
                         return <div key={index} className="cartProductContainer">
                              <div className='cartProductDetails'>
                                   <img src={val.strMealThumb} alt={val.strMeal} />
                                   <h3> {val.strMeal}</h3>
                              </div>
                              <div className='cartProductPrice'>
                                   <p> Price : {val.price}</p>
                                   <p>Item Price : {val.price * val.qty}</p>
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
                                        <i class="fa-solid fa-trash-can" onClick={() => {
                                             dispatch({
                                                  type: "removeFromCart", payload: val
                                             })
                                        }}></i>
                                   </div>
                              </div>
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


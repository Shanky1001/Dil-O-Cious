import React from 'react';
import '../../App.css';
import './topCard.css'

const TopCard = ({ val }) => {
  return (
    <div className="topCardContainer" id={val.idMeal}>
      <img src={val.strMealThumb} alt={val.strMeal} />
      <h1><span className='type'>{val.strCategory.toLowerCase() === "beef" || val.strCategory.toLowerCase() === 'chicken' || val.strCategory.toLowerCase() === "goat" || val.strCategory.toLowerCase() === 'lamb' || val.strCategory.toLowerCase() === 'pork' || val.strCategory.toLowerCase() === 'seafood' ? <img src='https://www.nabeeats.com/assets/images/non-veg.png' alt='Non Veg' /> : <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsT4e0RN6IsWAPDRX2etbSZ0vEHSj9dwZ6mxLylkpApzXblEDfu6uzg0Xd6sIK5xwhvok&usqp=CAU' alt='Veg' />}</span><p>{val.strMeal}</p></h1>
      <h4><p style={{ display: "inline" }}>Price: ₹ {val.price} </p><span>{val.price + 50}</span> </h4>
      <div> <button className='add'> Add to Cart</button>
        {/* <button className='delete'> Remove from Cart</button> */}
        <button className='viewDetails'>View Details</button>
      </div>
    </div>
  )
}

export default TopCard
import React, {useState} from 'react';
import {IoStarHalf} from "react-icons/io5";
import "../../Styles/starRating.scss"
const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
  return (
    <div className='rating-main'>
{[...Array(5)].map((star, index)=>{
    const currentRating = index + 1;
    return(
        <label>
            <input
            type='radio'
            name='rating'
            value={currentRating}
            onClick={()=>setRating(currentRating)}
            />
            <IoStarHalf 
             className ='star'
            //  size={30}
             color={currentRating<=(hover || rating)? "#ffc107":"#ff6347"}
             onMouseEnter={()=>setHover(currentRating)}
             onMouseLeave={()=>setHover(null)}
             />
        </label>
    )
})}
<span className='rating-span'>{rating}</span>
    </div>
  )
}

export default StarRating
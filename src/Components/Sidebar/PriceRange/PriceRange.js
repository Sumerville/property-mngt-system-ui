import React from 'react'
import "../../../Styles/SideBar/priceRange.scss";
import { TbCurrencyNaira  } from "react-icons/tb";
const PriceRange = () => {
  return (
    <div className='pricerange-main'>
 <h2 className='price-title'>
        Price Range
      </h2>
<div className='price-label-container'>
        <label>
          <input type='radio' name='test2' className='input-text' />
          <span className='check-box-p'></span>ALL
        </label>
        <label>
          <input type='radio' name='test2' className='input-text' />
          <span className='check-box-p'></span>Below <TbCurrencyNaira className='naira-sign'/>500,000 
        </label>
        <label>
          <input type='radio' name='test2' className='input-text' />
          <span className='check-box-p'></span><TbCurrencyNaira className='naira-sign'/>500,000 - 1,000,000
        </label>
        <label>
          <input type='radio' name='test2' className='input-text' />
          <span className='check-box-p'></span><TbCurrencyNaira className='naira-sign'/>1,000,000 - 1, 500, 000
        </label>
        <label>
          <input type='radio' name='test2' />
          <span className='check-box-p'></span><TbCurrencyNaira className='naira-sign'/>1,500,000 - 2, 500, 000
        </label>
        <label>
          <input type='radio' name='test2' />
          <span className='check-box-p'></span>Above <TbCurrencyNaira className='naira-sign'/>2,500,000 
        </label>
      </div>
    </div>
  )
}

export default PriceRange
import React from 'react'
import "../../../Styles/SideBar/category.scss"
const Category = () => {
  return (
    <div className='category-main'>
      <h2 className='category-title'>
        Category
      </h2>
      <div className='category-label-container'>
        <label>
          <input type='radio' name='test' className='input-text' />
          <span className='check-box'></span>ALL
        </label>
        <label>
          <input type='radio' name='test' className='input-text' />
          <span className='check-box'></span>Bungalow
        </label>
        <label>
          <input type='radio' name='test' className='input-text' />
          <span className='check-box'></span>Duplex
        </label>
        <label>
          <input type='radio' name='test' className='input-text' />
          <span className='check-box'></span>Terraced
        </label>
        <label>
          <input type='radio' name='test' />
          <span className='check-box'></span>Semi-Detached
        </label>
        <label>
          <input type='radio' name='test' />
          <span className='check-box'></span>Appartment Building
        </label>
      </div>
    </div>
  )
}

export default Category
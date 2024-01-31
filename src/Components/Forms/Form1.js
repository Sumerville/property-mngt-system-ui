import React from 'react'
import "../../Styles/Forms/form1.scss"
const Form1 = () => {
  return (
    <div className='form-contents'>
<form>
    <h2>Contact The Landlord on This Property</h2>
    <div className='form-input-box'>
    <input type='text' placeholder='Name'/>
   
    </div>
    <div className='form-input-box'>
    <input type='email' placeholder='Email'/>
   
    </div> 
    <div className='form-input-box'>
    <textarea type='text' placeholder='Enquiry'/>
   
    </div>
    <div className='form-input-box'>
  <button className='btn-2'>Submit</button>
   
    </div>
</form>
<div className='review-form'>
    <h2 className='review-header'>You Can Also Leave a Review</h2>
    <form>
    <textarea type='text' placeholder='Your Review'/>
    <div className='form-input-box'>
  <button className='btn-2'>Review</button>
   
    </div>
    </form>
    </div>
    </div>
  )
}

export default Form1
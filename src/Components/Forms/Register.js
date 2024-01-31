
import React from 'react';
import "../../Styles/register.scss";
import "../../Styles/button.scss"

const Register = () => {
  return (
    <div className='register-main'>
        <div className='register-container'>
            <h2>Sign Up</h2>
    
     <div className='register-row'>
        <div className='col'>
       <div className='input-box'>
        <input />
        <span className='f-text'>First Name</span>
        <span className='line'></span>
       </div>
        </div>
        <div className='col'>
       <div className='input-box'>
        <input />
        <span className='f-text'>Last Name</span>
        <span className='line'></span>
       </div>
        </div>
        <div className='col'>
       <div className='input-box'>
        <input />
        <span className='f-text'>User Name</span>
        <span className='line'></span>
       </div>
        </div>

        <div className='col'>
       <div className='input-box'>
        <input />
        <span className='f-text'>City</span>
        <span className='line'></span>
       </div>
        </div>

        <div className='col'>
       <div className='input-box'>
        <input />
        <span className='f-text'>Mobile</span>
        <span className='line'></span>
       </div>
        </div>

        <div className='col'>
       <div className='input-box'>
        <input />
        <span className='f-text'>Email</span>
        <span className='line'></span>
       </div>
        </div>

        <div className='col'>
       <div className='input-box'>
        <input  type='password'/>
        <span className='f-text'>Password</span>
        <span className='line'></span>
       </div>
        </div>
     </div>
     <div className='btn'>
        <button className='btn-2'>Sign Up</button>
     </div>
     </div>
    </div>
  )
}

export default Register
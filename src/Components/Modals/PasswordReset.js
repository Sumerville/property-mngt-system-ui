
import { useState, useEffect } from 'react';
import "../../Styles/Modals/pwmodal.scss";
import {IoCloseCircleSharp} from "react-icons/io5";
import axios from "axios";
const PasswordReset = ({ closeModal }) => {
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState("");
    const [formErrorMessage, setFormErrorMessage] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState("");
    
   
      const handleResest = (e) => {
        e.preventDefault();
        const errors = validateForm();
       setErrors(errors)
      }

   const validateForm = () => {
        const error = {};
        if(!email){
          error.email = "Please Enter Your Email";
        }else if(!/\S+@\S+\.\S+/.test(email)){
          error.email = "Invalid Email Address"
        }else{
          error.email = ""
        }
      return error;
      }

    return (
        <div className='.reset-modal-background'>

            <div className='reset-modal-container'>
                <div className='reset-modal-btn'>
                    <span className='reset-btn-span' onClick={() => closeModal(false)}>

                        <IoCloseCircleSharp/>
                    </span>
                </div>


                <div className='reset-modal-body'>
                    <div className='reset-title'>
                        <p>Enter Your Email Below and you will recieve an instruction on how to Reset Your Password</p>
                    </div>
                    <form
                       onSubmit={handleResest}
                    >
                        <div className='reset-form-input'>
                            <input 
                            placeholder='Enter Your Email'
                            name="email"
                            type='text'
                            onChange={(e)=> setEmail(e.target.value)}
                            />
                            {errors.email && (<div className="error-text">{errors.email}</div>)}
                        </div>
                        <div className='reset-modal-btn'>
                            <button className='reset-btn-1'>Reset Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PasswordReset
import React from 'react'
import Topbar from "../../Components/Topbar/Topbar";
import Footer from '../../Components/Footer/Footer';
import "../../Styles/signup.scss";
import "../../Styles/button.scss";
import { useState } from 'react';
import {
  IoKeySharp, IoPersonSharp, IoLockClosed, IoPersonAdd,
  IoLocationSharp, IoLocationOutline,
  IoMailOpenSharp, IoLogInSharp, IoStarHalf
} from "react-icons/io5";
const Signup = () => {
  const [regmode, setRegmode] = useState(true)
  const [addclass, setAddclass] = useState(false);
  const toggleform = () => {
    setAddclass(!addclass)
    setRegmode(!regmode)
  }

  return (
    <div className='signup-main' >
      <Topbar />

      <div className='container-main'>
        <div className='container'>
          {addclass ? (

            <div className='form-container sign-up'>
              <form>
                <div className='form-icon'>
                  <span><IoLockClosed className='icon-lock' /></span>
                </div>
                <h2 className='sign-up-header'>Create Account</h2>
                <input type='text' placeholder='USER NAME' />
                <input type='text' placeholder='CITY' />
                <input type='text' placeholder='MOBILE' />
                <input type='email' placeholder='EMAIL' />
                <input type='password' placeholder='PASSWORD' />
                <button className='btn'>Register</button>
              </form>
            </div>
          ) :
            <div className='form-container sign-in'>
              <form>
                <div className='form-icon'>
                  <span><IoKeySharp className='icon-key' /></span>
                </div>
                <h2 className='sign-in-header'>Sign In</h2>
                <input type='email' placeholder='EMAIL' />
                <input type='password' placeholder='PASSWORD' />
                <span className='paswword-reset-link'>Forgot Your Password?</span>
                <button className='btn'>Sign In</button>
              </form>
            </div>
          }



          <div className='toggle-container'>

            <div className='toggle'>
              {regmode ? (
                <div className='toggle-panel toggle right'>
                  <div className='toggle-icon'>

                    <span><IoLockClosed className='icon-lock' /></span>
                  </div>
                  <h2>Hello!</h2>
                  <p>Don't Have An Account?</p>
                  <button className='hidden' onClick={toggleform}>Sign Up</button>
                  <p className='sumer-text'><i>Sumer Homes is a place to be, we got you coverred on a wide range of Real Estate Seervices; You can Buy, Rent and Sell Your Properties on Sumer Homes. Register Today to get started.</i></p>
                </div>
              ) : <div className='toggle-panel toggle left'>
                <div className='toggle-icon'>
                  <span><IoPersonSharp className='icon-person' /></span>
                </div>
                <h2>Welcome Back!</h2>
                <p>Please Sign In to use Our Services</p>
                <button className='hidden' onClick={toggleform}>Sign In</button>
                <p className='sumer-text'><i>Sumer Homes is a place to be, we got you coverred on a wide range of Real Estate Seervices; You can Buy, Rent and Sell Your Properties on Sumer Homes. Register Today to get started.</i></p>
              </div>}



            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Signup
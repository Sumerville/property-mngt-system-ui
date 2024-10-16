import { useState, useEffect, useRef } from 'react';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../Styles/Register/account.scss";
import Topbar from '../../Components/Topbar/Topbar';
import Footer from '../../Components/Footer/Footer';
import axios from "axios";
import Preloader from '../../Components/Preloader/Preloader';
import Modal from '../../Components/Modals/Modal';
import PasswordReset from '../../Components/Modals/PasswordReset';
import {toast} from "react-toastify";
import Spinner from '../../Components/Spinner/Spinner';
import Loader from '../../Components/Loader/Loader';
import ValidateForm from '../../Components/Validation/ValidateForm';
import {
  IoKeySharp, IoPersonSharp, IoLockClosed, IoPersonAdd,
  IoLocationSharp, IoLocationOutline,
  IoMailOpenSharp, IoLogInSharp, IoStarHalf, IoCheckmarkSharp, IoCloseCircleSharp
} from "react-icons/io5";
import { BiShow, BiHide } from "react-icons/bi";

const CreateAccout = () => {
  const [regmode, setRegmode] = useState(true)
  const [addclass, setAddclass] = useState(false);
  const toggleform = () => {
    setAddclass(!addclass)
    setRegmode(!regmode)
  };

  const navigate = useNavigate();
  const [formErrorMessage, setFormErrorMessage] = useState("");
  const [storeData, setStoreData] = useState([]);
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(false);
  const [error, setError] = useState({});
  const [showpassword, setShowpassword] = useState(false);
  const [serverErrors, setServerErrors] = useState([]);
  const handleShowpass = ()=>{
setShowpassword(prev => !prev)
  }

  const [values, setValues] = useState({
    userName: "",
    email: "",
    password: "",
    mobile: "",
    city: "",

  });
  const [logval, setLogval] = useState({
    email: "",
    password: "",
  })
  const handleChange = (e) => {
    setValues({
      ...values, [e.target.name]: e.target.value,
    });

  }
  const handleLog = (e) => {
    setLogval({
      ...logval, [e.target.name]: e.target.value,
    })
  }

  const validateForm = () => {
    const errors = {};
    if (!values.userName.trim()) {
      errors.userName = "User Name Required";
    }else if(values.userName.length < 3){
      errors.userName = "User Name must be three characters and above"
    }
    if (!values.city.trim()) {
      errors.city = "City is Required";
    }
    if (!values.mobile.trim()) {
      errors.mobile = "Mobile is Required";
    }
    if (!values.email.trim()) {
      errors.email = "Email is Required";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password.trim()) {
      errors.password = "Password is Required"
    } else if (values.password.length < 8) {
      errors.password = "Password Must be 8 characters and above"
    }
    setErr(errors);
    return Object.keys(errors).length === 0;
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const isFormValid = validateForm();
      if (isFormValid) {
        setLoading(true)
        const res = await axios.post("http://localhost:5001/api/v1/auth/register", values);
        console.log(res)
        if (res?.data) {
          toast.success("Account Created Successfully",{
            position:"top-right",
            autoClose:5000
          
        })
          setLoading(false)
          setValues({
            userName: "",
            email: "",
            password: "",
            mobile: "",
            city: "",
          })
        }
      } else {
        setFormErrorMessage(
          "Please fill in all required fields and correct any validation errors."
        );
      }

    } catch (err) {
      setLoading(false)
      if(err.response.data.errors){
        setServerErrors(err.response.data.errors)
        toast.error(err.response.data.errors,{
          position:"top-right",
          autoClose:5000
        
      })
    }else{
        console.log(err)
    }
    }
  }

  const handleSignin = async (e) => {
    e.preventDefault();
    const errs = ValidateForm(logval)
    setError(errs)
    try {
      if (errs.email ==="" && errs.password ==="") {
        setLoading(true)
        const res = await axios.post("http://localhost:5001/api/v1/auth/login", logval);
        if (!res.error) {
          localStorage.setItem('user', JSON.stringify(res));
     
          navigate('/')
          setErr(true)
      setLoading(false)
        }else if(res.errors){
          setServerErrors(res.errors)
        }
      } else {
        setFormErrorMessage(
          "Please fill in all required fields and correct any validation errors."
        );
      }
      
    } catch (err) {
      setLoading(false)
      if(err.response.data.errors){
        setServerErrors(err.response.data.errors)
   
    }

    }
  }
  return (
    <div className='account-main-container'>
      <Topbar />
      <div className='account-container'>
        <div className='account-contents'>
          <div className='account-left'>
            {addclass ? (
              <div className='form-container-reg'>

                <form
                  onSubmit={handleSubmit}
                >
                  <div className='account-icon'>
                    <span className='account-lock-icon'><IoLockClosed /> </span>
                  </div>
                  <div className='account-header'>

                    <h2>Create Account</h2>
                  </div>

                  <input type='text' placeholder='USER NAME'
                    autoComplete='off'
                    name="userName"
                 
                    value={values.userName} onChange={handleChange}
                  />
                  {err.userName && (<span className="error-text-span">{err.userName}</span>)}
                  <input type='text' placeholder='CITY'
                    autoComplete='off'
                    name="city"
                    value={values.city} onChange={handleChange}
                  />
                  {err.city && (<span className="error-text-span">{err.city}</span>)}
                  <input type='text' placeholder='MOBILE'
                    autoComplete='off'
                    name="mobile"
                    value={values.mobile} onChange={handleChange}
                  />
                  {err.mobile && (<span className="error-text-span">{err.mobile}</span>)}
                  <input type='text' placeholder='EMAIL'
                    autoComplete='off'
                    name="email"
                    value={values.email} onChange={handleChange}
                  />
                  {err.email && (<span className="error-text-span">{err.email}</span>)}
                  <div className='show-pass-reg'><span className='show-pass-reg-span' onClick={handleShowpass}>{showpassword? <BiShow/>:<BiHide/>}</span></div>
                  <input type={showpassword? "text": "password"} placeholder='PASSWORD'
                    autoComplete='off'
                    name="password"
                    id='password'
                    value={values.password} onChange={handleChange}
                  />
                  {err.password && (<span className="error-text-span">{err.password}</span>)}
                  {
                    serverErrors.map((error, index)=>(
                        <h2 className="error" key={index}>{error.msg}</h2>
                    ))
                }
                  <div className='reg-btn'>
                    <button className='btn-2'>{loading?<Preloader/>:"Register"}</button>
                  </div>
                 
                </form>
              </div>

            ) : <div className='form-container-log'>
              <form

              >
                <div className='account-icon'>
                  <span className='account-key-icon'><IoKeySharp /> </span>
                </div>
                <h2 className='login-header'>Sign In</h2>
                {err === true ? <p>Sorry You dont have account, Sign Up?</p> : null}
                <input type='email' placeholder='EMAIL'
                  autoComplete='off'
                  name="email"
                  value={logval.email} onChange={handleLog}
                
                />
                {error.email && (<span className="error-text-span">{error.email}</span>)}
                <div className='show-pass-log'><span className='show-pass-log-span' onClick={handleShowpass}>{showpassword? <BiShow/>:<BiHide/>}</span></div>
                <input type={showpassword? "text": "password"} placeholder='PASSWORD'
                  autoComplete='off'
                  name="password"
                  value={logval.password} onChange={handleLog}
                />
                {error.password && (<span className="error-text-span">{error.password}</span>)}
                {
                    serverErrors.map((error, index)=>(
                        <h2 className="logerror" key={index}>{error.msg}</h2>
                    ))
                }
               <Link to="/reset-page" className='links'>
                <p className='paswword-reset' 
                >Forgot Your Password?</p>
                </Link>
                <Link to="/verify-account" className='links'>
                <p className='paswword-reset' 
                >Verify Your Account?</p>
                </Link>
                <div className='log-btn preloder-resize'>
                  <button className='btn-2' onClick={handleSignin}>{loading? <Preloader/>:"Sign In"}</button>
                </div>
              </form>
            </div>}


          </div>
          <div className='account-right'>
            <div className='account-toggle'>
              {regmode ? (

                <div className='account-toggle-col1'>
                  <div className='account-toggle-icon'>

                    <span><IoLockClosed className='account-icon-lock' /></span>


                  </div>
                  <h2 className='toggle-head'>Hello!</h2>

                  <p className='toggle-text'>Don&apos;t Have An Account?</p>
                  <div className='ghost'>
                    <button onClick={toggleform}>Sign Up</button>
                  </div>

                  <p className='sumer-text-acct'><i>Sumer Homes is a place to be, we got you coverred on a wide range of Real Estate Seervices; You can Buy, Rent and Sell Your Properties on Sumer Homes. Register Today to get started.</i></p>
                </div>
              ) : <div className='account-toggle-col2'>

                <div className='account-toggle-icon'>
                  <span><IoPersonSharp className='account-icon-person' /></span>
                </div>
                <h2 className='toggle-head'>Welcome Back!</h2>
                <p className='toggle-text'>Please Sign In to use Our Services</p>
                <div className='ghost'>
                  <button onClick={toggleform}>Sign In</button>
                </div>

                <p className='sumer-text-acct'><i>Sumer Homes is a place to be, we got you coverred on a wide range of Real Estate Seervices; You can Buy, Rent and Sell Your Properties on Sumer Homes. Register Today to get started.</i></p>
              </div>}


            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CreateAccout
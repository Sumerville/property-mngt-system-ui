import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/Register/verification.scss";
import { Link } from "react-router-dom";
import {toast} from "react-toastify";
import Preloader from '../../Components/Preloader/Preloader';
import axios from "axios";
function Verification(){
    const [values, setValues] = useState({
        email:"",
        otp: ""
      });
      const [loading, setLoading] = useState(false);
      const navigate = useNavigate();
      const [errors, setErrors] = useState({});
      const [err, setErr] = useState(false);
      const [serverErrors, setServerErrors] = useState([]);
      const handleInput = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
      }

      const validateForm = () => {
        const errors = {};
        if (!values.email.trim()) {
            errors.email = "Field is required!";
          }
        if (!values.otp.trim()) {
          errors.otp = "Field is required!";
        }
        setErr(errors);
        return Object.keys(errors).length === 0;
      };

      const handleSubmit = async (e) => {
        e.preventDefault()
      
        try {
            const isFormValid = validateForm();
          if (isFormValid) {
            setLoading(true)
            const res = await axios.post("http://localhost:5001/api/v1/verification/verify/user", values);
            if (!res?.error) {
              setLoading(false)
              toast.success("Account Verified Successfully",{
                position:"top-right",
                autoClose:5000
              
            })
              setValues({
                email:"",
                 otp: ""
              })
            } else if (res?.error) {
              setServerErrors(res.errors)
    
            } else {
              setServerErrors("Something went wrong")
            }
    
          }
        } catch (err) {
          setLoading(false)
          if (err.response.data?.errors) {
            setServerErrors(err.response.data?.errors)
    
          }
        }
    
      }

    return(
        <div className="verify-main">
   <div className="form-container">
            <form className="form">
                <h4>Enter Your Email and the Otp Sent to you to verify your Account</h4>
             
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email"
                        placeholder="Enter Email"
                        className="form-control"
                        name="email"
                        autoComplete="off"
                        value={values.email} onChange={handleInput}
                    />
                        {err.email && (<span className="error-text">{err.email}</span>)}
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">OTP:</label>
                    <input type="text"
                     placeholder="OTP"
                      className="form-control" 
                      name="otp" 
                      value={values.otp} onChange={handleInput}
                      />
                          {err.otp && (<span className="error-text">{err.otp}</span>)}
                </div>
                {
                    serverErrors.map((error, index)=>(
                        <p className="verify-error" key={index}>{error.msg}</p>
                    ))
                }
                <button className="btn-3" onClick={handleSubmit}>{loading ? <Preloader /> : "Verify"}</button>
                <div className="verify-div">
                <p><Link className="verify-link" to="/account-page">Login?</Link></p>
                </div>
            </form>
        </div>

        </div>
    )
}
export default Verification
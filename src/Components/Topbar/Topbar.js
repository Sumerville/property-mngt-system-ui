import React, { useState } from "react";
import "../../Styles/topbar.scss"
import { IoCloseSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import {NavLink} from "react-router-dom";
// import Dropdown from "../Dropdown/Dropdown";
import Dropdown from "../Dropdown/Dropdown";
import { AiOutlineLogout } from "react-icons/ai";
import logo from "../../assets/images/img44.png";
import sumerhome from "../../assets/images/SUMER HOMES3.png";
import  Modal  from "../Modals/Modal"
function Topbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false)
    const [openModal, setOpenModal] = useState(false);
    const [user, setUser] = useState(false);
    return (
        <div className="topbar">
            <div className="navbar-container">
                <div className="nav-left">
                    <img src={sumerhome} alt="logo"/>
                    <span>Sumer Homes</span>
                </div>
                <div className="nav-center">
                <ul className={click ? "nav-menu active": "nav-menu"}>
                        <li className="nav-item">
                            <NavLink to="/" className={({isActive})=>"nav-links " + (isActive? "activated":"")}>
                            Home
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/listing" className={({isActive})=>"nav-links " + (isActive? "activated":"")}
                            
                            >
                            Listing
                            </NavLink>
                            </li>
                       
                            <li className="nav-item">
                            <NavLink to="/about-page" className={({isActive})=>"nav-links " + (isActive? "activated":"")}
                            
                            >
                            About
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/contact-page" className={({isActive})=>"nav-links " + (isActive? "activated":"")}
                            
                            >
                            Contact
                            </NavLink>
                            </li>
                          {user?( <li className="log-out-icon"><AiOutlineLogout/></li>)
                          :
                             
                          <li className="nav-item">
                          <NavLink to="/account-page" className={({isActive})=>"nav-links " + (isActive? "activated":"")}

                          >
                          Register
                          </NavLink>
                          </li>
                          }
                        
                    </ul>
                </div>
                <div className="nav-right">
                 
                <div className ="dropdown-control">
                  <Dropdown/>
                </div>
                </div>
               
            </div>
        </div>
    )
}
export default Topbar
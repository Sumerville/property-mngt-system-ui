import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Styles/dropdown.scss";

import React from 'react'

const Dropdown = () => {
    const [status, setStatus] = useState("close")
    return (
        <div className="dropdown">
            <div className="dropdown-triger" onClick={() => setStatus(status === "open" ? "close" : "open")}>
                <i className={status}></i>
                <i className={status}></i>
                <i className={status}></i>
            </div>

       <div className={`dropdown-menu ${status === "open" ? "active" : "inactive"}`} >
       <div className="dropdown-menu-container">
          <ul>
            <Link className="dropdown-links" to="/">
              <li>Home</li>
            </Link>
            <Link className="dropdown-links" to="/listing">
              <li>Listing</li>
            </Link>

            <Link className="dropdown-links" to="/about">
              <li>About</li>
            </Link>
            <Link className="dropdown-links" to="/contact">
              <li>Contact</li>
            </Link>
            <Link className="dropdown-links" to="/signup">
              <li>Sign Up</li>
            </Link>
            <Link className="dropdown-links" to="/login">
              <li>Log In</li>
            </Link>
            <div className="dropdown-links">
              <li>Log Out</li>
            </div>

          </ul>
        </div>
       </div>
        </div>
    )
}

export default Dropdown
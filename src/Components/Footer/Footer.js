import React, { useState } from "react";
import { Link } from "react-router-dom"
import "../../Styles/footer.scss";
import "../../Styles/button.scss"
import { FaFacebookF, FaYoutube, FaInstagram, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { IoLocation, IoMail } from "react-icons/io5";
import Spinner from "../Spinner/Spinner";
function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const [loading, setLoading] = useState(true);
  return (
    <div className="footer">

      <div className="footer-top">
        <div className="footer-top-co1">
          <div className="footer-adress">
            <h4>
              contact us
            </h4>
          </div>
          <div className="footer-adress">
            <IoLocation />
            <span>30, Dagaci Street Dakwa</span>
          </div>
          <div className="footer-adress">
            <FaPhoneAlt />
            <span>09033149019</span>
          </div>
          <div className="footer-adress">
            <IoMail />
            <span>summerhomes@gmail.com</span>
          </div>
          <div className="footer-adress">

          </div>
        </div>
        <div className="footer-top-col2">
          <div className="footer-links">
            <h4>Special Links</h4>
          </div>
          <div className="footer-links">
            <Link className="links">
              <p>Contact us</p>
            </Link>
          </div>
          <div className="footer-links">
            <Link className="links">
              <p>special Offer</p>
            </Link>
          </div>
          <div className="footer-links">
            <Link className="links">
              <p>About Sumer Homes</p>
            </Link>
          </div>
          <div className="footer-links">
            <Link className="links">
              <p>Listings</p>
            </Link>

          </div>
        </div>

        <div className="footer-top-col3">
          <div className="footer-s-media">
            <div className="media-name">
              <i><FaFacebookF /></i>
            </div>
            <span>Facebook</span>
          </div>
          <div className="footer-s-media">
            <div className="media-name">
              <i><FaInstagram /></i>
            </div>
            <span>Instagram</span>
          </div>
          <div className="footer-s-media">
            <div className="media-name">
              <i> <FaYoutube /></i>

            </div>
            <span>Youtube</span>
          </div>
          <div className="footer-s-media">
            <div className="media-name">
              <i>  <FaXTwitter /></i>
            </div>
            <span>Twitter-X</span>
          </div>
          <div className="footer-s-media">
            <div className="media-name">
              <i>  <FaGithub /></i>
            </div>
            <span>Github</span>
          </div>
        </div>
        <div className="footer-top-col4">
          <div className="footer-form">
            <div className="news-letter">
              <h4>Subscribe To Our News Letter</h4>
            </div>
            <div className="Input-box">
              <input type="text" required="required" />
              <span>Email</span>
            </div>
            <div className="footer-btn">
              <button type="submit" className="btn-2">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copy-right">

          &copy;{year} Sumerville Technologies Ltd, All Rights Reserved.
        </p>
      </div>
    </div>
  )
}
export default Footer
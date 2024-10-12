import React from 'react';
import Topbar from '../../Components/Topbar/Topbar';
import Footer from '../../Components/Footer/Footer';
import "../../Styles/contact.scss";
import Register from '../../Components/Forms/Register';
// import Modal from "../../Components/Modal/Modal"
import { useState } from 'react';
import Carousel from '../../Components/Carousel/Carousel';

const Contact = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className='contact-main'>
      <Topbar/>
      {/* <div className='contact-container'>
        <div>
        <li className="register-modal-triger" onClick={()=>{setOpenModal(true)}}>Sign Up</li>
        {openModal && <Modal closeModal={setOpenModal}/>} 
        </div>
     <Register/>
      </div> */}
      <Carousel/>
      <div className='contact-footer-compatment'>
      <Footer/>
      </div>
    
      </div>
  )
}

export default Contact
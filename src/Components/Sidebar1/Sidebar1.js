import React from 'react'
import "../../Styles/sidebar1.scss"
import Category from '../Sidebar/Category/Category';
import PriceRange from '../Sidebar/PriceRange/PriceRange';
import { IoMenuSharp } from "react-icons/io5";
import { MdOutlineMoveToInbox } from "react-icons/md";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import { IoCartOutline } from "react-icons/io5";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { TbLayoutNavbarExpand } from "react-icons/tb";
import { IoHome } from "react-icons/io5";
import { BsShop } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Modal from '../Modals/Modal';
import InboxSection from '../Sections/InboxSection';
import SentSection from '../Sections/SentSection';

const Sidebar1 = () => {
  return (
    <div className='sidebar1 shownav'>
      <header className='sidebar-header'>
        <div className='header-toggle'>
          <span><IoMenuSharp /></span>
        </div>
      </header>
      <nav className='aside-nav'>
        <div className='nav-icon'>
          <Link className='links'to="/">
            <IoHome className='links-icon'/>
            <span className='links-span'>Home</span>
          </Link>

          {/* <Link className='links activenav' to="/dashboard">
            <IoHome className='links-icon'/>
            <span className='links-span'>Dashboard</span>
          </Link> */}

        </div>
        <div className='links'>
          <InboxSection/>
        </div>
        <div className='links'>
          <SentSection/>
        </div>
        <Link className='links'to="/compose">
            <TfiWrite  className='links-icon'/>
            <span className='links-span'>Compose</span>
          </Link>
        <Link className='links'to="/cart">
            <IoCartOutline className='links-icon'/>
            <span className='links-span'>Rent</span>
          </Link>
          <Link className='links'to="/buy">
            <FaCartFlatbedSuitcase  className='links-icon'/>
            <span className='links-span'>Buy</span>
          </Link>
      </nav>
      <div className='test1'>
      </div>
      <div className='test2'>

      </div>
      {/* <Category/>
        <PriceRange/> */}
    </div>
  )
}

export default Sidebar1
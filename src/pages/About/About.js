import React from 'react';
import Topbar from '../../Components/Topbar/Topbar';
import Footer from '../../Components/Footer/Footer';
import "../../Styles/about.scss"
import Category from "../../Components/Sidebar/Category/Category";
import Location from "../../Components/Sidebar/Location/Location";
import PriceRange from '../../Components/Sidebar/PriceRange/PriceRange';

const About = () => {
  return (
    <div className='about-main'>
<Topbar/>
<div className='about-container'>
{/* <Category/>
<Location/>
<PriceRange/> */}
</div>
<Footer/>
    </div>
  )
}

export default About
import  { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CountDown from "../../Components/Countdown/CountDown";
import "../../Styles/home.scss";
import "../../Styles/button.scss";
import Footer from '../../Components/Footer/Footer';
import Topbar from '../../Components/Topbar/Topbar';
import Loader from '../../Components/Loader/Loader';
import Slider from '../../Components/Slider/Slider';
import Search from '../../Components/Search/Search';
import { IoSearch } from "react-icons/io5";
import HouseContextProvider, { HouseContext } from '../../Components/HouseContext/HouseContext';
import Properties from '../../Components/Properties/Properties';
import CountUp from '../../Components/CountUp/CountUp';
import BackToTop from '../../Components/BackToTop/BackToTop';
import Sidebar from '../../Components/Sidebar/Sidebar';
import {
  IoKeySharp, IoPersonSharp, IoLockClosed, IoPersonAdd,
  IoLocationSharp, IoLocationOutline,
  IoMailOpenSharp, IoLogInSharp, IoStarHalf
} from "react-icons/io5";
import { FaCity } from "react-icons/fa";
import { FaPeopleRoof, FaPeopleGroup, FaBuildingShield } from "react-icons/fa6";
const Home = () => {
  const [changebtn, setChangebtn] = useState(false)
  return (
    <>
      <Topbar />
      <Slider type="buy" />
      <HouseContextProvider>
        <div className='home-main'>
          <div className='countup-section'>
            <div className='count'>
              <FaPeopleRoof className='count-up' />
              <span className='count-up-color'>
              <CountUp  start={0} end={500}/>
              </span>
           
              <p className='count-up-span'> Happy Tennants</p>

            </div>
            <div className='count'>
              <FaPeopleGroup className='count-up' />
              <span className='count-up-color'>
              <CountUp  start={0} end={100}/>
              </span>
              <p className='count-up-span'> Landlords</p>
            </div>
            <div className='count'>
              < FaBuildingShield className='count-up' />
              <span className='count-up-color'>
              <CountUp  start={0} end={300}/>
              </span>
              <p className='count-up-span'> Properties</p>
            </div>
            <div className='count'>
              <FaCity className='count-up' />
              <span className='count-up-color'>
              <CountUp  start={0} end={10}/>
              </span>
              <p className='count-up-span'>Cities</p>
            </div>
          </div>
          <div className='home-content-top'>
            <h1><span>Rent, Buy Or Lease</span> Your Dream Home With Us </h1>
            <p>Imitation is the sincerest form of flattery, and any expert realtor will tell
              you the quickest way to to get started writing a good property description is to
              reference some of the best real estate description examples out there on the market today.
              That’s why we’ve dug deep into listings across some of the largest major cities in the
              United States to find some of the best home for sale description examples,
              as well as some of the worst. We reviewed each of the real estate property description
              examples and will give you our thoughts on what’s good and what’s bad, so you can apply
              the takeaways to your next property description.</p>
          </div>
          <div className='home-container'>
            {/* <Search /> */}
            <div className='home-content2'>
              {/* <div className='home-sidebar'>
                <Sidebar />
              </div> */}

              <div className='home-property'>
                <Properties />
              </div>


            </div>
            <div className='home-content3'>
              <p>Contataner 3</p>
              {/* <Loader/> */}
            </div>
          </div>
          <BackToTop />
        </div>
      </HouseContextProvider>
      <Footer />
    </>
  )
}

export default Home
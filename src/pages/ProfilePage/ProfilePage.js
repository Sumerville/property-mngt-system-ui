import React, {useState} from 'react'
import "../../Styles/profilepage.scss";
import Sidebar1 from '../../Components/Sidebar1/Sidebar1';
import ProfileFeed from '../../Components/ProfileFeed/ProfileFeed';
import Topbar from '../../Components/Topbar/Topbar';
import Footer from '../../Components/Footer/Footer';
import Modal from '../../Components/Modals/Modal';
import InboxModal from '../../Components/Modals/InboxModal';
import SentModal from '../../Components/Modals/SentModal';
import InboxSection from '../../Components/Sections/InboxSection';
const ProfilePage = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div>
      <Topbar />
      <div className='profile-main'>
        <div className='sidebar-comp'>
          <Sidebar1 />
        </div>
        <div className='profile-center-container'>
        <div className='profeed-container'>
        <ProfileFeed />
        </div>
         

          <Footer />
        </div>

        <div className='profile-right'>

        </div>
      </div>


    </div>
  )
}

export default ProfilePage
import React, {useState} from 'react'
import "../../Styles/Sections/inboxsection.scss";
import InboxModal from '../Modals/InboxModal';
import { MdOutlineMoveToInbox } from "react-icons/md";
const InboxSection = () => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <div>
            <div className='inbox-contents' onClick={()=> {setOpenModal(true)}}>
                <p className='inbox-anchor' ><MdOutlineMoveToInbox/></p>
                <span className='inbox-span'>Inbox</span>
            </div>
           {openModal && <InboxModal closeModal={setOpenModal}/>}
        </div>
    )
}

export default InboxSection
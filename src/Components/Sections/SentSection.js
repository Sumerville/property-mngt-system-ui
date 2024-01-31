import React, {useState} from 'react'
import "../../Styles/Sections/sentsection.scss"
import SentModal from '../Modals/SentModal'
import { IoPaperPlaneOutline } from "react-icons/io5";
const SentSection = () => {
  const [openModal, setOpenModal] = useState(false)
    return (
        <div>
            <div className='sent-contents' onClick={()=> {setOpenModal(true)}}>
                <p className='sent-anchor'> <IoPaperPlaneOutline/></p>
                <span className='sent-span'>Sent</span>
            </div>
           {openModal && <SentModal closeModal={setOpenModal}/>}
        </div>
    )
}

export default SentSection
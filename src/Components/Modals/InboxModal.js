import React, {useState} from 'react'
import "../../Styles/Modals/inboxmodal.scss";
import { IoChevronDown, IoChevronUp, IoSearch } from "react-icons/io5";
const messages = [
    {
        sender: "Uche Agbo",
        title: "House rent reminder",
        msg: "The perfect piece of Portland history is in a dream location and surrounded by nature! This 110-year-old home has been meticulously cared for + updated top to bottom with preserved timestamps at every turn including original oak hardwoods, doors and clawfoot tub. Full guest quarters or AirB&B in basement w/ separate entrance. New multi-level lighted trex deck w/ vined pergola and gorgeous views of Lower Macleay Park & Balch Creek. Walkable to trendy NW 23rd, parks, schools & more!",
        date: "2nd Jan, 2024"
    },
    {
        sender: "Uche Agbo",
        title: "House rent reminder",
        msg: "The perfect piece of Portland history is in a dream location and surrounded by nature! This 110-year-old home has been meticulously cared for + updated top to bottom with preserved timestamps at every turn including original oak hardwoods, doors and clawfoot tub. Full guest quarters or AirB&B in basement w/ separate entrance. New multi-level lighted trex deck w/ vined pergola and gorgeous views of Lower Macleay Park & Balch Creek. Walkable to trendy NW 23rd, parks, schools & more!",
        date: "2nd Jan, 2024"
    },
    {
        sender: "Uche Agbo",
        title: "Have seen the Part payment",
        msg: "The perfect piece of Portland history is in a dream location and surrounded by nature! This 110-year-old home has been meticulously cared for + updated top to bottom with preserved timestamps at every turn including original oak hardwoods, doors and clawfoot tub. Full guest quarters or AirB&B in basement w/ separate entrance. New multi-level lighted trex deck w/ vined pergola and gorgeous views of Lower Macleay Park & Balch Creek. Walkable to trendy NW 23rd, parks, schools & more!",
        date: "2nd Jan, 2024"
    },
    {
        sender: "Uche Agbo",
        title: "Am Still expecting the balance",
        msg: "The perfect piece of Portland history is in a dream location and surrounded by nature! This 110-year-old home has been meticulously cared for + updated top to bottom with preserved timestamps at every turn including original oak hardwoods, doors and clawfoot tub. Full guest quarters or AirB&B in basement w/ separate entrance. New multi-level lighted trex deck w/ vined pergola and gorgeous views of Lower Macleay Park & Balch Creek. Walkable to trendy NW 23rd, parks, schools & more!",
        date: "2nd Jan, 2024"
    },
    {
        sender: "Uche Agbo",
        title: "House rent reminder",
        msg: "The perfect piece of Portland history is in a dream location and surrounded by nature! This 110-year-old home has been meticulously cared for + updated top to bottom with preserved timestamps at every turn including original oak hardwoods, doors and clawfoot tub. Full guest quarters or AirB&B in basement w/ separate entrance. New multi-level lighted trex deck w/ vined pergola and gorgeous views of Lower Macleay Park & Balch Creek. Walkable to trendy NW 23rd, parks, schools & more!",
        date: "2nd Jan, 2024"
    },
    {
        sender: "Uche Agbo",
        title: "House rent reminder",
        msg: "The perfect piece of Portland history is in a dream location and surrounded by nature! This 110-year-old home has been meticulously cared for + updated top to bottom with preserved timestamps at every turn including original oak hardwoods, doors and clawfoot tub. Full guest quarters or AirB&B in basement w/ separate entrance. New multi-level lighted trex deck w/ vined pergola and gorgeous views of Lower Macleay Park & Balch Creek. Walkable to trendy NW 23rd, parks, schools & more!",
        date: "2nd Jan, 2024"
    },
    {
        sender: "Uche Agbo",
        title: "House rent reminder",
        msg: "The perfect piece of Portland history is in a dream location and surrounded by nature! This 110-year-old home has been meticulously cared for + updated top to bottom with preserved timestamps at every turn including original oak hardwoods, doors and clawfoot tub. Full guest quarters or AirB&B in basement w/ separate entrance. New multi-level lighted trex deck w/ vined pergola and gorgeous views of Lower Macleay Park & Balch Creek. Walkable to trendy NW 23rd, parks, schools & more!",
        date: "2nd Jan, 2024"
    },
    {
        sender: "Uche Agbo",
        title: "House rent reminder",
        msg: "The perfect piece of Portland history is in a dream location and surrounded by nature! This 110-year-old home has been meticulously cared for + updated top to bottom with preserved timestamps at every turn including original oak hardwoods, doors and clawfoot tub. Full guest quarters or AirB&B in basement w/ separate entrance. New multi-level lighted trex deck w/ vined pergola and gorgeous views of Lower Macleay Park & Balch Creek. Walkable to trendy NW 23rd, parks, schools & more!",
        date: "2nd Jan, 2024"
    },
]

const InboxModal = ({ closeModal }) => {
    const [selected, setSelected] = useState(null);
    const toggle = (id)=>{
        if(selected === id){
return setSelected(null)
        }
        setSelected(id)
    }
    return (
        <div className='inbox-modal-background'>
            <div className='inbox-modal-container'>
                <button className='btn-2' onClick={() => closeModal(false)}>Close</button>
                <div className='modal-title'>
                    <p>User Inbox</p>
                </div>
                <div className='modal-body'>
                    <div className='message-container'>
                        {messages.map((message, id) => {
                            return (
                                <div className='message-body'>
                                  <div  onClick={()=> toggle(id)} className='message-span'>
                                    <p>{message.title}</p>
                                    <span className="more-less">{selected ===id ? <IoChevronUp />:<IoChevronDown />}</span>
                                    </div>
                                    <div className={selected === id ? 'msg-contents show':'msg-contents'}>
                                        <li className='msg-sender'>Sender:{message.sender} </li>
                                        <li>{message.msg}</li>

                                        <li className='msg-time'>{message.date}</li>
                                    </div>

                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default InboxModal
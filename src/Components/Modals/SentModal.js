import React, { useState } from 'react';
import "../../Styles/Modals/sentmodal.scss";
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
const SentModal = ({ closeModal }) => {
    const [selected, setSelected] = useState(null);
    const toggle = (id) => {
        if (selected === id) {
            return setSelected(null)
        }
        setSelected(id)
    }
    return (
        <div className='sent-modal-background'>
            <div className='sent-modal-container'>
                <button className='btn-1' onClick={() => closeModal(false)}>Close</button>
                <div className='sent-modal-title'>
                    <p>User Sent Messages</p>
                </div>
                <div className='sent-modal-body'>
                    <div className='sent-message-container'>
                        {messages.map((message, id) => {
                            return (
                                <div className='sent-message-body'>
                                    <div  onClick={()=> toggle(id)} className='sent-msg-span'>
                                    <p>{message.title}</p>
                                    <span className="more-less-sent">{selected ===id ? <IoChevronUp />:<IoChevronDown />}</span>
                                    </div>
                                
                                    <div className={selected === id ? 'sent-msg-contents show':'sent-msg-contents'}>
                                        <li className='sent-msg-sender'>Sender:{message.sender}</li>
                                        <li>{message.msg}</li>
                                        <li className='sent-msg-time'>{message.date}</li>
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

export default SentModal
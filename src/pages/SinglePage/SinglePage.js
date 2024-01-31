
import React, { useState, useEffect, useContext } from 'react'
import Topbar from '../../Components/Topbar/Topbar';
import Footer from '../../Components/Footer/Footer';
import "../../Styles/singlepage.scss";
import { HouseContext } from '../../Components/HouseContext/HouseContext';
import { Data } from '../../assets/Data/Data';
import { useParams } from 'react-router-dom';
import Register from '../../Components/Forms/Register';
import Form1 from '../../Components/Forms/Form1';
import { IoChevronDown, IoChevronUp, IoSearch, IoBedOutline, IoLocation } from "react-icons/io5";
import { TbBath, TbSmartHome, TbCurrencyNaira, TbViewportWide } from "react-icons/tb";
import Dropdown from '../../Components/Dropdown/Dropdown';
import StarRating from '../../Components/StarRating/StarRating';
const ParagraphStyle ={
    webkitLineClamp: 2,
    webkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box'
 }

const SinglePage = () => {
    const { id } = useParams()
    const house = Data.find((house) => {
        return house.id === (id);

    });


const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='singlepage-main'>
            <Topbar />
            <div className='singlepage-container'>
                <div className='singlepage-left'>
                    <div className='left-col'>
                        <div className='left-col-img'>
                            <img className='single-img' src={house.image} />
                        </div>
                        <div className='left-col-btm'>
                            <div className='col'>
                                <ul>
                                    <del><TbCurrencyNaira className='single-icons' />{house.price}</del>
                                    <li><TbCurrencyNaira className='single-icons' />{house.newPrice}</li>
                                </ul>
                                <ul>
                                    <li><TbViewportWide className='single-icons' />{house.surface}</li>
                                    <li><IoLocation className='single-icons' />{house.address}</li>
                                </ul>
                                <ul>
                                    <li><IoBedOutline className='single-icons' />{house.bedRooms}</li>
                                    <li><TbBath className='single-icons' />{house.bathRooms}</li>
                                </ul>
                            </div>
                            <div className='col'>
                                <ul>
                                    <li className='single-icons'><StarRating/></li>
                                    <li>{house.reviews}</li>
                                </ul>

                                <ul>
                                    <li><IoLocation className='single-icons' />{house.location}</li>

                                </ul>
                            </div>
                            <ul>
                                <li className='cut-off-text'>{house.desc}</li>
                                <input type='checkbox' className='expand-btn'/>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='singlepage-right'>
                    {/* <Register/> */}
                    <h2 className='single-title'>{`Category:  ${house.title}`}</h2>
                   
                        <h1 className='single-landlord'>{`Landlord:  ${house.landlord}`}</h1>
                    <Form1 />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SinglePage
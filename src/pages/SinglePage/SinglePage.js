
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
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import ReactWhatsapp from 'react-whatsapp';
import axios from "axios";
import Preloader from '../../Components/Preloader/Preloader';
const ParagraphStyle ={
    webkitLineClamp: 2,
    webkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box'
 }

const SinglePage = () => {
    const { id } = useParams()
    // const house = Data.find((house) => {
    //     return house.id === (id);

    // });

    const [buildings, setbuildings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filteredData, setFilteredData] = useState([]);
const [isOpen, setIsOpen] = useState(false)
// useEffect(()=>{
//     try {
//       setLoading(true)
//       const res = axios.get(`http://localhost:5001/api/v1/buildings/${id}/building`).then((result)=>{
//         if(result.data){
//           setbuildings(result.data)
//           setFilteredData(result.data)
//           setLoading(false)
//         }
//      console.log(result.data)
//       })
//     } catch (err) {
//       console.log(err)
//       setLoading(false)
//     }
//     },[id]);

    useEffect(()=>{
        setLoading(true)
        try {
          const res = axios.get(`http://localhost:5001/api/v1/buildings/${id}/building`).then((result)=>{
            let info = result.data;
           if(info){
                setbuildings(info)
                setFilteredData(info)
                setLoading(false)
           }
         
            console.log(info)
          })
        } catch (error) {
          
        }
      },[])
    return (
        <div className='singlepage-main'>
            <Topbar />
            <div className='singlepage-container'>
                <div className='singlepage-left'>
                    <div className='left-col'>
                        <div className='left-col-img'>
                            <img className='single-img' src={buildings.pix} />
                        </div>
                        <div className='left-col-btm'>
                            <div className='col'>
                                <ul>
                                    <del><TbCurrencyNaira className='single-icons' />{buildings.oldPrice}</del>
                                    <li><TbCurrencyNaira className='single-icons' />{buildings.newPrice}</li>
                                </ul>
                                <ul>
                                    <li><TbViewportWide className='single-icons' />{buildings.buildingSize}</li>
                                    <li><IoLocation className='single-icons' />{buildings.address}</li>
                                </ul>
                                <ul>
                                    <li><IoBedOutline className='single-icons' />{buildings.bedRoom}</li>
                                    <li><TbBath className='single-icons' />{buildings.bathRoom}</li>
                                </ul>
                            </div>
                            <div className='col'>
                                {/* <ul>
                                    <li className='single-icons'><StarRating/></li>
                                    <li>{buildings.reviews}</li>
                                </ul> */}

                                <ul>
                                    <li><IoLocation className='single-icons' />{buildings.situated}</li>

                                </ul>
                            </div>
                            <ul>
                                <li className='cut-off-text'>{buildings.desc}</li>
                                <input type='checkbox' className='expand-btn'/>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='singlepage-right'>
                    {/* <Register/> */}
                    <h2 className='single-title'> {buildings.title}</h2>
{/*                    
                        <h1 className='single-landlord'>{buildings.branchId.landlordName}</h1> */}
                    <Form1 />
                    <div className=''>
                    <ReactWhatsapp number="+234 8033149019" className='whatsapp'>
                     <IoLogoWhatsapp className='whatsapp-icon'/>
                     <span className='whatsaap-span'>Reach Agent on WhatsApp</span>
                    </ReactWhatsapp>
                    
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SinglePage

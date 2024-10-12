import  { useContext, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { HouseContext } from '../HouseContext/HouseContext';
import "../../Styles/properties.scss";
import { GiHotSurface } from "react-icons/gi";
import Sidebar from '../Sidebar/Sidebar';
import { IoChevronDown, IoChevronUp, IoSearch, IoBedOutline, IoLocation } from "react-icons/io5";
import { TbBath, TbSmartHome, TbCurrencyNaira, TbViewportWide } from "react-icons/tb";
import Searchbar from '../Search/Searchbar';
import axios from "axios";
import Preloader from '../../Components/Preloader/Preloader';
function Properties() {
    const { city, setCity, cities, houses } = useContext(HouseContext);
    // console.log(houses)
    const [dropdown, setDropdown] = useState(false);
    const [dropbtn, setDropbtn] = useState(false);
    const [buildings, setbuildings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filteredData, setFilteredData] = useState([]);
    const togglefilter = () => {
        setDropdown(!dropdown)
        setDropbtn(!dropbtn)
    }

  
    useEffect(()=>{
        try {
          setLoading(true)
          const res = axios.get("http://localhost:5001/api/v1/buildings/allBuildings").then((result)=>{
            if(result.data){
              setbuildings(result.data)
              setFilteredData(result.data)
              setLoading(false)
            }
         console.log(result.data)
          })
        } catch (err) {
          console.log(err)
          setLoading(false)
        }
        },[]);
    
        const handleFilter = (value) => {
          const res = filteredData.filter(f => f.title.toLowerCase().includes(value)
          ) 
          setbuildings(res)
      }

    return (
        <div className='property-main'>
            {/* <div className='property-side-bar'>
                <Sidebar />
            </div> */}
            <div className='property-grid-container'>
         
                <div className='property-grid-search'>
                  
                    <div className='property-grid-search-L'>
                    <div className='search-icon-P'><IoSearch className='search-icon-p' /></div>
                        <input 
                        placeholder='Search Building'
                        onChange={e => handleFilter(e.target.value)}
                        />
                    </div>
                    {/* <Searchbar/> */}
                    <div className='property-grid-search-R'>
                        <div> <div className='header-cont'>
                            <h4 className='header-cont-header'>Location</h4>
                            {dropbtn ? (<IoChevronUp className='chevron-down' onClick={togglefilter} />)
                                : <IoChevronDown className='chevron-down' onClick={togglefilter} />}
                            </div>
                            {dropdown ? (
                                
                                <div className='location-content-P'>
                                    {cities.map((city, index)=>{
                                        return(
                                            <ul key={index}>
                                      <li>{city}</li>
                                            </ul>
                                         
                                        )
                                    })}
                                </div>
                            ) : ""

                            }
                        </div>
                        
                    </div>
                </div>
                 {
                    loading?(
                        <dv>
                            <Preloader/>
                        </dv>
                    ):(
                        <div className='property-grid'>
                        {buildings.map((house, index) => {
                            return (
                                <div className='house-grid-content' key={index}>
                                    <div className='house-grid-container'>
                                        <div className='house-img-cont'>
                                            <div className='loc-title'>
                                                <li>{house.title}</li>
                                                <li>{house.location}</li>
                                            <Link to={`/single-page/${house?._id}`} className='single-id'><button className='btn-b-r'>Rent</button></Link>    
                                            </div>
                                            <img src={house.pix} className='house-img'alt='Property' />
                                        </div>
                                        <div className='house-contents'>
                                            <ul> <li>{house.branchId.landlordName}</li></ul>
                                            <div className='content-flex'>
                                                <ul>
                                                    <del className='old-price'>< TbCurrencyNaira /> {house.oldPrice}</del>
                                                    <li>< TbCurrencyNaira /> {house.newPrice}</li>
                                                </ul>
                                                <ul>
                                                    <li><IoLocation /> {house.address}</li>
                                                </ul>
                                                <ul>
                                                    <li><TbBath /> {house.bathRoom}</li>
                                                    <li>< IoBedOutline /> {house.bedRoom}</li>
    
                                                </ul>
                                            </div>
                                            <ul className='content-flex'>
                                                <li>{house.reviews}</li>
                                                <li><TbViewportWide /> {house.buildingSize}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    )
                 }
             
            </div>
        </div>
    )
}

export default Properties
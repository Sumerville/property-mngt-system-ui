
import React, { useContext, useState } from 'react'
import { IoChevronDown, IoChevronUp, IoSearch, IoLocation } from "react-icons/io5";
import { HouseContext } from '../HouseContext/HouseContext';
import "../../Styles/dropdown.scss"
function CityDropdown() {
  const { city, setCity, cities } = useContext(HouseContext);
  console.log(cities)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='city-dropdown'>
      <div className='city-drop-container' onClick={() => setIsOpen(!isOpen)}>
        <div><IoLocation className='location-icon' /> {city}</div>
        {/* <div>Select City</div> */}
        {isOpen ? (<IoChevronUp className='search-arrow' />) : (<IoChevronDown className='search-arrow' />)}
      </div>
      <div className='dropdown-menu-city'>
        {/* {cities.map((city, index)=>{
          return(
            <ul key={index} onClick={()=>setCity(city)}>
              <li>{city}</li>
            </ul>
          )
        })} */}
      </div>
    </div>
  )
}

export default CityDropdown
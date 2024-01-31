import React, {useState, useEffect, useContext} from 'react'
import "../../../Styles/SideBar/location.scss";
import { HouseContext } from '../../HouseContext/HouseContext';
const Location = () => {
  const { city, setCity, cities } = useContext(HouseContext);
  console.log(cities)
  return (
    <div  className='location-main'>
      <h2 className='location-title'>Location</h2>
      {cities.map((city, index)=>{
        return(
          <div key={index} className='location-items'>
            <ul className='list-content'>
              <li>{city}</li>
              <span className='ghost-span'></span>
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Location
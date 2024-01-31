import {useState, useEffect} from 'react'
import "../../Styles/search.scss"
const Searchbar = () => {
  return (
    <div className='searchbar'>
 <div className='searchbar-item'>
    <select>
        <option>Select Location</option>
        <option>Enugu</option>
    </select>
 </div>
 <div className='searchbar-item'>
 <select>
        <option>Select Location</option>
        <option>Enugu</option>
    </select>
 </div>
 <div className='searchbar-item'>
 {/* <select>
        <option>Select Location</option>
        <option>Enugu</option>
        <option>Enugu</option>
        <option>Enugu</option>
        <option>Enugu</option>
        <option>Enugu</option>
    </select> */}
 </div>
 <div className='searchbar-item'>
    <button>Search</button>
 </div>
    </div>
  )
}

export default Searchbar
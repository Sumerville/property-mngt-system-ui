import React, { useContext } from 'react'
import CityDropdown from '../Dropdown/CityDropdown';
import CategoryDropdown from '../Dropdown/CategoryDropdown';
import PriceRangeDropdown from '../Dropdown/PriceRangeDropdown';
import { IoSearch } from "react-icons/io5";
import "../../Styles/search.scss"
import { HouseContext } from '../HouseContext/HouseContext';
function Search() {
    const{houses} = useContext(HouseContext)
    // console.log(houses)
  return (
    <div className='search-container'>
<CityDropdown/>
<CategoryDropdown/>
<PriceRangeDropdown/>
<button className='btn-2'><IoSearch/></button>
    </div>
  )
}

export default Search
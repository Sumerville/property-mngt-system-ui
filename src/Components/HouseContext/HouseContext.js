import React, {useState, useEffect, createContext} from 'react';
import {Data} from "../../assets/Data/Data"

export const HouseContext = createContext();

const HouseContextProvider = ({children}) => {
    const [houses, setHouses] = useState(Data);
    const [city, setCity] = useState('')
    const [category, setCategory] = useState('category type(any)')
    const [cities, setCities] = useState([]);
    const [prices, setPrices] = useState([]);
    const [types, setTypes] = useState([]);
    const [price, setPrice] = useState('price range (any)');
    const [loading, setLoading] = useState(false);
    // console.log(houses)

    useEffect(()=>{
      const allCities =houses.map((house)=>{
        return house.location;
      });
      // console.log(allCities)
      const uniqueCities =[ ... new Set(allCities)];
      // console.log(uniqueCities)
      setCities(uniqueCities)
 
    },[]); 

    useEffect(()=>{
      const allTypes = houses.map((type)=>{
        return type.type;
      });
      console.log(allTypes)
      const uniqueTypes =[ ... new Set(allTypes)];
      console.log(uniqueTypes)
      setTypes(uniqueTypes)
 
    },[]); 

  return ( 
    <HouseContext.Provider value={{
houses,
city,
cities,
types,
setTypes,
setCity,
category,
setCategory,
price,
setPrice,
loading,
    }}>
  {children}
    </HouseContext.Provider>
  )
}

export default HouseContextProvider
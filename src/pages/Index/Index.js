import { useEffect, useState, useContext } from 'react';
import Slider from '../../Components/Slider/Slider';
import "../../Styles/index.scss";
import Topbar from '../../Components/Topbar/Topbar';
import Footer from '../../Components/Footer/Footer';
import Spinner from '../../Components/Spinner/Spinner';
import Loader from '../../Components/Loader/Loader';
import Preloader from '../../Components/Preloader/Preloader';
import img1 from "../../assets/images/img15.jpg"
import img2 from "../../assets/images/img34.jpg"
import img3 from "../../assets/images/img17.jpg"
import img4 from "../../assets/images/img19.jpg"
import { HouseContext } from '../../Components/HouseContext/HouseContext';
import { Link } from 'react-router-dom';
// import { Data } from "../../assets/Data/Data"
import { TbCurrencyNaira } from "react-icons/tb";
import { IoChevronDown, IoChevronUp, IoSearch } from "react-icons/io5";
import BackToTop from '../../Components/BackToTop/BackToTop';
import axios from "axios";
const Index = () => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropbtn, setDropbtn] = useState(false);
  const [dropbtn1, setDropbtn1] = useState(false);
  const [dropbtn2, setDropbtn2] = useState(false);
  // const [category, setCategory] = useState(Data);
  const [buildings, setbuildings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  
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
      const res = filteredData.filter(f => f.branchId.landlordName.toLowerCase().includes(value)
      ) 
      setbuildings(res)
  }

  // const {types } = useContext(HouseContext);
  const togglefilter = () => {
    setDropdown(!dropdown)
    setDropbtn(!dropbtn)
  }

  const togglefilter1 = () => {
    setDropdown1(!dropdown1)
    setDropbtn1(!dropbtn1)
  }

  const togglefilter2 = () => {
    setDropdown2(!dropdown2)
    setDropbtn2(!dropbtn2)
  }

//   useEffect(()=>{
//     const allTypes = Data.map((types)=>{
//       return types.type
//     });
//   const uniqueTypes = [...new Set(allTypes)];
//   setTypes(uniqueTypes)
//   console.log(uniqueTypes)

//   const allCats = Data.map((cats)=>{
//     return cats.title
//   });
// const uniqueCats = [...new Set(allCats)];
// setCategory(uniqueCats)
// console.log(uniqueCats)
//   },[]);
  return (
    <>
      <Topbar />
    
        <Slider type ="rent"/>
      <div className='home-main-container'>

        <div className='right-top'>

          <div className='input-container'>
            <div className='search-icon-cont'><IoSearch className='search-icon' /></div>

            <input className='search-input' />

          </div>

          <div className='right-top-header'>
            <h4 className='index-filters'>Filters</h4>
            <div className='header-bottom'>
              <div className='col-1'>Category{dropbtn ? (<IoChevronUp className='chevron-down' onClick={togglefilter} />)
                : <IoChevronDown className='chevron-down' onClick={togglefilter} />}

                {dropdown ? (
                  <div>
                 
                  </div>
                
                ) : ""

                }

              </div>
              <div className='col-2'>City{dropbtn1 ? (<IoChevronUp className='chevron-down' onClick={togglefilter1} />)
                : <IoChevronDown className='chevron-down' onClick={togglefilter1} />}
                {dropdown1 ? (
                  <ul>
                    <li>Abuja</li>
                    <li>Asaba</li>
                    <li>Enugu</li>
                    <li>Lagos</li>
                    <li>Porth Harcourt</li>
                  </ul>
                ) : ""

                }
              </div>
              <div className='col-3'>Landlord{dropbtn2 ? (<IoChevronUp className='chevron-down' onClick={togglefilter2} />)
                : <IoChevronDown className='chevron-down' onClick={togglefilter2} />}
                {dropdown2 ? (
                  <ul>
                    {/* <li>{types}</li> */}
                  
                  </ul>
                ) : ""

                }
              </div>
            </div>
          </div>
        </div>
        <div className='home-main-right'>

     {
      loading?(<div>
        <Preloader/>
      </div>):(
             <div className='home-right-container'>
             {buildings.map((info, index) => {
 
              //  const { image, title, price, newPrice, location, landlord, img, star, bedRooms, bathRooms, address,surface } = info;
 
               return (
                 <div key={index} className='grid-card'>
                   <div className='bldg-particulars'>
                     <ul className='lsits'>
                       <li>{info.location}</li>
                       <li>{info.title}</li>
                       <li>{info.branchId.landlordName}</li>
                       <Link to={`/single-page/${info?._id}`}>
                       <li><button className='btn-2'>Buy</button></li>
                       </Link>
                   
                     </ul>
                   </div>
                   <div className='img-box'>
                     <img src={info.pix} />
                   </div>
                   <div className='price-container'>
                     <div className='price'>
                       <p className='naira'><TbCurrencyNaira />{info.newPrice}</p>
                       <div className='new-price-cont'>
                         <div className='new-price'>
                           <h4> <TbCurrencyNaira />{info.oldPrice}</h4>
                         </div>
                         <div className='surface'>
                           <li>{info.situated}</li>
                         </div>
                       </div>
 
                     </div>
 
                   </div>
                 </div>
               )
             })}
           </div>
      )
     }
        </div>
         {/* <Preloader/> */}
        {/* <Spinner/> */}
        {/* <Loader/> */}
      </div>
      <BackToTop/>
      <div className='footer-container'>
        <div className='footer-container'>
          <Footer />
        </div>

      </div>
    </>
  )
}

export default Index
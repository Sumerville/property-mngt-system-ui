import React, {useState, useEffect} from 'react'
import { IoChevronDown, IoChevronUp, IoSearch, IoLocation, IoArrowUpCircleOutline } from "react-icons/io5";
import { PiCaretDoubleUpBold } from "react-icons/pi";
import "../../Styles/backtotop.scss"
const BackToTop = () => {
    const [BackToTopBtn, setBactToTopBtn] = useState(false);
    useEffect(()=>{
window.addEventListener("scroll", ()=>{

    if(window.scrollY > 100){
        setBactToTopBtn(true)
    }else{
        setBactToTopBtn(false)   
    }
})
    },[])
 const scrollUp =()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
 }

  return (
    <div>
   {BackToTopBtn &&(
    <ul className='back-to-top-btn' onClick={scrollUp}>
       <IoArrowUpCircleOutline/>
        </ul>
   )}
    </div>
  )
}

export default BackToTop
import  {useEffect, useState}from 'react';
import "../../Styles/Carousel/carousel.scss";
import img1 from "../../assets/images/house1.jpg";
import img2 from "../../assets/images/house2.jpg";
import img3 from "../../assets/images/house3.jpg";
import img4 from "../../assets/images/house4.jpg";
import img5 from "../../assets/images/house5.jpg";
import img6 from "../../assets/images/house6.jpg";
import img7 from "../../assets/images/house7.jpg";
import img8 from "../../assets/images/house8.jpg";
const data =[
{
    id:"1",
    img:img1,
    heading:"Carousel 1",
    desc:"The perfect piece of Portland history is in a dream location and surrounded by nature! This 110-year-old home has been meticulously cared for + updated top to bottom with preserved timestamps at every turn including original oak hardwoods, doors and clawfoot tub. Full guest quarters or AirB&B in basement w/ separate entrance. New multi-level lighted trex deck w/ vined pergola and gorgeous views of Lower Macleay Park & Balch Creek. Walkable to trendy NW 23rd, parks, schools & more!"
},
{
    id:"2",
    img:img2,
    heading:"Carousel 2",
    desc:"The perfect piece of Portland history is in a dream location and surrounded by nature! This 110-year-old home has been meticulously cared for + updated top to bottom with preserved timestamps at every turn including original oak hardwoods, doors and clawfoot tub. Full guest quarters or AirB&B in basement w/ separate entrance. New multi-level lighted trex deck w/ vined pergola and gorgeous views of Lower Macleay Park & Balch Creek. Walkable to trendy NW 23rd, parks, schools & more!"
},
{
    id:"3",
    img:img3,
    heading:"Carousel 3",
    desc:"The perfect piece of Portland history is in a dream location and surrounded by nature! This 110-year-old home has been meticulously cared for + updated top to bottom with preserved timestamps at every turn including original oak hardwoods, doors and clawfoot tub. Full guest quarters or AirB&B in basement w/ separate entrance. New multi-level lighted trex deck w/ vined pergola and gorgeous views of Lower Macleay Park & Balch Creek. Walkable to trendy NW 23rd, parks, schools & more!"
},
{
    id:"4",
    img:img4,
    heading:"Carousel 4",
    desc:"The perfect piece of Portland history is in a dream location and surrounded by nature! This 110-year-old home has been meticulously cared for + updated top to bottom with preserved timestamps at every turn including original oak hardwoods, doors and clawfoot tub. Full guest quarters or AirB&B in basement w/ separate entrance. New multi-level lighted trex deck w/ vined pergola and gorgeous views of Lower Macleay Park & Balch Creek. Walkable to trendy NW 23rd, parks, schools & more!"
},
{
    id:"5",
    img:img5,
    heading:"Carousel 5",
    desc:"The perfect piece of Portland history is in a dream location and surrounded by nature! This 110-year-old home has been meticulously cared for + updated top to bottom with preserved timestamps at every turn including original oak hardwoods, doors and clawfoot tub. Full guest quarters or AirB&B in basement w/ separate entrance. New multi-level lighted trex deck w/ vined pergola and gorgeous views of Lower Macleay Park & Balch Creek. Walkable to trendy NW 23rd, parks, schools & more!"
},
{
    id:"6",
    img:img6,
    heading:"Carousel 6",
    desc:"The perfect piece of Portland history is in a dream location and surrounded by nature! This 110-year-old home has been meticulously cared for + updated top to bottom with preserved timestamps at every turn including original oak hardwoods, doors and clawfoot tub. Full guest quarters or AirB&B in basement w/ separate entrance. New multi-level lighted trex deck w/ vined pergola and gorgeous views of Lower Macleay Park & Balch Creek. Walkable to trendy NW 23rd, parks, schools & more!"
},
{
    id:"7",
    img:img7,
    heading:"Carousel 7",
    desc:"The perfect piece of Portland history is in a dream location and surrounded by nature! This 110-year-old home has been meticulously cared for + updated top to bottom with preserved timestamps at every turn including original oak hardwoods, doors and clawfoot tub. Full guest quarters or AirB&B in basement w/ separate entrance. New multi-level lighted trex deck w/ vined pergola and gorgeous views of Lower Macleay Park & Balch Creek. Walkable to trendy NW 23rd, parks, schools & more!"
},

{
    id:"8",
    img:img8,
    heading:"Carousel 8",
    desc:"The perfect piece of Portland history is in a dream location and surrounded by nature! This 110-year-old home has been meticulously cared for + updated top to bottom with preserved timestamps at every turn including original oak hardwoods, doors and clawfoot tub. Full guest quarters or AirB&B in basement w/ separate entrance. New multi-level lighted trex deck w/ vined pergola and gorgeous views of Lower Macleay Park & Balch Creek. Walkable to trendy NW 23rd, parks, schools & more!"
},
]
console.log(data)
const Carousel = () => {
   
  
  return (
    <div className='carousel-container'>
<div className='carousel-slide current'>
    {data.map((slide, index)=>{
        return(
            <div className='caro-slides' key={index}>
                <div className='caro-img' style={{img1}}>
                    <img src={slide.img}/>
                </div>
            <div className='caro-content'>
                <h2>{slide.heading}</h2>
                <p>{slide.desc}</p>
            </div>
        </div>
        )
    })}
  
</div>

    </div>
  )
}

export default Carousel
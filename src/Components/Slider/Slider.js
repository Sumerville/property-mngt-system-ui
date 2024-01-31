import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "../../assets/Data/Data";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { TbCurrencyNaira } from "react-icons/tb"
import { Data } from "../../assets/Data/Data";
import { useNavigate } from 'react-router-dom';
import "../../Styles/button.scss";
import "../../Styles/slider.scss"
const Slider = ({type}) => {
 const [changebtn, setChangebtn] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = Data.length;
    const autoScroll = true
    let sliderInterval;
    const sliderTime = 5000
    const navigate = useNavigate();

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
    };
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
    };
    useEffect(() => {
        setCurrentSlide(0)
    }, [])

    useEffect(() => {
if(autoScroll){
    const auto =()=>{
        sliderInterval = setInterval(nextSlide, sliderTime)
    }
    auto()
}
return()=>clearInterval(sliderInterval)
    }, [currentSlide, sliderTime, autoScroll]);
    return (
        <div className='slider'>
            <div className='arrow-container'>
                <div>
                    <AiOutlineArrowLeft className='previous arrow'
                        onClick={prevSlide}
                    />
                </div>
                <div>
                    <AiOutlineArrowRight className='next arrow'
                        onClick={nextSlide}
                    />
                </div>

            </div>
            {type ==="buy"? <Link to="/listing">
           <div className='slider-btn'>
           <button className='btn-3'
             >Buy</button> 
           </div>
           </Link>: <Link to="/">
           <div className='slider-btn'>
           <button className='btn-3'
             >Rent</button> 
           </div>
           </Link>}
            {Data.map((slide, index) => {
                const { image, title, price, location } = slide
                return (
                    <div key={index} className={index === currentSlide ? " slide current" : " slide"}>
                        {index === currentSlide && (
                            <>
                            <Link to={`/single-page/${slide?.id}`}>
                            <img src={image} alt="pix" className='slider-img' />
                            </Link>
                              
                             
                                <div className='slide-content '>
                                    <span className='span1'></span>
                                    <span className='span2'></span>
                                    <span className='span3'></span>
                                    <span className='span4'></span>
                                    <h4 className='price'><TbCurrencyNaira className='currency'/>{price}</h4>
                                    <h2 className='title'>{title}</h2>
                                    <p className='location'>{location}</p>
                                    {/* <div className='slider-btn'>
                                    <button className='btn-2'
                                        onClick={() => navigate("/page")}
                                    >Explore</button> 
                                    </div>  */}
                                    
                                    </div>

                                 
                                  
                            </>
                        )}
                                  
                    </div>
                )
            })}
        
        </div>
    )
}

export default Slider
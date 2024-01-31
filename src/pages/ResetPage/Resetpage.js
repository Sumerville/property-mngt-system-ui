import { useState } from "react";
import PasswordReset from "../../Components/Modals/PasswordReset";
import "../../Styles/Modals/pwmodal.scss";
import Topbar from "../../Components/Topbar/Topbar";
import Footer from "../../Components/Footer/Footer";
import "../../Styles/Passreset/reset.scss"

const Resetpage = () => {
    const [openModal, setOpenModal] = useState(false)
  return (
    <div>
        <Topbar/>
        <div className="reset-main">
            <div className="reset-left">
<p>The perfect piece of Portland history is in a dream location and 
    surrounded by nature! This 110-year-old home has been meticulously cared for + 
    updated top to bottom with preserved timestamps at every turn including original oak hardwoods, 
    doors and clawfoot tub. Full guest quarters or AirB&B in basement w/ separate entrance. New multi-level 
    lighted trex deck w/ vined pergola and gorgeous views of Lower Macleay Park & Balch Creek.
     Walkable to trendy NW 23rd, parks, schools & more!"
    </p>

    <p>The perfect piece of Portland history is in a dream location and 
    surrounded by nature! This 110-year-old home has been meticulously cared for + 
    updated top to bottom with preserved timestamps at every turn including original oak hardwoods, 
    doors and clawfoot tub. Full guest quarters or AirB&B in basement w/ separate entrance. New multi-level 
    lighted trex deck w/ vined pergola and gorgeous views of Lower Macleay Park & Balch Creek.
     Walkable to trendy NW 23rd, parks, schools & more!"
    </p>

    
            </div>
            <div className="pass-rest">
                <div>
                    <p>
Click below to reset your password!

                    </p>
                </div>
            <p className='paswword-reset' 
                onClick={()=> {setOpenModal(true)}}
                >Reset Password?</p>
            {openModal && <PasswordReset closeModal={setOpenModal}/>}
            </div>
    
        </div>
          
      <Footer/>
    </div>
  )
}

export default Resetpage
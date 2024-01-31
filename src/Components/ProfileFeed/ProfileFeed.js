import React, {useState, useEffect} from 'react'
import "../../Styles/profilefeed.scss"
import { UserData } from '../../assets/Data/UserData'
const ProfileFeed = () => {
  const [updatemode, setUpdateMode] = useState(false);
  const [username, setUsername] = useState("");
  const [city, setCity] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className='profile-feed'>
   {/* <div className='feed-top'>

   </div> */}
   {UserData.map((user, index)=>{
    return(

      <div className='feed-bottom' key={index}>
      <div className='bottom-left'>
        <img src={user.image} className='profile-pix'/>
        <div className='profile-btn'>
        <button className='btn2'>Delete Account</button>
        </div>
       
      </div>
      <div className='bottom-rigth'>
        <ul>
          {updatemode? <input
          name='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />:(
         <li>{user.username}</li>
          )}
        
        {updatemode? <input
          name='city'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          />:(
            <li>{user.city}</li>
          )}
         

         {updatemode? <input
          name='city'
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          />:(
            <li>{user.mobile}</li>
          )}
         
         {updatemode? <input
          name='city'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />:(
            <li>{user.email}</li>
          )}
   <div className='profile-update-btn'>
    {updatemode &&(
       <button className='btn2'>Update</button>
    )}
       
        </div>
         
        </ul>
        <div className='profile-edit-btn'>
          {updatemode? "":(
  <button className='btn2' onClick={() => setUpdateMode(true)}>Edit Account</button>
          )}
      
        </div>
      </div>
     </div>
    )
   })}
  
        </div>
  )
}

export default ProfileFeed
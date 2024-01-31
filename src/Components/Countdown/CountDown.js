import { useEffect, useRef, useState } from "react"
import "./countdown.css" 

function CountDown(){
const [timerDays, setTimerDays]= useState("00");
const [timerHours, setTimerHours]= useState("00");
const [timerMinutes, setTimerMinutes]= useState("00");
const [timerSeconds, setTimerSeconds]= useState("00");
const [inputDate, setInputDate] = useState("00");
const [currentDate, setCurrentDate]= useState(inputDate);

let interval = useRef();

const startCountDown = ()=>{
    const countDownDate = new Date('December 1, 2023 00: 00: 00').getTime();

    interval = setInterval(()=>{
  const now = new Date().getTime();
  const distance = countDownDate - now;

//   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)/(1000 * 60 * 60)));
  const minutes = Math.floor((distance % (1000 * 60 * 60))/ (1000*60));
  const seconds = Math.floor((distance % (1000 * 60))/ 1000);

  if(distance < 0){
// stop timer
clearInterval(interval.current)
  }else{
// update timer
// setTimerDays(days);
// setTimerHours(hours);
setTimerMinutes(minutes);
setTimerSeconds(seconds);
  }

    },1000);

};

useEffect(()=>{
    startCountDown();
 return()=>{
 clearInterval(interval.current) 
 };

}); 


    return(
        <div className="countDownBody"> 
        {/* <h2>Discount Closes in</h2> */}
        <div className="countdownContainer">
<div className="countdownValues">
    {/* <div className="countdown-value">
        <p className="bigText">{timerDays}</p>
        <span>Days</span>
    </div>

    <div className="countdown-value">
        <p className="bigText">{timerHours}</p>
        <span>Hours</span>
    </div> */}
    <div className="countdown-value">
        <p className="bigText">{timerMinutes}</p>
        <span>Minutes</span>
    </div>
    <div className="countdown-value">
        <p className="bigText">{timerSeconds}</p>
        <span>Seconds</span>
    </div>
</div>

        </div>
        </div>
    )
}
export default CountDown
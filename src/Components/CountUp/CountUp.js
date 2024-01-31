import React, { useState, useEffect, useRef } from 'react';
import "../../Styles/countup.scss";

const CountUp = ({ start = 0, end }) => {
    const [value, setValue] = useState(null)
    const ref = useRef(start);
    const counter = end / 200
    const count = () => {
        if (ref.current < end) {
            const result = Math.ceil(ref.current + counter);
            if (result > end) return setValue(end);
            setValue(result);
            ref.current = result;
        } setTimeout(count, 70)
    };

    useEffect(()=>{
        let isStarting = true;
        if(isStarting){
            count();
        }
        return()=>(isStarting = false)
    },[end]);
    

    return (
        <div className='countup-container'>
            <h2>{value} + </h2>
        </div>
    )
}

export default CountUp
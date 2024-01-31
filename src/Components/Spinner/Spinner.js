import React from 'react'
import "../../Styles/spinner.scss"
function Spinner() {
    return (
        <div className='spinner-container'>
            <div className='spinner'>
                <p>
            
                </p>
                <div className='spinner-sector spinner-sector-tomato'></div>
                <div className='spinner-sector spinner-sector-white'></div>
                <div className='spinner-sector spinner-sector-blue'></div>
            </div>
        </div>
    )
}

export default Spinner
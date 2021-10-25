import React from 'react'
import windIcon from '../images/wind-solid.svg'
import humidIcon from '../images/drop-line.svg'
import closeIcon from '../images/close-line.svg'

export default function Card({city, temp, tempFL, icon, humid, wind, localTime, country, remove}) {
    const removeCard = () => {
        remove(city)
    }

    return (
        <div className='cityCard'>
            <div style={{display: 'flex', alignItems: 'baseline'}}>
                <h4>{city},</h4>
                <p style={{fontSize:'1.2em', color: '#383838', paddingLeft:'5px'}}>{country}</p>
            </div>
            <p>{new Date(localTime).toLocaleString('en-GB')}</p>
            <div style={{display: 'flex', justifyContent:'space-between', alignItems: 'center'}}>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <h2 style={{whiteSpace:'nowrap'}}>{temp}&#8451;</h2>
                    <p>Ощущается как: {tempFL} &#8451;</p>
                </div>
                <img src={icon} alt='weather icon'/>
            </div>
            <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
                <div className='info'>
                    <img src={humidIcon} alt="humid" className='small-icons'/>
                    <p>{humid} %</p>
                </div>
                <div className='info'>
                    <img src={windIcon} alt="wind" className='small-icons'/>
                    <p>{wind} км/ч</p>
                </div>
            </div>
            <div style={{position:'absolute', top:'10px', right:'10px'}}>
                <button
                    onClick={removeCard}                
                >
                    <img src={closeIcon} alt="close" style={{width: '20px', height:'20px', cursor:'pointer'}}/>
                </button>
            </div>
        </div>
    )
}

import React from 'react'
import Suggestions from './Suggestions'

export default function Form({submitForm, city, setCity, suggestions}) {
    return (
        <div className='searchForm'>
            <form
                onSubmit={submitForm}
                style={{display:'flex', flexDirection:'column', position:'relative'}}
            >
                <label htmlFor='city'>Поиск города</label>
                <input 
                    value={city}
                    id='city'
                    placeholder='Введите название города...' 
                    onChange={e => setCity(e.target.value)}
                    autoComplete='off'
                />
                <button 
                    className="btn"
                    style={{alignSelf:'flex-end'}}
                >
                    Поиск
                </button>
                <Suggestions suggestions={suggestions} setCity={setCity}/>
            </form>
        </div>
    )
}

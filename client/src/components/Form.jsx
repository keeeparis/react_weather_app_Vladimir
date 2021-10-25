import React from 'react'

export default function Form({submitForm, city, setCity}) {
    return (
        <div className='searchForm'>
            <form
                onSubmit={submitForm}
            >
                <label htmlFor='city'>Поиск города</label>
                <input 
                    value={city}
                    id='city'
                    placeholder='Введите название города...' 
                    onChange={e => setCity(e.target.value)}
                />
                <button className="btn">Поиск</button>
            </form>
        </div>
    )
}

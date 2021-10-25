import React from 'react'
import Card from './Card'

export default function List({cards, remove}) {
    return (
        <div className='citiesList'>
            {cards.map(card => 
                <Card 
                    city={card.city}
                    temp={card.temp}
                    key={card.city}
                    tempFL={card.tempFL}
                    icon={card.icon}
                    humid={card.humid}
                    wind={card.wind}
                    localTime={card.localTime}
                    country={card.country}
                    remove={remove}
                />)
            }
        </div>
    )
}

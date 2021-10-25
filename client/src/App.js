import 'materialize-css'
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from 'react-router-dom'
import { useEffect, useMemo, useState } from "react";
import ApiRequest from "./API/ApiRequest";
import List from "./components/List";
import Form from './components/Form'
import {useMessage} from './hooks/message.hook'

function App() {
    const [city, setCity] = useState('')
    const [cards, setCards] = useState([])
    const [error, setError] = useState(null)
    const message = useMessage()

    const submitForm = async (e) => {
        e.preventDefault()
        setError(null)
        try {
            const data = await ApiRequest.getData(city)
            const isInCards = cards.filter(e => e.city === data.location.name).length

            if (!!isInCards) {
                setError('Город уже в списке')
                return
            }
            
            setCards([
                ...cards, 
                {
                    city: data.location.name, 
                    temp: data.current.temp_c,
                    tempFL: data.current.feelslike_c,
                    icon: data.current.condition.icon,
                    humid: data.current.humidity,
                    wind: data.current.wind_kph,
                    timeLast: data.current.last_updated,
                    localTime: data.location.localtime,
                    country: data.location.country
                }
            ])
        } catch (e) {
            setError('Ошибка в поискe города. Выберите другой город')
        } finally {
            setCity('')
        }
    }

    useEffect(() => {
        message(error)
    }, [error, message])

    useMemo(() => {
        return cards
    }, [cards])

    const remove = (cardCity) => {
        setCards(cards.filter(e => e.city !== cardCity))
    }

    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Form submitForm={submitForm} city={city} setCity={setCity}/>
                <List cards={cards} remove={remove}/>
            </BrowserRouter>
        </>
    );
}

export default App;

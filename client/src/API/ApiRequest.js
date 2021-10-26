export default class ApiRequest {
    static async getData(coords) {
        const response = await fetch('/api/data', { 
            method: 'POST', 
            body: JSON.stringify({ lat: coords[0], lng: coords[1] }), 
            headers: { 'Content-Type': 'application/json' }
        })
        const data =  await response.json()
        return data
    }

    static async getCoords(city) {
        const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=227110303242476cae97b6c40e24a8e1`)
        const data = await response.json()
        const [lat, lng] = [data.results[0].geometry.lat, data.results[0].geometry.lng]
        return [lat, lng]
    }
}
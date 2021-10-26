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
        const response = await fetch('/api/coords', {
            method: 'POST', 
            body: JSON.stringify({ city: city }), 
            headers: { 'Content-Type': 'application/json' }
        })
        const data = await response.json()
        const [lat, lng] = [data.results[0].geometry.lat, data.results[0].geometry.lng]
        return [lat, lng]
    }

    static async getSuggestions(city) {
        const response = await fetch('/api/suggestions', {
            method: 'POST', 
            body: JSON.stringify({ city: city }), 
            headers: { 'Content-Type': 'application/json' }
        })
        const result = await response.json()
        return result
    }
}
export default class ApiRequest {
    static async getData(city) {
        const response = await fetch('/api/data', { 
            method: 'POST', 
            body: JSON.stringify({ city: city }), 
            headers: { 'Content-Type': 'application/json' }
        })
        const data =  await response.json()
        return data
    }
}
import express from 'express'
import config from 'config'
import path from 'path'
import { fileURLToPath } from 'url'
import fetch from 'node-fetch'

const app = express()

const PORT = config.get('port') || 5000

const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.use(express.json({extended: true}))

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.post('/api/data', async (req, res) => {
    const apiKey = config.get('apiKey2')
    const {city} = req.body
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=ru`)
    const result = await response.json()
    res.send(result)
})

async function start() {
    try {
        app.listen(PORT, () => { console.log(`Server runs on port = ${PORT}...`)})
    } catch (e) {
        console.log(`Server error - ${e.message}`)
        process.exit(1)
    }
}

start()
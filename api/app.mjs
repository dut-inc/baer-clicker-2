import './config.mjs'
import express from 'express'
import url from 'url'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

const app = express()

app.use(bodyParser.json());
// app.use(express.json());
app.use(cors())

// temp variable before database implementation
let count = 0

app.get('/', (req, res) => {
    const data = { clicks: count }
    res.json(data)
})

app.post('/click', (req, res) => {
    count = parseInt(req.body.clicks)
    const data = { clicks: count };
    res.json(data);
})

const port = process.env.PORT || 3001
app.listen(port, () => {console.log(`Server is listening on ${port}`)})
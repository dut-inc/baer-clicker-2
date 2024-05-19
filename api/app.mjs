import './config.mjs'
import express from 'express'
import url from 'url'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

const app = express()

app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, '..', 'public')))
// app.use(express.json());

// app.set('view engine', 'hbs')
app.use(cors())


app.get('/message', (req, res) => {
    const data = { message: 'Hello from Node.js backend!' };
    res.json(data);
})

const port = process.env.PORT || 3001
app.listen(port, () => {console.log(`Server is listening on ${port}`)})
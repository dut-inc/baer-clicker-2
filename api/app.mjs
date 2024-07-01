import './config.mjs'
import './db.mjs'
import express from 'express'
import url from 'url'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import session from 'express-session'
import passport from 'passport'
import mongoose from 'mongoose'
// import connectEnsureLogin from 'connect-ensure-login'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

const app = express()

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use(cors(
    {
        "origin": ["http://localhost:3000","http://localhost:3001", "http://127.0.0.1:3000", "http://127.0.0.1:3001"],
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        credentials: 'include',
        allowedHeaders: ['Origin, X-Requested-With, Content-Type, Accept'],
        "preflightContinue": false,
        "optionsSuccessStatus": 204
    }
    ));

const User = mongoose.model('User')
const Clicks = mongoose.model('Clicks')

app.use(session({
    secret: "BAERBALEJOEIFJOSIEJF",
    resave: false,
    saveUninitialized: true, 
    cookie: { 
        secure: false, 
        maxAge: 3600000,
        expires: new Date(Date.now() + 3600000) 
    }
}))

app.use(passport.initialize())
app.use(passport.session())

passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

const findUser = async username => {
    const query = { username: username }
    return await User.findOne(query)
}

app.get('/', async (req, res) => {
    console.log(req.session)
    const foundUser = await findUser(req.query.user)
    const userClicks = await Clicks.findOne({ user: foundUser._id })
    if (!userClicks) {
        const newClicks = new Clicks({
            clicks: 0,
            user: foundUser._id
        })
        newClicks.save()
        .then(() => {
            res.json({ clicks: 0 })
        }).catch((err) => {
            console.log(err)
        })
    } else {
        res.json({ clicks: userClicks.clicks })
    }
})

app.options('/click', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
})

app.post('/click', async (req, res) => {
    console.log(req.headers)
    const newClicks = parseInt(req.body.clicks)
    if (!newClicks) {
        res.status = 404
        return
    }
    const foundUser = await findUser(req.body.user)
    if (!foundUser) {
        res.status = 404
        return
    }
    const updateClicks = await Clicks.findOneAndUpdate({ user: foundUser._id }, { clicks: newClicks })
    if (!updateClicks) {
        res.status = 404
        return
    }
})

app.post('/login', passport.authenticate('local', { }), async function(req, res) {
    res.json({ user: req.session.passport.user })
});

app.post('/register', function (req, res, next) {
    User.register({ username: req.body.username, active: false }, req.body.password, (err) => {
        if (err) {
            return res.json({ status: false })
        }
        return res.json({ status: true })
    })
})

const port = process.env.PORT || 3001
app.listen(port, () => {console.log(`Server is listening on ${port}`)})
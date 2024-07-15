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
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors(
    {
        origin: "http://localhost:3000", 
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        credentials: true, 
        allowedHeaders: ['Origin', "X-Requested-With", "Content-Type", "Accept"],
        "preflightContinue": false,
        "optionsSuccessStatus": 200
    }
    ));

const User = mongoose.model('User')
const Clicks = mongoose.model('Clicks')

app.use(session({
    secret: "BAERBALEJOEIFJOSIEJF",
    resave: false,
    saveUninitialized: false, 
    // cookie: { 
    //     secure: false, 
    //     maxAge: 3600000,
    //     expires: new Date(Date.now() + 3600000), 
    //     // SameSite: "None"
    // }
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
    // console.log(req.session)
    const foundUser = await findUser(req.query.user)
    console.log(foundUser)
    const userClicks = await Clicks.findOne({ user: foundUser._id })
    if (!userClicks) {
        const newClicks = new Clicks({
            clicks: 0,
            user: foundUser._id
        })
        newClicks.save()
        .then(() => {
            // res.status(200)
            res.json({ clicks: 0 })
        }).catch((err) => {
            console.log(err)
        })
    } else {
        // res.status(200)
        res.json({ clicks: userClicks.clicks })
    }
})

app.post('/click', async (req, res) => {
    console.log("Click")
    console.log(req.user)
    console.log(req.session)
    // const newClicks = parseInt(req.body.clicks)
    // const foundUser = await findUser(req.body.user)
    // const updateClicks = await Clicks.findOneAndUpdate({ user: foundUser._id }, { clicks: newClicks })
    res.status(200).json({ hello: 'Hello'})
})

app.post('/login', passport.authenticate('local', {keepSessionInfo: true}), function(req, res) {
    console.log("Login")
    console.log(req.session)
    const user = req.session.passport.user
    req.logIn(user, function (err) { // <-- Log user in
        return res.json({ user })
     });
    // res.json({ user: req.session.passport.user })
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
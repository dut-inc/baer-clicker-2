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
import connectEnsureLogin from 'connect-ensure-login'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

const app = express()

const User = mongoose.model('User')

app.use(session({
    secret: "BAERBALEJOEIFJOSIEJF",
    resave: false,
    saveUninitialized: false
}))

app.use(bodyParser.json());
// app.use(express.json());
// app.use(cors({ 
//     origin: "http://localhost:3000/", 
//     credentials: true 
//    }));
app.use(cors());

app.use(passport.initialize())
app.use(passport.session())

passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

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

app.post('/login', (req, res, next) => {
    passport.authenticate('local', 
    (err, user, info) => {
        if (err) {
            return next(err)
        }

        if (!user) {
            return res.json({ user })
        }

        req.logIn(user, function(err) {
            if (err) {
                return next(err)
            }
            
            return res.json({ user })
        })
        // res.render("/")
    })(req, res, next)
})

app.post('/register', function (req, res, next) {
    User.register({ username: req.body.username, active: false }, req.body.password )
    res.json({ status: "REGISTER SUCCESSFUL" })
})

const port = process.env.PORT || 3001
app.listen(port, () => {console.log(`Server is listening on ${port}`)})
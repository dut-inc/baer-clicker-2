import mongoose from 'mongoose'
import passport from 'passport'
import passportLocalMongoose from 'passport-local-mongoose'

mongoose.connect(process.env.DSN)

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
})

const clickSchema = new mongoose.Schema({
    clicks: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

userSchema.plugin(passportLocalMongoose)

mongoose.model('User', userSchema)
mongoose.model('Clicks', clickSchema)
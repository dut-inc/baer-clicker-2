import mongoose from 'mongoose'
import passport from 'passport'
import passportLocalMongoose from 'passport-local-mongoose'

mongoose.connect(process.env.DSN)

const userSchema = new mongoose.Schema({
    username: {type: String, required: true}
})

userSchema.plugin(passportLocalMongoose)

mongoose.model('User', userSchema)
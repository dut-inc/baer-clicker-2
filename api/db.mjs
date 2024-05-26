import mongoose from 'mongoose'

mongoose.connect(process.env.DSN)

const userSchema = new mongoose.Schema({
    username: {type: String, required: true}
})


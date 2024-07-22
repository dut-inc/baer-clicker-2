import mongoose from 'mongoose'
import passport from 'passport'
import passportLocalMongoose from 'passport-local-mongoose'

mongoose.connect(process.env.DSN)

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
})

//TODO: refactor clicks to calories
const clickSchema = new mongoose.Schema({
    clicks: { type: Number, required: true },
    woermCurrencies: { type: Number, required: true },
    spiritBaers: { type: Number, required: true },
    rainbowTrouts: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

//amount of upgrades
const upgradeSchema = new mongoose.Schema({
    woermUpgrades: { type: Number, required: true },
    baerrys: { type: Number, required: true },
    paenutz: { type: Number, required: true },
    gyatchs: { type: Number, required: true },
    nickaels: { type: Number, required: true },
    saelmons: { type: Number, required: true },
    uraeniums: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})
userSchema.plugin(passportLocalMongoose)

mongoose.model('User', userSchema)
mongoose.model('Clicks', clickSchema)
mongoose.model('Upgrades', upgradeSchema)
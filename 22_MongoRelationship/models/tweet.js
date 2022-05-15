const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost:27017/relationshipdemo')
    .then(() => {
        console.log("DB CONNECTED!");
    })
    .catch(e => {
        console.log("MONGO CONNECTION ERROR!");
        console.log(e);
    })

const UserSchema = new Schema({
    name: String,
    age: Number,
    gender: {
        type: String,
        enum: ['m', 'f'],
    }
})
const TweetSchema = new Schema({
    mess: String,
    likes: Number,
    _user: { type: Schema.Types.ObjectId, ref: 'User' }
})

const User = new mongoose.model('User', UserSchema);
const Tweet = new mongoose.model('Tweet', TweetSchema);
const fn = async () => {
    await User.deleteMany({});
    const u1 = new User({
        name: "Bhavya",
        age: 16,
        gender: 'm'
    })
    await u1.save();
}
// fn();
const fn2 = async () => {
    const u1 = await User.findOne({});
    // const t1 = new Tweet({
    //     mess: 'This is my first tweet!',
    //     likes: 23,
    //     _user: u1
    // })
    const t1 = new Tweet({
        mess: 'This is my Second tweet!',
        likes: 99,
        _user: u1
    })
    await t1.save().then(d => { console.log(d); }).catch(e => { console.log(e); })
}
// fn2();
const fn3 = async () => {
    // const x = await Tweet.findOne();
    // const x = await Tweet.findOne().populate('_user');
    const x = await Tweet.find({}).populate('_user');
    console.log(x);
}
fn3();
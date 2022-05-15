const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/relationshipDB')
    .then(() => {
        console.log("DB CONNECTED!");
    })
    .catch(e => {
        console.log("MONGO CONNECTION ERROR!");
        console.log(e);
    })

//one to few!
//eg. we assume one users have only few address thtswhy we created an array of address and
//associated it with user only!!
const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    address: [
        {
            _id: { id: false },
            street: String,
            city: String,
            location: String,
            country: String,
        }
    ]
})
const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u1 = new User({
        first: "Bhavya",
        last: "kawatra"
    })
    u1.address.push({
        street: '170',
        city: "Delhi",
        location: 'D',
        country: 'India'
    })
    const res = await u1.save();
    console.log(res);
}
// makeUser();

const addAdress = async(id) => {
    const u = await User.findById(id);
    u.address.push({
        street: '172',
        city: "New Delhi",
        location: 'ND',
        country: 'India'
    });
    const res = await u.save();
    console.log(res);
}
addAdress('621c729b90e9a0bc6c95b874');
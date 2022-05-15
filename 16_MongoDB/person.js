const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp')
    .then(() => {
        console.log("Connection OPEN!!");
    })
    .catch(e => {
        console.log(e);
    })
const personSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
})

personSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`;
})
personSchema.virtual('fullName').set(function (v) {
    this.firstName = v.substr(0, v.indexOf(' '));
    this.lastName = v.substr(v.indexOf(' ') + 1);
})

const Person = mongoose.model('Person', personSchema);
const personOne = new Person({
    firstName: "bhavya",
    lastName: "kwatra"
});
personOne.save();
// const personOne=Person.find({lastName:'kwatra'});
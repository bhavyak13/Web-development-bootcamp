const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/movieApp')
    .then(() => {
        console.log("Okay so its working!");
    })
    .catch((e) => {
        console.log("Error!!!");
        console.log(e);
    })
/*
Models are fancy constructors compiled from Schema definitions.
*/
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})
const Movie = mongoose.model('Movie', movieSchema);
// const asd = new Movie({
//     title: 'asd',
//     year: 2022,
//     score: 9,
//     rating: 'R'
// })

//if u create a single instance of model then u need to call save in oder
//for it to take effect and actually save to database!

//console.log(asd);
//asd.save();
// /*
// Movie.insertMany([
//     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//     { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
//     { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
//     { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
//     { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
// ])
// .then((data)=>{
//     console.log("hurray it worked!!");
//     console.log(data);
// })
//  */
// await Movie.find({ score: { $gte: 8.3 } }).exec();
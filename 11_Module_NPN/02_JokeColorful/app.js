const pckg = require("give-me-a-joke");

// // console.log(pckg);
// pckg.getRandomDadJoke((joke) => { console.log(joke); });
// // pckg.getRandomJokeOfTheDay("knock-knock",joke=>{console.log(joke);});
// pckg.getCustomJoke("bhavya","kwatra",(joke)=>{console.log(joke);});

const secondPackage = require('colors');
// console.dir(secondPackage);
pckg.getRandomDadJoke((joke) => { console.log(joke.rainbow); });
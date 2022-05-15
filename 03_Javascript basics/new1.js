function fun(i) {
    console.log(i);
    alert(i);
}
function repeat(arg, n) {
    let x = parseInt(n);
    while (n--) {
        console.log(arg)
    }
}

// another way to define function!!
let something = function () {
    console.log("Hy bro whtsupp?");
}
let jsi = function (f) {
    return f * 10;
}
let callTwice = function (F) {
    F();
    F();
}
const myMath = {
    pi: 3.14,
    square: function (num) {
        return num ** 2;
    },
    cube: function (num) {
        return num ** 3;
    }
}
const myCat = {
    mew: 212,
    jimi: 34,
    jaisja: "bhavya",
    nameio(num) {
        console.log(this.jimi * num)
    }
}
numbers = [1, 2, 34, 5, 6, 6, 6, 65, 5, 6, 56, 5, 56, 65, 6, 57, 8, 0]
// 2methods!!
// Method 1
// for (let key of numbers) {
//     console.log(key);
// }
// Method 2
// numbers.forEach(printe)
// printe = function (x) {
//     console.log(x);
// }
// or
// numbers.forEach(function (el) {
//     console.log(el);
// })
const movies = [
    {
        title: "bhavya",
        score: 90
    },
    {
        title: "ji",
        score: 0
    }
]

// For each
movies.forEach(function (x) {
    console.log(`${x.title} - ${x.score}/100`);
})
/*
    Map

    The map() method creates a new array populated with the results
    of calling a provided function on every element in the calling array. 
or
    Calls a defined callback function on each element 
    of an array, and returns an array that contains the results.
*/
const double = numbers.map(function (key) {
    return (key * 2)
})
// arrow function 
const rolldie = () => {
    return Math.floor((Math.random() * 6)) + 1
}
const newMovie = movies.map(x => (`${x.score}/100`))


// setTimeout : The global setTimeout() method sets a timer which executes
//  a function or specified piece of code once the timer expires. 
setTimeout(() => { console.log("ji") }, 3000)
// const id = setInterval(() => {
//     console.log(Math.random())
// }, 2000)
// for stopping:
// clearInterval(id)

// filter
/*The filter() method creates a new array with all elements 
that pass the test implemented by the provided function. */
const numLessThnFive = numbers.filter((num) => (num <= 5))

// some , every => return boolean!!
let hi = numbers.every((num) => (num > 0)) //false 
let hwi = numbers.some((x) => (x > 0)) //true

// reduce 
/* The reduce() method executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element.
The final result of running the reducer across all elements of the array is a single value.
The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise array element 0 is used as the 
initial value and iteration starts from the next element (index 1 instead of index 0).
Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array:*/
const ih = numbers.reduce((sum,current)=>(sum+current))
console.log(ih);
let fko=0;
for(let i of numbers){
    fko+=i;
}
console.log(fko);

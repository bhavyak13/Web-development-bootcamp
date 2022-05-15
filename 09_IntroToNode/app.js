// console.log("Hello from First Script!");
console.log(process.argv);
let array = process.argv.slice(2);
for (let i of array) {
    console.log(`Hello ${i}!`);
}
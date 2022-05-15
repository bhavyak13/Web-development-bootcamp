const body = document.querySelector("body");
// const colorChange=(color,delay)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             body.style.backgroundColor=`${color}`
//             resolve();
//         },delay);
//     })
// }
// colorchange("red",1)
//     .then(()=>colorchange("blue",1))
//     .then(()=>colorchange("orange",1))
//     .then(()=>colorchange("purple",2))
//     .then(()=>colorchange("voilet",0.5))
//     .then(()=>colorchange("black",0.5))
//     .then(()=>{
//         console.log("Movie khatam");
//         return colorchange("white",2);
//     })
//     .catch(()=>{
//         console.log("OOPS!");
//     })

/*An async function is a function declared with the async keyword, and the await keyword is permitted within it. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.*/
//now using async and await keyword Lessss go
let colorChange = (color, delay) => {
    return new Promise((resolve) => {
        return setTimeout(() => {
            body.style.backgroundColor = `${color}`;
            resolve();
        }, delay)
    })
}

rainbow = async () => {
    colorChange("green", 2100);
    await colorChange("red", 1000);
    await colorChange("blue", 2000);
    await colorChange("black", 1000);
    await colorChange("orange", 1000);
    await colorChange("blue", 1000);
    await colorChange("white", 1000);
    console.log("OK BOSS");
}
rainbow();



const login = async (username, password) => {
    if (!username || !password) { console.log("hudush"); throw new Error("Details not filled"); }
    if (password !== "mahadev") throw new Error("Oh oh wrong password!");
    console.log("Happy coding ! high Ratings!!");
    return "Welcome Login Successful";
}
// login("mahadev","mahadev");
// login("mahadev","mahade");
// login("om");
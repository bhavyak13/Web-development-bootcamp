//JSON Java Script Object NOtation
//AJAX Asynchronous Javascript And XML
//AJAJ Asynchronous Javascript And Json


//NATIVE WAY!!
// const req = new XMLHttpRequest();

// req.onload = function () {
//     console.log("All done with request!");
//     // console.log(this);
//     const data = JSON.parse(this.responseText);
//     console.log(data.ticker.price);
// }
// req.onerror = function () {
//     console.log("ERROR");
//     console.log(this);
// }
// req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
// req.send();


//Using FETCH 

//promise version
// fetch("https://api.cryptonator.com/api/ticker/btc-usd")
//     .then((x)=>{
//         console.log("SUCCESS");
//         return x.json();
//     })
//     .then(data=>{
//         console.log(data.ticker.price);
//     })
//     .catch(e=>{
//         console.log(e);
//     })

//using async 
// let fun=async(url)=>{
//     try{
//     let x=await fetch(`${url}`);
//     let data =await x.json();
//     console.log(data.ticker.price);}
//     catch(e){
//         console.log("SHIT vai",e);
//     }
// }
// fun("https://api.cryptonator.com/api/ticker/btc-usd");


//AXIOS
// axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
//     .then((res)=>{
//         console.log(res.data.ticker.price);
//     })
//     .catch(()=>{
//         console.log("oops!");
//     })

// axios 
//async function! 
// let x = async (url) => {
//     try {
//         let res = await axios.get(`${url}`);
//         console.log(res.data.ticker.price);
//     } catch (e) {
//         console.log(e);
//     }
// }
// x("https://api.cryptonator.com/api/ticker/btc-usd");

let textbox=document.querySelector("ul");
let btn=document.querySelector("button");
// textbox.style.border="1px solid black";
let joke = async () => {
    const headers = { headers: { Accept: "application/json" } }
    let res = await axios.get("https://icanhazdadjoke.com/", headers);
    let li=document.createElement("li");
    li.innerText=res.data.joke;
    textbox.append(li);
    console.log(res.data.joke);
}
joke();
btn.addEventListener("click",joke);


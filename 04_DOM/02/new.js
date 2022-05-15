// const div = document.querySelector("div");
// div.style.textAlign = "center"
// const btn = document.querySelector('button');
// const bodi = document.querySelector("body");
// const fn = () => {
//     let x = Math.floor(Math.random() * 225);
//     let y = Math.floor(Math.random() * 225);
//     let z = Math.floor(Math.random() * 225);
//     const xw = `rgb(${x},${y},${z})`
//     bodi.style.backgroundColor = xw;
//     document.querySelector('h1').innerText = xw;
// }
// btn.addEventListener('click', fn)



let h1=document.querySelector('h1');
let btn=document.querySelector('button');
let div=document.querySelector("body");
div.style.textAlign="center"
let hack=()=>{
    let i=Math.floor(Math.random()*225);
    let j=Math.floor(Math.random()*225);
    let k=Math.floor(Math.random()*225);
    div.style.backgroundColor=`rgb(${i},${j},${k})`
    h1.innerHTML=` HACKED!!<br>rgb(${i},${j},${k})`;
}
btn.addEventListener("click",hack);
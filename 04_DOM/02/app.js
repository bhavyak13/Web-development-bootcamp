// const btn = document.querySelector("#v2");
// btn.onclick = () => { console.log("hyyyy") }

// scream = () => {
//     console.log("AAAAAAAAAAAAAAAAA");
//     console.log("Stop Touching ME")
// }
// btn.onmouseenter = scream;

// // const btn3 = document.querySelector("#v3");
// // btn3.addEventListener("mouseup", scream)

// const h1 = document.querySelector("input");
// h1.addEventListener("keydown", (e) => {
//     console.log(e.key);
//     console.log(e.code);
// })

//********************************* */
let fn=()=>{console.log("MAHADEV COMING!!");}
const btnx=document.querySelector("#v2");
btnx.onclick=fn;
// btnx.onmouseenter=scream;
let fn2=()=>{console.log("Jai Mata di kehte jao:)");}
btn3=document.querySelector("#v3");
btn3.onclick=fn2;
let lbl=document.querySelector("input");
let h1=document.querySelector('h1');
let hack=function(){
    // console.log(lbl.value);
    h1.innerText=lbl.value;
}
// lbl.addEventListener("input",hack);
let eye=document.querySelector("#eye");
let hackf=()=>{
    if(lbl.getAttribute("type")==="text"){
        lbl.setAttribute('type','password');
    }else{
    lbl.setAttribute('type','text');}
}
eye.addEventListener("click",hackf);

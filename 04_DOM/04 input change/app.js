const x = document.querySelector("input");
x.addEventListener("change",(e)=>{
    console.log("Change occured");
    // console.log(e.value);
})
const h1=document.querySelector("h1");
x.addEventListener("input",()=>{
    h1.innerText=x.value;
})
// let h1=document.querySelector("h1");
// let input=document.querySelector("input");
// input.addEventListener("input",()=>{
//     h1.innerText=input.value;
// })
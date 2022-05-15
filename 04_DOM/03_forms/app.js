// const form = document.querySelector("#forms");
// const ul = document.querySelector("#ul1");
// form.addEventListener("submit", (e) => {
//     const username = form.elements.username;
//     const tweet = form.elements.tweet;
//     retrieve(username.value, tweet.value);
//     e.preventDefault();
//     empty(username);
//     empty(tweet);
//     // username.value="";
// });
// const retrieve = (username, tweet) => {
//     const li = document.createElement("li");
//     const b = document.createElement("b");
//     b.append(username);
//     li.append(b);
//     li.append(`- ${tweet}`)
//     ul.appendChild(li);
// }
// let empty = (x) => { x.value = "" };
// ul.addEventListener("click", (e) => {
//     console.dir(e);
//     e.target.nodeName === "LI" && e.target.remove();
// })





let ul=document.querySelector("#ul1");
let form=document.querySelector("#forms");
ul.addEventListener("click",(e)=>{
    if(e.target.nodeName=="LI"){
        e.target.remove();
    }
});
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let li=document.createElement("li");
    let u=form.elements.username.value;
    let t=form.elements.tweet.value;
    li.innerHTML=`<b>${u}</b> - ${t}`;
    ul.appendChild(li);
    form.elements.username.value="";
    form.elements.tweet.value="";
});

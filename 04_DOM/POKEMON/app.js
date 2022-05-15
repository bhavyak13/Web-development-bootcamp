// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
let content = document.querySelector("section");
let g1=document.querySelector('h1');
g1.style.fontSize="3em";
g1.style.color="#48cae4"
g1.style.textAlign="center";
// content.innerText+="\n";
for(let i =1 ;i <=150 ;i++){
    // const newImg = document.createElement('img');
    // newImg.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    // content.appendChild(newImg);
    const cont=document.createElement("div");
    const newImg = document.createElement('img');
    const x=document.createElement('span');
    newImg.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    x.innerText=i;
    x.style.color="white";
    cont.appendChild(newImg);
    newImg.after(x);
    content.appendChild(cont);
    cont.style.display="inline-block"
    newImg.style.display="block"
    cont.style.textAlign="center"
}
document.body.style.backgroundColor="black";

// const allImages = document.getElementsByTagName('img');
// for (let image of allImages) {
//     console.log(image.src);
//     // image.src="https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80";
// }
// const allPara = document.querySelectorAll('p');
// console.dir(allPara);

// const AllLink = document.querySelectorAll('a');
// for (let link of AllLink) {
    //     link.style.color = "cyan"
    // }
    // console.log(document.querySelector('a').innerHTML)
    // const h1 = document.querySelector('h1');
    // const newimg = document.createElement("img");
    // newimg.src = "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
    // document.body.appendChild(newimg);
    // newimg.classList.add("square");
    let allImg=document.querySelectorAll('img');
    for(let image of allImg){
        console.log(image.src);
    }
    const allPara=document.querySelectorAll('p');
    for(let para of allPara){
        para.innerText="HAR HAR MAHADEV!";
    }
    const links=document.querySelectorAll('a');
    for(let link of links){
        link.href = "https://www.codeforces.com/profile/bhavyakawatra13";
        link.style.color="magenta";
    }
    const newImg=document.createElement('img');
newImg.src="https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80";
document.body.appendChild(newImg);
newImg.classList.add("square");
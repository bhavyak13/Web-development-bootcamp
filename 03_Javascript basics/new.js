// console.warn("oops!")
// let i=0;
// while(i<10){
//     console.log(i+1,`hy bro ${i*10}`);
//     i++;
// }
// let x= [1,3,true,"bhavya"]
let x=0;
let arr=[];
while(x!=1){
    let y=prompt("hello! Enter your choice(add/delete/display/quit)");
    if(y==="quit"){
        x=1;
        console.log("Okay! you quit the app!!")
    }
    else if(y==="add"){
        let f=prompt("wht would u like to add in todo ?")
        console.log(`${f} added to the list!`)
        arr.push(f);
    }
    else if(y==="delete"){
        let f=prompt("Enter index")
        console.log("Todo Removed!")
        arr.splice(parseInt(f),1);
    }
    else if(y==="display"){
        if(arr.length===0){
            console.log("TODO its empty!");
            continue;
        }
        console.log("*------------*");
        for(let i=0;i<arr.length;i++){
            console.log(`${i}: ${arr[i]}`);
        }
        console.log("*------------*");
    }
    
}
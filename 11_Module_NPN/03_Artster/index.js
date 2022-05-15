figlet=require('figlet');
c=require('colors');
figlet("Har Har Mahadev!!",(err,data)=>{
    if(err){
        console.log("OOPSSSSSS!");
        console.dir(err);
        return;
    }
    console.log(data);
    console.log(data.rainbow);
    console.log(data.cyan);
})
// figlet("Bhavya Kawatra!!",(err,data)=>{
//     if(err){
//         console.log("OOPSSSSSS!");
//         console.dir(err);
//         return;
//     }
//     console.log(data);
// })
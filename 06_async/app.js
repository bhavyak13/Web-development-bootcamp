// const fakeRequest = (url, success, failure) => {
//     let delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         // console.log(delay);
//         if (delay > 4000) { failure("Connection Timed Out") }
//         else { success(`Yo successed got info from ${url}`) }
//     }, delay);
// }

// fakeRequest("books.com/pg1",
//     (e) => {
//         console.log("Success", e)
//         fakeRequest("books.com/pg2",
//             (response) => {
//                 console.log("success", response);
//                 fakeRequest("books.cpom/pg3",
//                     (response) => {
//                         console.log("Successs", response);
//                     },
//                     (response) => {
//                         console.log("failre at 3", response);
//                     })
//             },
//             (response) => {
//                 console.log("failure at 2nd", response);
//             }
//         )
//     },
//     (e) => { console.log("Failure", e) }
// )
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        let delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 3000) { reject("Connection Timed Out") }
            else {resolve(`Yo successed got info from ${url}`)}
        }, delay);
    })
}
// fakeRequest("codeforces.com/submission/bhavyakawatra13")
//     .then((data)=>{
//         console.log("IT worked! (page1)",data)
//         return fakeRequest("codeforces.com/submission/fakeid999")
//     })
//     .then((data)=>{
//         console.log("IT worked! (page2)",data)
//         return fakeRequest("codeforces.com/submission/thejollynaman")
//     })
//     .then((data)=>{
//         console.log("IT worked! (page3)",data)
//         return fakeRequest("codeforces.com/submission/priyansh31de")
//     })
//     .then((data)=>{
//         console.log("IT worked! (page4)",data)
//     })
//     .catch((data)=>{
//         console.log("A request FAILED!",data)
//     })

let fun = async () => {
    try {
        let data=await fakeRequest("bhavya/pg1");
        console.log(data);
        data=await fakeRequest("bhavya/pg2");
        console.log(data);
        data=await fakeRequest("bhavya/pg3");
        console.log(data);
        data=await fakeRequest("bhavya/pg4");
        console.log(data);
    }
    catch (e) {
        console.log(e);
    }
}
fun();
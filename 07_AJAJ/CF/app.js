let p = document.querySelector("p");
let body = document.querySelector("body");
body.style.backgroundColor = "black";
body.style.color = "white";
let form = document.querySelector("form");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

let printit = (obj) => {
    //image!!
    let img = document.createElement("img");
    img.src = obj.avatar;
    ul.append(img);

    //Handle
    let newli = document.createElement("li");
    newli.innerHTML = `<b>Handle</b> : ${obj.handle}`;
    ul.append(newli);

    //rating
    newli = document.createElement("li");
    let R = "-";
    if (obj.rating) { R = obj.rating; }
    newli.innerHTML = `<b>Rating</b> : ${R}`;
    ul.append(newli);

    //rank
    newli = document.createElement("li");
    if (R !== '-') { newli.innerHTML = `<b>Rank</b> : ${obj.rank}`; }
    else { newli.innerHTML = `<b>Rank</b> : ${R}`; }
    ul.append(newli);

    //date of registeration
    newli = document.createElement("li");
    let val = obj.registrationTimeSeconds;
    let dt = new Date(val * 1000);
    newli.innerHTML = `<b>Joined</b> : ${dt.toLocaleString()}`;
    ul.append(newli);

    //last online
    newli = document.createElement("li");
    val = obj.lastOnlineTimeSeconds;
    dt = new Date(val * 1000);
    newli.innerHTML = `<b>Last online</b> : ${dt.toLocaleString()}`;
    ul.append(newli);

}

let info = async (handle) => {
    try {
        let res = await axios.get(`https://codeforces.com/api/user.info?handles=${handle}`)
        let obj = res.data.result[0];
        // console.log(obj);
        printit(obj);
    }
    catch (e) {
        alert("Handle not found");
        console.log("ERROR : ", e);
    }
}
// info("bhavyakawatra13");

form.addEventListener("submit", (e) => {
    ul.innerText = '';
    e.preventDefault();
    let handle = form.elements.name_handle;
    info(handle.value);
    handle.value = "";
})
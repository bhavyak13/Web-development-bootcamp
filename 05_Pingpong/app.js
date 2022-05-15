const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const result = document.querySelector("#btn3");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const main = document.querySelector("#dropdown");
// let body=document.querySelector("body");
// body.style.backgroundColor="white"
// let win = main.options.selectedIndex;
let win = 5;
main.addEventListener("change", () => {
    win = parseInt(main.value);
    resetf();
    btn1.disabled=false;
    btn2.disabled=false;
});


let f = 0;
const update = () => {
    if (f == 0) {
        let x = parseInt(p1.textContent);
        if (x < win)
            x += 1;
        if (x === win) {
            p1.classList.add('has-text-success');
            p2.classList.add('has-text-danger');
            f = 1;
            fn();
        }
        p1.textContent = x;
        console.log(f);
    }
};
const update2 = () => {
    if (f == 0) {
        let x = parseInt(p2.textContent);
        if (x < win)
            x += 1;
        if (x === win) {
            fn();
            p1.classList.add('has-text-success');
            // p2.style.color = "green";
            // p1.style.color = "red"
            p2.classList.add('has-text-danger');
            f = 1;
        }
        p2.textContent = x;
        console.log(f);
    }
};
const resetf = () => {
    p1.textContent = 0;
    p2.textContent = 0;
    f = 0;
    p1.classList.remove('has-text-success','has-text-danger');
    p2.classList.remove('has-text-danger','has-text-danger');
    // p1.style.color = "black";
    // p2.style.color = "black";
    fn();
}
btn1.addEventListener("click", update);
btn2.addEventListener("click", update2);
btn3.addEventListener("click", resetf);
const fn = () => {
    btn2.toggleAttribute("disabled");
    btn1.toggleAttribute("disabled");
}
const hacked=()=>{
alert("hacking is being initialized ");}
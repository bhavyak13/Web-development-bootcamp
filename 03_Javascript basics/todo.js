let x = 0;
let disply = (arr) => {
    console.log("*-----------------------------*")
    for (let i = 0; i < arr.length; i++) {
        console.log(`${i + 1} : ${arr[i]}`);
    }
    console.log("*-----------------------------*")
}
let arr = [];
while (x === 0) {
    let y = prompt("Welcome to TODO!\n1.Add\n2.Delete\n3.Display\n4.Quit\nChoose any operation!(1/2/3/4)");
    let n = parseInt(y);
    if (n === 1) {
        let j = prompt("What would u like to add in TODO?");
        arr.push(j);
        console.log(`${j} added to TODO`);
    }
    else if (n === 2) {
        let j = prompt("Enter index");
        let n=parseInt(j);
        if(n>=arr.length){
            console.log(`No Todo event was present at index ${j}`);
        }
        console.log(`${arr[n]} successfully deleted from TODO`);
        arr.splice(n,1);
    }
    else if (n === 3) {
        if (arr.length === 0) {
            console.log("TODO empty!!");
        }
        disply(arr);
    }
    else if (n == 4) {
        x = 1;
        console.log("Thanks! for using TODO!!")
    }
}
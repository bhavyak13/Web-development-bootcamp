const bcrypt = require('bcrypt');
const pwd = 'ThisIsMyPassword';
const saltRounds = 10;

// let g = '$2b$15$hAl0YjTrnBeYAT7wpkSw6e2xAbqDPpx.xjZ.URIVyYymMI5MLcRJm';
// const fn = async () => {
//     bcrypt.hash(pwd, saltRounds).then(hash => {
//         console.log(hash);
//         g = hash;
//     })
// }
// const fn2 = async () => {
//     bcrypt.compare(pwd, g).then(function (result) {
//         if (result == true) {
//             console.log("OK");
//         } else console.log("NO");
//     });
// }
// // fn();
// fn2();

const fn = () => {
    const hash = bcrypt.hashSync(pwd, saltRounds);
    console.log(hash);
}
const h = '$2b$15$ZXUPkYQgdUsm1edZ/Egme.MVnHgRIJOIJiHBonJ8MH20rN1lugEw2';
// fn();
const fn2 = () => {
    const res = bcrypt.compareSync(pwd, h);
    console.log(res);
}
fn2();
import { franc, francAll } from "franc";
import langs from 'langs';
import color from 'colors';

const inputString = process.argv[2];
// const langCode = franc('Alle menslike wesens word vry')
const langCode = franc(`${inputString}`)

if (langCode === 'und') {
    console.log("Undefined!!".red);
} else {
    const obj = langs.where("3", `${langCode}`);
    if(obj==undefined){
        console.log("Undefined!!".red);
    }else
    console.log(`Our best guess: ${obj.name}`.green);
}
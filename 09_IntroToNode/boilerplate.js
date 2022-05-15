const fs = require('fs');
const path=require('path');
//fs: file system

let folderName = process.argv[2] || 'Project';


// fs.mkdirSync(`${folderName}`);
fs.mkdirSync(path.join(__dirname,`${folderName}`));

try {
    fs.writeFileSync(`${folderName}/index.html`);
    fs.writeFileSync(`${folderName}/app.js`);
    fs.writeFileSync(`${folderName}/styles.css`);
}
catch (e) {
    console.log("Oops soething went wrong!!");
    console.log(e);
}
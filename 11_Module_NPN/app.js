try {
    // const ok = require("./01_import_full_directory");
    // console.log("here's your data from directory 01..");
    // console.log(ok);
    const cowsay = require('cowsay');
    console.log(cowsay.say({
        text: "Hellooo guys",
        e: "0o",
        T: " U"
    }));
}
catch (e) {
    console.log("ufff", e);
}
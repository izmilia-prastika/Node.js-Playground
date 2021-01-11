const fs = require("fs");

/* script untuk membaca file .md ditambah UTF-8 untuk membaca isi file
fs.readFile("./assets/Readme.md", "UTF-8", (err,text) => {
    console.log("file contents read");
    console.log(text);
});
*/

// script untuk membaca file .jpg
fs.readFile("./assets/alex.jpg", (err,img) => {
    //jika muncul error
    if (err) {
        console.log(`An error has orccured: ${err.message}`);
        process.exit();
    }
    console.log("file contents read");
    console.log(img);
});

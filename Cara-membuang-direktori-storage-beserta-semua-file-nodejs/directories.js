/*cara mengganti nama direktori storage-files menjadi storage

const fs = require("fs");

fs.renameSync("./storage-files", "./storage");

*/

//Cara membuang semua file dalam direktori storage, lalu delete direktori storage
const fs = require("fs");

fs.readdirSync("./storage").forEach(fileName => {
    fs.unlinkSync(`./storage/${fileName}`);
});

fs.rmdir("./storage", err => {
    if (err) {
        throw err;
    }
    console.log("./storage directory removed successfully");
});
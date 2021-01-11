/*Cara membuat file baru, isinya dibuat pake script di bawah

const fs = require("fs");
const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");

writeStream.write("hello");
writeStream.write(" world\n");
*/

/*Cara membuat file baru, isinya diinput oleh user
const fs = require("fs");
const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");

process.stdin.on("data", data => {
    writeStream.write(data);
});
*/

/* Cara copy paste isi file lorum-ipsum.md ke file baru myFile.txt
const fs = require("fs");
const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");
const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

readStream.on("data", data => {
    writeStream.write(data);
});
*/

//Cara alternatif copy paste isi file lorum-ipsum.md ke file baru myFile.txt
const fs = require("fs");
const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");
const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

readStream.pipe(writeStream);
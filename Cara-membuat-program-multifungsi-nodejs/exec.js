//cara membuat program pembuka website linkedin learning secara otomatis
//const cp = require("child_process");
//cp.exec("open http://www.linkedin.com/learning");

/*Cara membuat program melihat seluruh file dalam direktori linux/mac
const cp = require("child_process");
cp.exec("ls", (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
});
*/

const cp = require("child_process");
cp.exec("node readStream", (err, data, stderr) => {
    console.log(data);
});
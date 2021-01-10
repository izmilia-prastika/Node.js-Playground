const { inc, dec, getCount } = require("./myModule");
inc(); //fungsi penambahan 1
inc(); //fungsi penambahan 1
inc(); //fungsi penambahan 1
dec(); //fungsi pengurangan 1
dec(); //fungsi pengurangan 1
console.log(getCount()); //fungsi perhitungan yaitu 1+1+1-1-1=2

/*hasil skrip di atas setara dengan skrip di bawah:
const counter = require("./myModule.js");
counter.inc();
counter.inc();
counter.inc();
console.log(counter.getCount());
*/
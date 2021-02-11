//contoh skrip penghitung karakter dari nama



let mahasiswa = ['Sandhika Galih', 'Izmilia Prastika', 'Eric'];

/*pake fungsi express
let jumlahHuruf = mahasiswa.map(function (nama) {
    return nama.length;
});
console.log(jumlahHuruf);
*/

//pake Arrow Function

let jumlahHuruf = mahasiswa.map(nama => nama.length);
console.log(jumlahHuruf);
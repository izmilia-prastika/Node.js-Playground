// for..of
//Contoh Program 1

const mhs = ['Sandhika', 'Doddy', 'Erik', 'Izmi'];

//versi panjangnya
/*for( let i = 0; i < mhs.length; i++) {
    console.log(mhs[i]);
}*/

//versi pendekn;ya
//mhs.forEach(i => console.log(i));

//versi pendek 2
for (const i of mhs) {
    console.log(i);
}

//Contoh program 2
const burung = ['Budgie', 'Cockatiel', 'Lovebird'];

//versi panjang
/*for( let j = 0; j < burung.length; j++) {
    console.log(burung[j]);
}*/

//versi pendek 1
//burung.forEach(j => console.log(j));

//versi pendek 2
for (const j of burung) {
    console.log(j);
}


//Contoh program 3 String
const nama = ['Sandhika', 'Doddy', 'Erik'];
//versi panjang
/*for (const n of nama) {
    console.log(n);
}*/

//versi singkat hasilnya urutan angka
nama.forEach((m, i) => console.log(i));
//versi singkat hasilnya urutan nama
nama.forEach((m, i) => console.log(m));

//cara memunculkan urutan angka beserta nama
/*nama.forEach((m, i) => {
    console.log(`${m} adalah mahasiswa ke-${i + 1}`);
});*/

//cara memunculkan nama beserta index dan array
/*for (const m of nama.entries()) {
    console.log(m);
}*/

//cara memunculkan nama adalah mahasiswa ke m
for (const [i, m] of nama.entries()) {
    console.log(`${m} adalah mahasiswa ke ${i + 1}`);
}
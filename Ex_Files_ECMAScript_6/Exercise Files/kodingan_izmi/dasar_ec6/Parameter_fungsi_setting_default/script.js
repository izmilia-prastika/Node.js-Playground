function pertambahan(x = 3, y = 4) {
    console.log(x + y);
}
console.log("Hasil pertambahan:");
pertambahan();
pertambahan(1, 2);


function pengurangan(a = 2, b = 3) {
    console.log(b - a);
}
console.log("Hasil pengurangan:");
pengurangan();
pengurangan(3, 5);


function perkalian(p = 4, q = 5) {
    console.log(p * q);
}
console.log("Hasil perkalian:")
perkalian();
perkalian(2, 3);


function pembagian(r = 4, s = 8) {
    console.log(s / r);
}
console.log("Hasil pembagian:");
pembagian();
pembagian(5, 10);


function liburan(
    namaKegiatan = "berkebun",
    durasi = 2
) {
    console.log(`Hari Jum'at, Izmi suka melakukan kegiatan ${namaKegiatan} selama ${durasi} jam. `)
}
liburan();
liburan("bermain dengan Parkit", 1.5);
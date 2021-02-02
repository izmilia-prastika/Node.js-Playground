let buku = new Set();
//di browser, index mulai dari 0
buku.add("Pride and Prejudice");
buku.add("War and Peace").add("Harry Potter");

console.log(buku);
//cara melihat jumlah buku
console.log(buku.size);

//cara mencari judul buku bernama Harry Potter
console.log("Ada buku Harry Potter gak?", buku.has("Harry Potter"));

//cara delete buku
buku.delete("Harry Potter");

// cek buku Harry Potter masih ada gk?
console.log("Ada buku Harry Potter gak?", buku.has("Harry Potter"));


/*hasilnya TypeError kalo kyk begini
buku.for(function (item) {
    console.log(item);
});
*/

//kalo mau jalan tanpa error pake cara ini
buku.forEach(function (item) {
    console.log(item);
});

console.log("Ada buku Harry Potter gak?", buku.has("Harry Potter"));
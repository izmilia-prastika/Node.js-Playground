function* starter() {
    yield "Para peserta lomba lari, persiapkan diri di garis Start";
    yield "Tiga";
    yield "Dua";
    yield "Satu";
    yield "Lomba dimulai!";
    
}

let countdown = starter();
//tampilkan isi seluruh objek, done=true artinya tidak ada lagi statement yield, sehingga fungsi generator starter sudah selesai dijalankan. done=false artinya masih ada statement yg harus dijalankan, fungsi generator starter belum selesai dijalankan.
//Fungsi next() berguna untuk menjalankan yield selanjutnya.
console.log(countdown.next());
console.log(countdown.next());
console.log(countdown.next());
console.log(countdown.next());
console.log(countdown.next());

function* finisher () {
    yield "Mari kita lihat siapa peserta lomba pertama, yg mencapai garis finish";
    yield "Peserta x berhasil mencapai garis finish pertama!";
    yield "Peserta y mencapai garis finish kedua";
    yield "Lalu peserta z mencapai garis finish ketiga";
    yield "Sisa peserta yg mencapai garis finish tidak berhasil mendapat juara 1,2,3.";
    yield "Lomba sudah selesai!";
}

let selesai = finisher();
//tampilkan isi nilai aja
console.log(selesai.next().value);
console.log(selesai.next().value);
console.log(selesai.next().value);
console.log(selesai.next().value);
console.log(selesai.next().value);
console.log(selesai.next().value);
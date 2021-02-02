class Peserta {
    constructor(nama, sesi) {
        this.nama = nama;
        this.sesi = sesi;
    }

    get AbsensiPeserta() {
        return `${this.nama} sudah mengikuti Workshop Mebuat Website Progressive dengan React selama ${this.perhitunganAbsensi()} sesi`;
    }

    perhitunganAbsensi() {
        return this.sesi / 1;
    }
}

const peserta1 = new Peserta("Ulfah", 2);
console.log(peserta1.AbsensiPeserta);

const peserta2 = new Peserta("Sarah", 1);
console.log(peserta2.AbsensiPeserta);
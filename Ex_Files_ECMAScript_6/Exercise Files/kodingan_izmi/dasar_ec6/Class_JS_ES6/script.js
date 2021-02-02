class Kendaraan {
    constructor(deskripsi, roda) {
        this.deskripsi = deskripsi;
        this.roda = roda;
    }

    deskripsiKendaraan() {
        console.log(
            `Ini adalah sebuah ${this.deskripsi} dengan ${this.roda} roda.`
        );
    }
}

let kendaraanKeren = new Kendaraan("Kendaraan terkeren", 4);
console.log(kendaraanKeren);
kendaraanKeren.deskripsiKendaraan();
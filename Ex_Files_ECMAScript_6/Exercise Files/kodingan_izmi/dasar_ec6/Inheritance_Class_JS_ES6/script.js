//superclass
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


//penggunaan extends untuk reuse
class Bajaj extends Kendaraan {
    constructor() {
        super("Bajaj terbaru", 4);
    }
}

let bengkelBajaj = new Bajaj();
bengkelBajaj.deskripsiKendaraan();
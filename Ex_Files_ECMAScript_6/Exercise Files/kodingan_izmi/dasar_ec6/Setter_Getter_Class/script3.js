class Rumah {
    constructor(panjang, lebar, tinggi) {
        this.panjang = panjang;
        this.lebar = lebar;
        this.tinggi = tinggi;
    }

    get volumeRumah() {
        return `Hasil perhitungan volume isi rumah yg berbentuk balok adalah ${this.volumeIsiRumah()}, dengan panjang = ${this.panjang}, lebar = ${this.lebar}, dan tinggi = ${this.tinggi}`;
    }

    volumeIsiRumah() {
        return this.panjang * this.lebar * this.tinggi;
    }
}

const rumah1 = new Rumah(3,4,5);
console.log(rumah1.volumeRumah);

const rumah2 = new Rumah(6,8,10);
console.log(rumah2.volumeRumah)

const rumah3 = new Rumah(9,12,15);
console.log(rumah3.volumeRumah)
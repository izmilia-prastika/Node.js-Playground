class Minuman {
    constructor(produk, harga) {
        this.produk = produk;
        this.harga = harga;
    }

    deskripsiMinuman() {
        console.log(
            `Harga minuman ${this.produk} adalah ${this.harga}.`
        );
    }
}

class Fanta extends Minuman {
    constructor() {
        super("Fanta", 5000);
    }
}

let beliFanta = new Fanta();
beliFanta.deskripsiMinuman();

class Cimory extends Minuman {
    constructor() {
        super("Yogurt Cimory", 10000);
    }
}

let beliYogurt = new Cimory();
beliYogurt.deskripsiMinuman();

class jusJeruk extends Minuman {
    constructor() {
        super("Jus Minute Maid Pulpy", 6000);
    }
}

let beliJus = new jusJeruk();
beliJus.deskripsiMinuman();
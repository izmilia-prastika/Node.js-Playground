//tanpa setter dan getter

let peserta = {
    _list: [],
    set addNama(nama) {
        this._list.push(nama);
    },
    get list() {
        return this._list.join(", ");
    }
};

peserta.addNama = "Ayu Dewi Utami";
console.log(peserta.list);

peserta.addNama = "Siti Nur Laeli";
console.log(peserta.list);

peserta.addNama = "Eka Rahayu Pertiwi";
console.log(peserta.list);

peserta.addNama = "Rizqia Nur Fauziah";
console.log(peserta.list);

peserta.addNama = "Ulfah Yuliana Saraswati";
console.log(peserta.list);
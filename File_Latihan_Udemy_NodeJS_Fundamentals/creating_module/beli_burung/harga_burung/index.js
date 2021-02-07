var jenis, harga, lokasi;

exports.setJenis = function(j) {
    jenis = j;
};

exports.setHarga = function(h) {
    harga = h;
};

exports.setLokasi = function(l) {
    lokasi = l;
};

exports.getInfo = function() {
    return{
        jenis   : jenis,
        harga   : harga,
        lokasi  : lokasi
    };
};
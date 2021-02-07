var beli_burung = require('./harga_burung');
beli_burung.setJenis('Parkit Holland');
beli_burung.setLokasi('Depok');
beli_burung.setHarga('Rp.1.000.000');
console.log(beli_burung.getInfo());

beli_burung.setJenis('Nuri Pelangi/Rainbow Lorikeet'),
beli_burung.setHarga('Rp.2.000.000');
beli_burung.setLokasi('DKI Jakarta');
console.log(beli_burung.getInfo());

beli_burung.setJenis('Love Bird Warna Merah Hijau'),
beli_burung.setHarga('Rp.1.500.000');
beli_burung.setLokasi('Bekasi');
console.log(beli_burung.getInfo());
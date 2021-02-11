const siswa = {
    nama: 'Prastika',
    umur: 25,
    email: 'izmi_21@yahoo.co.id'
}

//cara menampilkan nama,umur,email
/*
for (x in siswa) {
    console.log(x);
}
*/

//cara menampilkan Prastika, 25, izmi_21@yahoo.co.id
for (x in siswa) {
    console.log(siswa[x]);
}

const getUserSync = (id) => {
    /*let nama = '';
    if (id === 1) {
        nama = "Izmilia";
    } else {
        nama = 'Prastika';
    }
    */
    // versi singkatnya
    const nama = id === 1 ? 'Izmilia' : 'Prastika';
    return { id, nama };
};

const userPertama = getUserSync(1);
console.log(userPertama);

const userKedua = getUserSync(2);
console.log(userKedua);

const halo = 'Hello World!';
console.log(halo);
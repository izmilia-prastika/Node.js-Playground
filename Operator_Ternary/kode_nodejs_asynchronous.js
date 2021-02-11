const getUser = (id, callback) => {
    const time = id === 1 ? 3000 : 2000;
    setTimeout(( => {
        const nama = id === 1 ? 'Izmilia' : 'Prastika';
        callback({ id, nama });
    }, 1000);
};

const userPertama = getUser(1, (nilai) => {
    console.log(nilai);
});

const userKedua = getUser(2, (nilai) => {
    console.log(nilai);
});

const userKetiga = getUser(3, (nilai) => {
    console.log(nilai);
});

const hello = 'Hello World!';
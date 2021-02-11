//contoh parameternya cuma 1, resolve aja, tanpa memberikan solusi kalo promisnya gk selesai
/*contoh 1
const coba = new Promise(resolve => resolve('selesai'));
console.log(coba);*/

/*contoh2
const coba = new Promise(resolve => {
    setTimeout(() => {
        resolve('selesai')
    }, 2000);
});

//jika waktu sudah 2 detik, jalankan perintah ini
coba.then(() => console.log(coba));
*/

/*contoh 3 Promise, jika waktu < 5 detik, hasilnya selesai, jika > detik, hasilnya Kelamaan!

function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 3000;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve('selesai')
            }, waktu);
        } else {
            reject('Kelamaan!');
        }
    });
}

const coba = cobaPromise();
coba
    .then(coba => console.log(coba))
    .catch(coba => console.log(coba));

tanda ';' hanya dipake di akhir .catch
*/

//contoh 4 Async dan Await
function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 7000;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve('selesai')
            }, waktu);
        } else {
            reject('Kelamaan!');
        }
    });
}

async function cobaAsync() {
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch (err) {
        console.log(err);
    }
}
cobaAsync();
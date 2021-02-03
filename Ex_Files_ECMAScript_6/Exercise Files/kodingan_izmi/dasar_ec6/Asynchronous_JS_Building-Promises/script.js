
const delay = (seconds) =>
    new Promise((resolve) => 
        setTimeout(resolve, seconds * 1000)
    );
console.log("Hasil fungsi delay: ")
console.log("Zero second");
delay(1).then(() => console.log("Hasil fungsi delay: 1 second"));
delay(3).then(() => console.log("Hasil fungsi delay: 3 seconds"));
delay(7).then(() => console.log("Hasil fungsi delay: 7 seconds"));
delay("9").then(() => console.log("Hasil fungsi tunda: 9 second (hasilnya tidak error walaupun dimasukkan string"));

const tunda = (detik) => 
    new Promise((resolve, reject) => {
        if (typeof detik !== "number") {
            reject(
                new Error("seconds must be a number")
            );
        }

        setTimeout(resolve, detik * 1000);
    });
console.log("Hasil fungsi tunda: ")
console.log("Zero second");
tunda(1).then(() => console.log("Hasil fungsi tunda: 1 second"));
tunda(5).then(() => console.log("Hasil fungsi tunda: 5 seconds"));
tunda("10").then(() => console.log("Hasil fungsi tunda: hasilnya pasti error karena dimasukan string"));
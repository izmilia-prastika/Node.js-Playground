let tertawa = "Ha! ";
let lucu = tertawa.repeat(10);
console.log("Suara orang tertawa: ")
console.log(lucu);

let parkit = {
    panggilTeman(times) {
        console.log("Suara parkit memanggil temennya: Chirp! Chiiirp! Chiiirp!".repeat(times));
    },
    bernyanyi(times) {
        console.log("Suara parkit menyanyi: Tweet...Chiirp...Zwiiiiuuuuhh....".repeat(times));
    },
    manja(times) {
        console.log("Suara parkit lagi manja-manjaan: piiip....Piiipp...pipiiip....".repeat(times));
    },
    tidur(times) {
        console.log("Suara parkit mau bobo: Ziuuuhhh....puuurrrr....Zzzzzz....".repeat(times));
    }
};

parkit.bernyanyi(3);
parkit.panggilTeman(4);
parkit.manja(5);
parkit.tidur(7);
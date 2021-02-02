const no = Symbol();

const infoKursus = {
    title: "JavaScript",
    topik: ["strings", "arrays", "objek"],
    no: "kursus-js"
};

infoKursus[no] = 13;
console.log(infoKursus);
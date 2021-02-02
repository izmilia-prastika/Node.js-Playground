let kursus = new Map();

kursus.set("node", { deskripsi: "server" });
kursus.set("express", { deskripsi: "backend" });

console.log(kursus);
console.log(kursus.node);
console.log(kursus.get("node"));

let details = new Map([
    [new Date(), "today"],
    [2, { javascript: ["js", "node", "react"] }],
]);

console.log(details);
console.log(details.size);

//cara mapping objek
details.forEach(function (item) {
    console.log(item);
});
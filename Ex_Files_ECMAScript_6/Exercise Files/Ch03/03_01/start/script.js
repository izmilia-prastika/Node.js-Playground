// ... artinya menambah 3 item

let cats = ["Biscuit", "Jungle"];
let dogs = ["Stella", "Camper"];

let animals = ["Smoky", "Miro", "Swimmy", cats, dogs];
let animals2 = ["Smoky", "Miro", "Swimmy", ...cats, ...dogs];
console.log(animals);
console.log(animals2);
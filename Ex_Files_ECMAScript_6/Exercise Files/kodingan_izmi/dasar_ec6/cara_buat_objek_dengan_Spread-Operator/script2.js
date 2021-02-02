const sekolah = {
    sarapan : "nasi telor",
    siang : "rendang"
};

const pulang = "soto daging";

const bekal = {
    ...sekolah,
    pulang
};

console.log(bekal);
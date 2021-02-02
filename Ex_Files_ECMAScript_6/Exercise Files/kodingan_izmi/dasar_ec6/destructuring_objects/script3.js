const destinasi = {
    destination: "Indonesia",
    travelers: 4,
    activity: "hiking",
    cost: "expensive"
};

function buy({ destination, activity }) {
    return `Come to ${destination} and do some ${activity}`;
}

console.log(buy(destinasi));

const { title, price} = {
    title: "lava pizza",
    price: 60.000,
    decsription: "A newest pizza with cheese melt",
    ingredients: [
        "bread",
        "mozarella cheese",
        "beef",
        "sausage",
        "egg"
    ]
};

console.log(title);
console.log(price);

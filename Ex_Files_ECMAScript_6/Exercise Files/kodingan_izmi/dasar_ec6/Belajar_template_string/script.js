function print(Name) {
    console.log(`Hello ${Name}`);
}

print("Tika");

function bikinEmail(Name, Price) {
    let belanja = 5.95;
    console.log(`Hi ${Name}, Thanks!
        Harga: $${Price}
        Shipping: $${belanja}
        Total: $${Price + belanja}
    `);
}

bikinEmail("Izmi", 100)
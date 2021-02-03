//cara menggunakan arrow function this 

let person = {
    name: "Izmilia",
    hobby: ["watching", "nap", "eat", "bird", "coding"],
    printHobby: function () {
        let _this = this;
        this.hobby.forEach(function (hobbies) {
            let string = `${_this.name} likes to ${hobbies}`;
            console.log(string);
            console.log("");
        });
    }
};

let person2 = {
    name: "Izmilia",
    hobby: ["watching", "nap", "eat", "bird", "coding"],
    printHobby2: function () {
        this.hobby.forEach((hobbies) => {
            let string2 = `${this.name} likes to ${hobbies}`;
            console.log(string2);
        });
    }
};

person.printHobby();
person2.printHobby2();
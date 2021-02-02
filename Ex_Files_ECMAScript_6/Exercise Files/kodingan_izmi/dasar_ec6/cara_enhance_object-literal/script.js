function callYell(name, sound) {
    return {
        name: name,
        sound: sound,
        powderYell: function () {
            let yell = this.sound.toUpperCase();
            console.log(`${yell}! ${yell}!`);
        }
    };
}

callYell("Izmi", "Woo").powderYell();
function callYell(name, sound) {
    return {
        name,
        sound,
        powderYell: function () {
            let yell = this.sound.toUpperCase();
            console.log(`${yell}! ${yell}!`);
        }
    };
}

callYell("Tika", "yeah").powderYell();
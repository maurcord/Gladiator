class Gladiator {
    constructor(name, weapon){
        this.name = name
        this.weapon = weapon
    }
}
class Arena {
    constructor(name){
        this.name = name 
    }
}

const max = new Gladiator("Maximus", "Trident");
const troy = new Gladiator("Troy", "Spear");
const hect = new Gladiator("Hector", "Club");
console.log(hect.name)
const captOne = new Arena("Capitol One Arena");
console.log(captOne.name)


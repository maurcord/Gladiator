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
const hector = new Gladiator("Hector", "Club");
console.log(hector.name)
const captOne = new Arena("Capitol One Arena");
console.log(captOne.name)

const publication = "freeCodeCamp";
publication[0].toUpperCase();
console.log(publication)
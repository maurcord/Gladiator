
class Gladiator {
    constructor(name, weapon){
        this.name = name
        this.weapon = weapon
    }
}

class Arena {
    constructor(name, gladiators){
        this.name = name.charAt(0).toUpperCase() + name.slice(1)
        this.gladiators = []
 } 
  
    addGladiator(gladiator){
      if(this.gladiators.length < 2) {
        this.gladiators.push(gladiator)

    }}}

console.log()
const max = new Gladiator("Maximus", "Trident");
const troy = new Gladiator("Troy", "Spear");
const hector = new Gladiator("Hector", "Club");

const colosseum = new Arena("colosseum");
// console.log(colosseum.name)


colosseum.addGladiator(max);
// console.log(colosseum.gladiators)
colosseum.addGladiator(troy);
// console.log(colosseum.gladiators[0].name)
// console.log(colosseum.gladiators[0].name)
colosseum.addGladiator(hector);









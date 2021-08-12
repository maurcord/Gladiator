    

class Gladiator {
    constructor(name, weapon){
        this.name = name;
        this.weapon = weapon;
    }
}

class Arena {
    constructor(name, gladiators){
        this.name = name.charAt(0).toUpperCase() + name.slice(1)
        this.gladiators = []  
    } 
  
    addGladiator(gladiator){
            this.gladiators.push(gladiator)
            var arenaFighters = this.gladiators.sort(function(){return 0.5 - Math.random()});
                if(this.gladiators.length < 2) {
                console.log( "There are two fighters in the arena!")
            }
        }
        fight() {
        console.log("There is a battle in the", this.name, "." , this.gladiators[0].name, " & " , this.gladiators[1].name , " are in the arena!" )

        if(this.gladiators[0].name == "Troy" && this.gladiators[1].name == "Maximus"){
            console.log("Troy is fighter 1", "and Maximus is fighter 2! Maximus defeats Troy with his mighty Trident!")
        } 
        if(this.gladiators[0].name == "Hector" && this.gladiators[1].name == "Maximus"){
            console.log("Hector is fighter 1", "and Maximus is fighter 2! Hector mutilates Maximus with his mighty club!")
        }
        if(this.gladiators[0].name == "Troy" && this.gladiators[1].name == "Hector"){
            console.log("Troy is fighter 1", "and Hector is fighter 2! Troy defeats Hector with his super sharp spear!")
    }   i
        }
}




var max = new Gladiator("Maximus", "Trident");
var troy = new Gladiator("Troy", "Spear");
var hector = new Gladiator("Hector", "Club");
var colosseum = new Arena("colosseum");

colosseum.addGladiator(max);
colosseum.addGladiator(troy);
colosseum.addGladiator(hector);

colosseum.fight()












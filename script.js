    

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
           //Pushes gladiators into array
            this.gladiators.push(gladiator)
            // Randomizes array
            this.gladiators.sort(function(){return 0.5 - Math.random()});

            // If there are more than 2 gladiators in the array, this will remove the last one
            if(this.gladiators.length > 2){
                console.log(`${this.gladiators[0].name} and ${this.gladiators[1].name} have entered the ${this.name}!`)
                return this.gladiators.pop()
            }}
        

    fight() {
          if(this.gladiators[0].name == "Troy" && this.gladiators[1].name == "Maximus" || this.gladiators[0].name == "Maximus" && this.gladiators[1].name == "Troy"){
          console.log("Troy is fighter 1", "and Maximus is fighter 2! Maximus defeats Troy with his mighty Trident!")

} 
        if(this.gladiators[0].name === "Hector" && this.gladiators[1].name === "Maximus" || this.gladiators[0].name == "Maximus" && this.gladiators[1].name == "Hector"){
            console.log("Hector is fighter 1", "and Maximus is fighter 2! Hector mutilates Maximus with his mighty club!")
        }
        if(this.gladiators[0].name === "Troy" && this.gladiators[1].name === "Hector" || this.gladiators[0].name == "Hector" && this.gladiators[1].name == "Troy"){
            console.log("Troy is fighter 1", "and Hector is fighter 2! Troy defeats Hector with his super sharp spear!")
        }}

    entertained() {
            if(this.gladiators[0].name === "Maximus" || this.gladiators[1].name === "Maximus"){
            console.log(`Maximus is in the arena, The crowd is entertained!`)
        }
    }

    vote(){
    
    }
}



let max = new Gladiator("Maximus", "Trident");
let troy = new Gladiator("Troy", "Spear");
let hector = new Gladiator("Hector", "Club");
let colosseum = new Arena("colosseum");

colosseum.addGladiator(max);
colosseum.addGladiator(troy);
colosseum.addGladiator(hector);

console.log(colosseum.gladiators);

colosseum.fight()
colosseum.entertained()












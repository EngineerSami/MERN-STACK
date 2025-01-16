class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100; 
        this.speed = 3; 
        this.strength = 3; 
    }

    sayName() {
        console.log(`Name: ${this.name}`);
    }

    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }

    drinkSake() {
        this.health += 10;
        console.log(`${this.name} drinkSake give him 10 health. Current health: ${this.health}`);
    }
}

const ninja1 = new Ninja("Sami");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

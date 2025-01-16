class Ninja {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.speed = 3;
      this.strength = 3;
    }
  
    drinkSake() {
      this.health += 10;
    }
  
    showStats() {
      console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }
  }
  
  class Sensei extends Ninja {
    constructor(name) {
      super(name);
      this.health = 200;
      this.speed = 10;
      this.strength = 10;
      this.wisdom = 10;
    }
  
    speakWisdom() {
      this.drinkSake();
      console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
  }
  
  const superSensei = new Sensei("Master Sami");
  superSensei.speakWisdom();
  superSensei.showStats();
  
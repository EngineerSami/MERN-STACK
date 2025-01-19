class Unit {
    constructor(name, cost, power, resilience) {
      this.name = name;
      this.cost = cost;
      this.power = power;
      this.resilience = resilience;
    }
  
    applyEffect(effect) {
      if (effect.stat === "power") {
        this.power += effect.magnitude;
      } else if (effect.stat === "resilience") {
        this.resilience += effect.magnitude;
      }
    }
  
    attack(target) {
      console.log(`${this.name} attacks ${target.name}!`);
      target.resilience -= this.power;
      console.log(`${target.name} now has ${target.resilience} resilience.`);
    }
  
    toString() {
      return `${this.name} (Cost: ${this.cost}, Power: ${this.power}, Resilience: ${this.resilience})`;
    }
  }
  
  class Effect {
    constructor(name, cost, text, stat, magnitude) {
      this.name = name;
      this.cost = cost;
      this.text = text;
      this.stat = stat;
      this.magnitude = magnitude;
    }
  
    toString() {
      return `${this.name} (Cost: ${this.cost}, ${this.text})`;
    }
  }
  
  const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
  const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
  
  const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
  const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
  const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);
  
  console.log("Turn 1:");
  console.log(`Playing ${redBeltNinja.toString()}`);
  redBeltNinja.applyEffect(hardAlgorithm);
  console.log(`After applying ${hardAlgorithm.name}, ${redBeltNinja.toString()}\n`);
  
  console.log("Turn 2:");
  console.log(`Playing ${blackBeltNinja.toString()}`);
  redBeltNinja.applyEffect(unhandledPromiseRejection);
  console.log(`After applying ${unhandledPromiseRejection.name}, ${redBeltNinja.toString()}\n`);
  
  console.log("Turn 3:");
  redBeltNinja.applyEffect(pairProgramming);
  console.log(`After applying ${pairProgramming.name}, ${redBeltNinja.toString()}`);
  redBeltNinja.attack(blackBeltNinja);
  console.log(`After attack, ${blackBeltNinja.toString()}`);
  
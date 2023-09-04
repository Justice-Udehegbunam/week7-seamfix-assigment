//First define animal class
class Animal {
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  }

  // Secondly make the animal's sound
  makeSound() {
    console.log(`${this.species} + is making + ${this.sound}`);
  }
}
// Create a class for a dog
class Dog extends Animal {
  constructor(species, sound, color) {
    super(species, sound);
    this.color = color;
  }

  // Finally make the dog's sound
  makeSound() {
    console.log(
      `${this.species}, ${this.color} makes this sound:  ${this.sound}`
    );
  }
}

const billyDog = new Dog("Billy", "woof", "blue");
billyDog.makeSound();

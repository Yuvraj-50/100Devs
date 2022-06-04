class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

class cow extends Animal {
  constructor(name, gender) {
    super(name);
    this.gender = gender;
  }
}

const mangli = new cow("mangli", "female");
console.log(mangli);

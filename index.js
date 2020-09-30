class Fruit{
  constructor(fruit){
    this.fruit = fruit;
  }
  sayYummy() {
    console.log(this.fruit)
  }
}

let apple = new Fruit('apple pie')
let orange = new Fruit('orange juice')

let fruits = [apple, orange]
fruits.forEach(x => x.sayYummy())
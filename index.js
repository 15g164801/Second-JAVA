class Fruit{
  constructor(fruit){
    this.fruit = fruit;
  }
  sayYummy() {
    return 0
  }
}
class Melon extends Fruit {
  constructor(circumference) {
    super('Melon')
    this.circumference = circumference;
  }
doMelon() {
  return (this.circumference + 20)
}
}

let fruits = [
  new Melon(2),
  new Melon(4)
]
fruits.forEach(x => console.log(x.doMelon()))
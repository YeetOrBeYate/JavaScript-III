function Bottom(items){
  this.type = items.type;
  this.socksColor = items.socksColor;
  this.shoes = items.shoes;
}

Bottom.prototype.bottomFit = function(){
  return `${this.type} paired with ${this.shoes} and ${this.socksColor} socks`;
}

function Outfit(lucks){
  //
  Bottom.call(this, lucks);

  this.top = lucks.top;
  this.jewelery = lucks.jewelery;
  this.hat = lucks.hat;
}

Outfit.prototype = Bottom.prototype;

Outfit.prototype.topFit = function(){
  return `${this.top} with a ${this.jewelery} and a ${this.hat} hat`;
}

function Person(attirbute){
  Outfit.call(this, attirbute);
  this.name = attirbute.name;

}

Person.prototype = Outfit.prototype;

Person.prototype.sayHi = function(){
  return `${this.name} says Hi!`;
}

const kyle = new Person({
  type: "Shorts",
  socksColor: "white",
  shoes: "Jordan twelves",
  top: "solid-color-Tee",
  jewelery: "Gold cuban link",
  hat: "Falcons cap",
  name: "Kyle"
})

console.log(kyle.bottomFit());
console.log(kyle.topFit());
console.log(kyle.sayHi());

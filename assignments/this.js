/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.Window Binding- If you dont have anything bound to this, it defaults just to the window(and will return undefined)
* 2.Implicit Binding- when a function is invoked on the object/variable that is called that function
* 3.Explicit Binding- Force a function  using 'this' on an object
* 4.New Binding-
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function ghost(){
  console.log(this.boo);
}

const boo = "";

ghost();

// Principle 2

// code example for Implicit Binding

const Denzel = {
  name: "Denzel Curry",
  boo: "Who's that peeking in my window? Baby, please pass the extendo",
  verse: function(){
    console.log(this.boo);
  }
}

Denzel.verse();

// Principle 3

// code example for New Binding

function Rapper(name, verse){
  this.rName = name,
  this.rVerse = verse
}

let kyle = new Rapper("Yeet", "Lambda is so rad");

Rapper.prototype.rap = function(){
  console.log(`${this.rName} dropped the hotests verse: ${this.rVerse}`);
}

kyle.rap();


// Principle 4

// code example for Explicit Binding

const Travis = {
  name: "Travis Scott",
  boo: "Who's that creeping through my window? Before you come outside I got the M4",
}

function sayVerse(){
  console.log(this.boo);
}

sayVerse.call(Travis);

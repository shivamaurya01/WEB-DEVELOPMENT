//Methods in array 
//Push methode 
let cars = ["audi","maruti","Bmw",];
cars.push("Toyota");
console.log(cars);
cars.push("Ferrari");
console.log(cars);
cars.unshift("Bolero");
console.log(cars);
cars.pop(cars);
console.log(cars);
cars.shift(cars);
console.log(cars);

//use case

let followers = ["a","b","c","d"];
let blocked = followers.shift(followers);
console.log(followers);
console.log(blocked);

//practice question
let months =["january","july","march","august",];
console.log(months);
months.shift(months);
months.shift(months);
months.unshift("june");
months.unshift("july");
console.log(months);

// methods

let car = [ "maruti","wagonar","g-wagon","baleno"];
console.log(car.indexOf("baleno"));

let marks = [88,78,99,90,23,22];
console.log(marks.indexOf(99));
console.log(marks.includes(22));

//concat in array
 let primary = ["red","yellow","green"];
 let secondary = ["pink","blue"];
 console.log(primary.concat(secondary));
 console.log(secondary.concat(primary));

 //reverse in array
 console.log(primary.reverse(primary));


 //slice methods
 let fruits = ["grapes","mango","banana","papaya","blackberry"];
 console.log(fruits.slice(2));
 console.log(fruits.slice(1,2));
 console.log(fruits.slice(-1));

 //Splice methode
  let animal = ["Bear","dear","monkey","jackal","dog"];
  console.log(animal.splice(2));
  console.log(animal.push("Meat"));
  console.log(animal);
  animal.splice(2,1,"Lion");
  console.log(animal);
  animal.splice(0,0,"monkey");
  console.log(animal);


  //Sort an array
  let model = ["maruti","jeep","fortuner","innova","swift"];
  console.log(model.sort());
  let char  = ["a","c","b","e","d"];
  console.log(char.sort());

  //Question

  let arr = ["january","july","march","august"];
  arr.splice(0,2,"july","june");
  console.log(arr);
  
  let lang = ["c","c++","html","javascript","pyhton","java","c#","sql"];
  lang.reverse(lang);
  console.log(lang);
  console.log(lang.indexOf("javascript"));
  console.log(lang[4]);
  
//array reference
console.log([1]==[2]);
let ref = [1,2];
let arrcopy = ref;
console.log(arrcopy==ref);
ref.push(9);
console.log(ref);
console.log(arrcopy)
console.log(ref==arrcopy);

//constant array
const num = [4,5,7,9,2];
console.log(num.push(10));
console.log(num);
num.pop();
console.log(num);
//in constant array we can add and delete the element from the array
num = [7,90,392,90];
//in constant array we can not assign the new array to the array


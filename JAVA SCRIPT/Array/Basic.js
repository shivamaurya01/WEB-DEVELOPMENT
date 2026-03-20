//Define the element

let student1 = "aman";
let student2 = "shankar";
let student3 = "Jiya";
let student4 = "shiva";
//creating array
let students = ["Shiva","Aman","Sandip","Jeevan"];
console.log(students[0][4]);//this is called methode chaining in array
console.log(students[3]);
console.log(students);
console.log(typeof students);
console.log(students[2].length);

//Mixed array
let info = ["Shiva",0,90,8.4];
console.log(info);

//Empty array
let empArray = [];
console.log(empArray);

//Array are mutable
let fruits = ["Mango","Banana","litchi"];
fruits[2] = "apple";
fruits[10] = "fizz";//it will make empty space in the array
console.log(fruits);

let name = ["Rohit"];
name[0] = "Mohit";
console.log(name);
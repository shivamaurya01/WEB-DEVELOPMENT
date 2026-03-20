let input = document.createElement("input");
let button = document.createElement('button');
button.innerText = "click me";

//document.querySelector("body").append(input);
document.querySelector("body").append(button);

//Question no 2
//Answer 1
input.placeholder = "username";
document.querySelector("body").append(input);
//By using manipulating attribute
input.setAttribute("placeholder","yourname");
//Answer 2
button.setAttribute("id","btn");

//Question 3

let btn = document.querySelector('#btn');
btn.classList.add("color");

//Queastion 4
let h1 = document.createElement('h1');
h1.innerHTML  = "<u>DOM Practice</u>";
h1.classList.add("style");
document.querySelector("body").append(h1);
//Question 5 

let para1 = document.createElement("para1");
para1.innerText = "Apna College Delta Practice";
para1.classList.add("color1");
document.querySelector("body").append(para1);
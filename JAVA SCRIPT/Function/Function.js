function hello(){
    console.log("Hello");
}
function printName() {
    console.log("Shiva Maurya");
    console.log("This is the methode in which we are calling function");
}
function print1to5(){
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}
function isadult(){
    let age = 20;
    if(age>=18){
        console.log("adult");
    }
    else{
        console.log("Not adult");
    }
}
function poem(){
    console.log("Twinkle,Twinkle Little start");
    console.log("How, are you wonder what you are");
}
function rolldice(){
    console.log(Math.floor(Math.random()*6)+1);
}
hello();
printName();
print1to5();
isadult();6
poem();
rolldice();

//Print function with argument 

function printInfo(name,age){
    console.log(`I am  ${name} and I am ${age} year old `);
}
printInfo("Shiva",18);
printInfo("Anuj",20);

//print sum of the two number 

function printsum(a,b){
    console.log(a+b);
}
printsum(4,2);
printsum(9,10);
//print the average of the three number
// function average(a,b,c){
//     console.log(`Average is ${(a+b+c)/3}`);
// } 
// average(2,3,4)

// function table(n){
//     for(let i =1;i<=10;i++){
//         console.log(i*n);
//     }
// }
// table(prompt("Enter the number : "));

//return keyword
 function sumoftwo(a,b){
    return a+b;
 }
console.log(sumoftwo(4,3));

//how the return is work
function hello(a,b){
    console.log("Hello");
    console.log("Jii");
    return a+b;
    console.log("This will not execute");
}
hello();
console.log(hello(4,5));

//Return the sum from 1 to n;

function sumfrom1ton(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum = sum+i;
    }
    return sum;
}

console.log(sumfrom1ton(5));
console.log(sumfrom1ton(10));
console.log(sumfrom1ton(1000));

//return the concatination of the array

function concat(str){
    let  result="";
    for(let i=0;i<str.length;i++){
        result = result +str[i];
    }
    return result;
}

let str = ["hello","hii","bye"];
console.log(concat(str));

//Block scope

// {
    
//     let a= 567;
//     let b= 423;

// }
// console.log(a);
//console.log(b);

//Outer Scope 

//Lexical scope

 function outerFun(){
    let a = 10;
    let b = 19;
    function innerFun(){//inner function 
        console.log(a);
        console.log(b);
    }
    innerFun();

 }
console.log(outerFun());
//practice question 

let greet = "hello";//global scope
function changeGreet() {
    let greet = "namaste";//fuction scope
    console.log(greet);
    function innerGreet(){
        console.log(greet);//lexical scope
    }
    innerGreet();
}
console.log(greet);
changeGreet();

//Function Expression
let sum = function(a,b){
    return a+b;
}
console.log(sum(3,5));

let hellow = function(){
    console.log("Hello");
}
hellow();

hellow = function(){
    console.log("namaste")
}

//higher order function 
 function multipleGreet(func,count){//higher order function
    for(let i =1;i<=count;i++){
        func();
    }
}

let gret = function(){
    console.log("hello");
}
console.log(multipleGreet(gret,3));

//test the function 


function oddorEvenFactory(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2==0));
        }
        return odd;
    } else if(request == "even"){
        return function(n){
        console.log(n%2==0);
    }
    return even;
    }else{
        console.log("Wrong request");
    }
}

let request = "odd"; 
//request = "even";
let func = oddorEvenFactory(request);
console.log(func(4));
console.log(func(3));
console.log(func(5));

//Methods 

const calculator={
   // add:function(a,b){ 
    add(a,b){//this is the shorthand which is used
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
}
console.log(calculator.add(3,5));
console.log(calculator.sub(5,3));
console.log(calculator.mul(3,5));
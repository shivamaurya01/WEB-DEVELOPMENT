//Reducer function which help to reduce the array in the single value
let nums = [2,3,4,5];
let finalVal = nums.reduce((res,el)=> res+el);
console.log(finalVal);

// //finding maximum in an array 
let num = [2,3,4,5,6,7,8,1,2];
let maxx = -1;
let result = num.reduce((maxx,el) =>{
    if(maxx < el){
        return el;
    }
    else{
        return maxx;
    }

}
);
console.log(result);

//using loop find the max element

let arr = [2,4,5,23,12,34,5,0];
let max = -1;
for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
        max = arr[i];

    }
}
console.log(max);

//check if all numbers in our arrray are multiple of 10 or not.

// let number  = [10,20,30,40];
// console.log(number.every((el) => (el%10==0)));

//create a function to find the min number in array.

//let number = [4,12,3,4,2,1];
function getMin(number){
let minimum = number.reduce((min,el) => {
    if(min>el){
        return el;
    }
    else{
        return min;
    }

});
    return minimum;
}
// console.log(minimum);
let number = [2,3,4,5,2,1,0,10,-1];
console.log(getMin(number));

//Default parameters 
 
function Sum(a =1,b){
    return a+b; 
}
console.log(Sum(5));// value of a=5,b is not define it take the number order wise;
console.log(Sum(2,2));

//Spread expands the data into the iterable form  
console.log(Math.max(2,3,4,5));
console.log(Math.min(2,3,4,5));
 

let ex = [1,223,4,3,5,6,7,8,9,0];
console.log(Math.min(...ex));  
ex.push(-12);
console.log(Math.min(...ex));
ex.pop(-12);
console.log(Math.min(...ex));
console.log(Math.max(...ex));

console.log(...ex);
console.log(..."apnacollege");

// copy of the array

let fruits = ["apple","mango","papaya"];
let newArr = [...fruits];
newArr.push("Lichhii");

let chars = [..."hello"];
let odd = [1,3,5,7];
let even = [2,4,6,8];
let common = [...odd,...even];


//spread with the object literals 

let data = {
    email: "er.shiva2327@gamil.com",
    password: "abcd",

};

let dataCopy = {...data , id:123 , country: "India"};

let obj = {..."Hello"};

let arr1 = [2,3,4,5,6,1];
let obj1 = {...arr1};

//rest function which is the opposite of the  spread

function sum(...args){

    //arguments
    for(let i=0;i<args.length;i++){
        console.log("you gave us args", args[i]);
    }
}

function min(){
    console.log(arguments);
    console.log(arguments.length);
    
}

function summ(...nums){
    return nums.reduce((sum,el)=>sum+el);
}

//by using rest methode which help to take indefinite arguments as the input ; 
function minn(msg,...num){
    console.log(msg);
    return num.reduce((el,min)=>{
        if(min>el){
            return el;
        }else{
            return min;
        }
    });
}

//Destructuring of the array

let names = ["tony","bruce","peter","steve"];
// let winner = names[0];
// let runnerup = names[1];
// let secondrunnerup = names[2];

let [winner,runnerup,secondrunnerup] = names;//it access the element from start towards the end 

//Destructuring of the object
const student = {
    name: "karan",
    age: 15,
    class: 9,
    subject: ["hindi","english","math","science"],
    username: "karan@123",
    password: "abcd",
    city: "pune"

};
// let username = student.username;
// let password = student.password;

let {username:user ,password:secret,city="Mumbai"} = student;

//Arrow function 
const sum =(a,b) =>{
    console.log(a+b);
};
console.log(sum(2,3));

const cube=n =>{
     return n*n*n;
};
console.log(cube(4));

const pow = (p,q) =>{
    return p**q;
};
console.log(pow(2,3));

const hello= () =>{
    console.log("Hello world");
};
hello();

//implicit return 

const mul = (a,b) =>(a*b);
console.log(mul(5,3));

//Set timeout (It execute the task after the time)

// console.log("Hii there!");

// setTimeout(() =>{
//     console.log("Hello timeout");
// },4000);

//Set interval(it execute the task multiple time after the interval)
// console.log("hello");
// let id = setInterval(() =>{
//     console.log("Hello this is the interval");
// },2000);
// console.log(id);
// let id1 = setInterval(() =>{
//     console.log("Hello jii");
// },3000);
// console.log(id1);


//this with the arrow function 

const student = {
    name: "shiva",
    marks: 90,
    prop: this, //global scope
    getName: function () {
        console.log(this);
        return this.name;
    },
    getmarks: () => {//arrow function
        console.log(this);//parent's scope
        return this.marks;
    },
    getInfo1: function() {
        setTimeout( () => {
            console.log("Apna College");//Student object
        },2000); 
    },
    getInfo2: function() {
        setTimeout(function (){
            console.log(this);//Window object
        },2000);
    },
};
//console.log(this);


// write an arrow function which simply return the square of a number 'n'
// const square=(n)=>{
//     return n*n;
// }
const square = (n) =>(n*n);

console.log(square(5));

//write the function which print the hello world 5 times in interval of the 2s each 
let id = setInterval(() =>{
    console.log("Hello World");
},2000);
 setTimeout(()=>{
    clearInterval(id);
    console.log("Interval  is clear now");
 },10000);
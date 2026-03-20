//forEach function 

let arr = [20,30,40,50,25];


arr.forEach( (el) => {
    console.log(el);
});
arr.forEach(function(el){
    console.log(el);
});

// let print = function (el){
//     console.log(el);
// };

// arr.forEach(print);

let students =[{
    name: "shiva",
    marks: 80,

},
{
    name: "shradha",
    marks: 90,
},
{ 
    name: "rajat",
    marks: 99,

},
];

let gpa = students.map((el) =>{
    return el.marks / 10;
});

// obj.forEach( (student) =>{
//     console.log(`${student.name} ${student.marks}`);
// }

//);

//Map methode

let num = [1,2,3,4];
let double = num.map((el) => {
    return el*2;
});


//Filter methode 

let nums = [1,2,4,3,5,6,8,10];
let ans = nums.filter((el) => {
    //return el%2 == 0; //even -> true , odd -> false;
    return el<5;
});

//Every methode 

let even = [2,4,5,6,8];

console.log(even.every((el) => (el%2==0)));

//Some methode 
 
let odd = [1,3,5,2,4];
console.log(odd.some((el) =>(el%2!=0)));


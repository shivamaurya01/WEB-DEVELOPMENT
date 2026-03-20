let student= {
    name: "shiva",
    age: 24,
    marks: 90
};
//console.log(student);

let student2 = ["shiva", 23 , 90];
console.log(student2);

const item = {
    price : 100.99,
    discount: 20,
    colors: ["red","pinnk"]
};
console.log(item);

//Create the Twitter post

const post = {
    username : "@shivva_maurya",
    content : "This is MY journey of hustling",
    Likes : 150,
    reposts : 5,
    tags : ["@Motivation","@DailyChallenges"]
};
console.log(post);

//Getting values from the object literals
console.log(post["tags"]);
console.log(post["Likes"]);
console.log(post.username);
console.log(post.reposts);

//Conversion of teh get  values

const obj = {
    1: "a",
    2: "b",
    true : "c",
    null : "d",
    undefined :"e"
};

console.log(obj);
console.log(obj[1]);
console.log(obj.true);

//Add and Update the value

const data = {
    name : "Jatin",
    profession: "Teacher",
    age : 45,
    city : "Lucknow",
    salary: 70000,
    gender: "male"

};
console.log(data);

data.city = "Mumbai";
console.log(data.city);
student.gender = "female";
console.log(data.gender);

data.status = "married";
console.log(data);
//delete
delete data.name;
console.log(data);
delete data.salary;
console.log(data);

//Nested Object

const classInfo = {
    aman: {
        grade: "A+",
        city:"Delhi"
    },
    shradha:{
        grade: "O",
        city: "Mumbai"
    },
    karan:{
        grade: "B",
        city : "Lucknow"
    }
};

console.log(classInfo);
console.log(classInfo.aman);
console.log(classInfo.karan);
classInfo.karan.city = "Nepal";
console.log(classInfo);

//Array of Object 

const classInfoo = [
    {
        name: "shiva",
        grade: "A+",
        city: "Banglore"
    },
    {
        name :"Navin",
        grade: "O",
        city: "Pune"
    },
    {
        name : "Jatin",
        grade: "F",
        city: "Bhopal"
    }
];
console.log(classInfoo);

classInfoo[1].city= "Guragon";
console.log(classInfoo[1]);

//Math Object 
console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(-19));
console.log(Math.pow(2,4));
console.log(Math.floor(-5.9999));//Round off toward's the nearest smallest integer value
console.log(Math.floor(9.100));
console.log(Math.ceil(7.88));//Round off the toward's the largest integer value
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

//Random Integer  of range 10

 let step1 = Math.random();
 console.log(step1);
 let step2 =  step1 *10;
 let step3 =  Math.floor(step2);
 console.log(step3);

 console.log(Math.floor(Math.random()*10));
 //Math.random will generate the number till 9 if we want to the range of 10 then we have to add +1 in the last answer; 
 console.log(Math.floor(Math.random()*10)+1);

 //print the number range between 20 to 25

 console.log(Math.floor(Math.random()*5)+21);


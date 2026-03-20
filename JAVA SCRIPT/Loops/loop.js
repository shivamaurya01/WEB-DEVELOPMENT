//For loop

// 
//Infinite loop 
// for(let i=1;i>=0;i++){
//     console.log(i);
// }
//  for(let i=1; ;i++){
//     console.log(i);
// }

//Multiplication of the table 5
// let n = prompt("Enter the number : ");
// for(let i =1;i<=10;i++){
//     console.log(i*n);
// }
// for(let i =5 ;i<=50;i=i+5){
//     console.log(i);
// }

//NESTED LOOP
// for(let i =1;i<=3;i++){
//     console.log(`outer loop ${i}`);
//     for(let j=1;j<=3;j++){
//         console.log(j);
//     }
// }

//While LOOP
let i =  1;
while(i<=10){
    console.log(i);
    i=i+2;
}


//Loop with arrays
let fruits = ["apple","lichhi","mango","banana","grapes"];
for(let i =0 ;i<fruits.length;i++){
    console.log(i,fruits[i]);
}
for(let i=fruits.length;i>=1;i--){
    console.log(i,fruits[i]);
}

//Loop with nested array's
let heroes = [["superman","ironman","shaktiman"],["wonder woman","superman","thor"]];
for(let i=0; i<heroes.length; i++){
    console.log(i,heroes[i]);
    console.log(heroes[i].length);
    for(let j=0;j<heroes[i].length;j++){
        console.log(`j=${j},${heroes[i][j]}`);

    }
}

let marks =[["aman",90],["jiya",78],["nitin",56]];
for(let i=0;i<marks.length; i++){
    console.log(`info of student no ${i+1}`);
    for(let j=0;j<marks[i].length;j++){
        console.log(marks[i][j]);
    }
}

// for of loop
let animals = ["dog","jackel","tiger","fox"];
for(animal of animals){
    console.log(animal);
}

for(char of "apanacollege"){
    console.log(char);
}

//nested for of loop
let names = [["nitin","shiva","akanshu"],["aditya","avni","abhay"]];
for(student of names){
    for(name of student){
        console.log(name);
    }
}
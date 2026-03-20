//Question No 1
// let num = 80;
// if(num%10==0){
//     console.log("Good");
// }
// else{
//     console.log("Bad");
// }

// //Question no 2

// let name = prompt("Enter your name: ");
// let age  = prompt("Enter your age: ");
// let info = `${name} is ${age} years old `;//use template litrels
// alert(info);

//Question 3 
// let month =1;
// switch(month){

//     case 1 :{
//         console.log("January,feb,march");
//         break;
//     }
//     case 2:{
//         console.log("April,May,June");
//         break;
//     }
//     case 3:{
//         console.log("July,Aug,Sep");
//         break;
//     }
//     case 4:{
//         console.log("Oct,Nov,Dec");
//         break;
//     }
//     default:{
//         console.log("You enter the wrong value");
//     }


// }

// //Question 4

// let str = 'Apple';
// let n = str.length;
// if(str[0] === 'A' && n>5){
//     console.log("Golden String");
// }
// else{
//     console.log("Not the golden String ");
// }

// //Write a program to find the largest of 3 number.

// let num1 = prompt("Enter the num1: ");
// let num2 = prompt("Enter the num2: ");
// let num3 = prompt("Enter the num3: ");
// //let number = (`$(num1) $(num2) $(num3)`);
// if(num1>num2){
//     if(num1>num3){
//         //console.log(num1+" it is the greatest");
//         alert(num1+" it is the greatest");
//     }
//     else{
//         //console.log(num3+" It is the greatest");
//         alert(num3+" it is the greatest");


//     }
// }
// else if(num2>num3){
//     // console.log(num2+" It is the greatest");
//     alert(num2+" it is the greatest");
// }
// else{
//     // console.log(num3+" It is the greatest");
//     alert(num3+" it is the greatest");
// }

//Write a program to check if 2 numbers have the same lastdigit
let n1 = 3989898;
let n2 = 478;
if(n1%10==n2%10){
    console.log("Same");
}
else{
    console.log("Not same");
}
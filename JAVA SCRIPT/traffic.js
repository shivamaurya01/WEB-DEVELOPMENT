//Traffic Light system
let color = 'yellow';
if(color =='red'){
    console.log("Stop");

}
if(color == 'yellow'){
    console.log("SlowDown");
}
if(color=="green"){
    console.log("Go");
}

let age = 19;
if(age>=18){
    console.log("You can vote");
}else if(age<18){
    console.log("You can not vote");
}


//Practice Question 
let size = 'm';
if(size === 'xl'){
    console.log('250');

}
else if(size === 'l'){
    console.log('200');

}
else if(size === 'm'){
    console.log('100');
}
else{
    console.log('50');
}

//nested if -else statement
let marks = 55;
if(marks >=33){
    console.log("Pass");
    if(marks >= 80){
        console.log("Grade: O");
    }
    else{
        console.log("Grade :A");
    }
}
else{

    console.log("Better luck next time");
}
//Logical Operator
//And Operator 
console.log((5>3) && (3<5));//true
console.log((2==2)&&(3>5));//false
let mark = 10;
if(mark >= 33 && mark >= 80){
    console.log("Pass");
    console.log("A+");
}
else{
    console.log("fail");
}


//Logical Or
console.log((3==5)||(5>6));

//Not operator
console.log(!(5>4));
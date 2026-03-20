let max = prompt("Enter the maximum number:  ");
//console.log(max);
const random = Math.floor(Math.random() *max)+1;
console.log(random);
let guess = prompt("Guess the number: ");
while(true){
    if(guess=="quit"){
        console.log("User quit");
        break;
    }
    if(guess==random){
        console.log("You are right! congrats!!" + random);
        break;
    }
    else if(guess<random){
        guess=prompt("Hint: You guess was tooo small");

    }
    else{
        guess=prompt("Hint: Your number was too large ");
    }
    // else{
    //     guess =prompt("Your guess is wrong please try again");
    // }

}
//Question1
let num = [1,2,3,4,5,6,2,3];
for(let i =0;i<num.length;i++){
    if(num[i]!=2){
        console.log(num[i]);
    }
}
//Quetion 2 WriteaJSprogramtofindthenoofdigitsinanumber
let number = 232455;
let count =0;
let copy = number;
while(copy > 0){
    copy = Math.floor(copy/10);
    count++;


}
console.log(count);

//Question 3 WriteaJSprogramtofindthesumofdigitsinanumber

let numb = 287152;
let sum=0;
//let add = numb;
while(numb>0){
    sum = sum+numb%10;
    numb = Math.floor(numb/10);
}
console.log(sum);

//Question 4 print the factorial of the number 

//let factno = prompt("Enter the number which factorial you want: ");
// let fact = 1;
// for(let i =1;i<=factno;i++){
//     fact = (`${fact*i}`);
// }
//console.log(alert(`Factorial is ${fact}`));

//Find the largest positive number in array

let arr = [23,444,123,34,35,1000];
let n = arr.length;
let arrm = 0;
for(let i=0;i<n;i++){
    if(arrm <arr[i]){
        arrm=arr[i];
    }
}
console.log(arrm);
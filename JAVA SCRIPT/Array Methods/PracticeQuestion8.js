//Question 1
const operation=(arr)=>{

    let sum =0;
    for(let i=0;i<arr.length;i++){
        sum = sum+(arr[i]*arr[i]);

    }
    console.log(sum/arr.length);

};
let arr = [1,2,3,4,5];
operation(arr);

// Question 2
let arrr=[1,2,3,4];
let newArr = arrr.map(function(el){
    return el+5;
});
console.log(newArr);

//Question 3 Createanewarraywhoseelementsareinuppercaseofwordspresentintheoriginalarray.
let strings = ["bob","alan","musk","trump"];
console.log(strings.map((string)=> string.toUpperCase()));

//Question 4

function double(){
    console
}
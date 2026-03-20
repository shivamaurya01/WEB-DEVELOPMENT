//Question 1
let nums = [7,9,0,-2,10,11];
console.log(nums.slice(0,3));
//Question 2
console.log(nums.slice(nums.length-3));
// console.log(nums.reverse().slice(0,3));

//Question 3 check string is blank or not 

let str = [];
if(str[0]!=null){
    console.log("Not Blank");
}
else{
    console.log("Blank");
}

//Question 4 WriteaJavaScriptprogramtotestwhetherthecharacteratthegiven(character)indexislowercase.
// let char = prompt("Enter the string : ");
// let ind = prompt("Enter the index: ");
// if(char[ind] == char[ind].toLowerCase()){
//     alert("Character in the lower case");
// }else{
//     alert("Character in the upper case");
// }

//Question 5 WriteaJavaScriptprogramtostripleadingandtrailingspacesfromastring

// let mess = prompt("Enter the string: ");
// console.log(`Original String is= ${mess}`);
// console.log(`After trim string is = ${mess.trim()}`);//here i used templates litrals

//Question 6 WriteaJavaScriptprogramtocheckifanelementexistsinanarrayornot.

let arr = [4,2,34,76,434,"Shgiva","Apple"];
console.log(arr.includes("Apple"));
//WriteaJavaScriptfunctionthatreturnsarrayelementslargerthananumber

let arr = [1,2,3,4,5,6,20,10,23,35,6,10];
let num = 10;
function find(arr,num){
    for(let i =0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}
find(arr,num);

// .WriteaJavaScriptfunctiontoextractuniquecharactersfromastring.Example:str=“abcdabcdefgggh”ans=“abcdefgh”

let str = "abcdabcdefgggh"

function unique(str){
        let newstr = "";
        for(let i =0;i<str.length;i++){
            let curr = str[i];
            if(newstr.indexOf(curr) == -1){
                newstr=newstr+curr;
            }
        }
        return newstr;
        
}

console.log(unique(str));

//here we have to notice that indexof this methode only applied on the string not  the array for that reason we have to change the data type;

// question no 3 find the longest string from the array

let list = ["America","Germany","USA"];
function len(list){
let ansind = 0;
for(let i =0;i<list.length;i++){
    let anslen = list[ansind].length;
    let currlen = list[i].length;
    if(currlen>anslen){
        ansind = i;
    }
}
return list[ansind];
}
console.log(len(list));

//Question no 4 count the vowel in the string

let alpha = "aeiou";
function vowel(alpha){
    let count = 0;
    for(let i = 0; i < alpha.length;i++){
        if(
            str.charAt(i) == "a" ||
            str.charAt(i) == "e" ||
            str.charAt(i) == "i" ||
            str.charAt(i) == "o" ||
            str.charAt(i) == "u"
 
        ){
            count++;
        }
    }
    return count;
   
}
console.log(vowel(alpha));

//question no 5 javascript function to generate a random number within a range(start,end);

function generate(start,end){
    let diff = end - start;
    return Math.floor(Math.random()*diff)+start;
}
console.log(generate(1,10));